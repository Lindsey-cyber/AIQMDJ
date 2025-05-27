// src/App.jsx

import { useState } from 'react'

import SceneCanvas from './components/SceneCanvas'
import BallModel from './components/BallModel'
import CardDeck from './components/CardDeck'
import UIControlPanel from './components/UIControlPanel'
import { runAnimationSequence } from './systems/AnimationSystem'

function App() {
  const [cardVisible, setCardVisible] = useState(true)

  const handleAskClick = () => {
    runAnimationSequence(setCardVisible)
  }

  return (
    <>
      <SceneCanvas>
        <BallModel />
        <CardDeck visible={cardVisible} />
      </SceneCanvas>

      <UIControlPanel onAsk={handleAskClick} />
    </>
  )
}

export default App