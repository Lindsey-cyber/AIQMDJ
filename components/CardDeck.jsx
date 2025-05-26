// src/components/CardDeck.jsx

import React, { useState } from 'react'
import CardModel from './CardModel'

export default function CardDeck({ onCardClick = () => {} }) {
  // 初始三张卡片的数据（可扩展为状态控制）
  const cardPositions = [
    [-1.5, 0.5, 0],
    [0, 0.5, 0],
    [1.5, 0.5, 0],
  ]

  const cardRotations = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]

  const [visible, setVisible] = useState(true)

  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`)
    onCardClick(id)

    // （未来：可在这里触发 fadeOut 或卡组收回等动作）
  }

  if (!visible) return null

  return (
    <>
      {cardPositions.map((pos, idx) => (
        <CardModel
          key={idx}
          id={idx}
          position={pos}
          rotation={cardRotations[idx]}
          onClick={handleCardClick}
        />
      ))}
    </>
  )
}