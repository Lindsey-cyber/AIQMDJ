// src/components/CardModel.jsx

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CardModel({
  id = 0,
  url = '/assets/models/card.glb',
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  onClick = () => {},
}) {
  const ref = useRef()
  const { scene } = useGLTF(url)
  const [hovered, setHovered] = useState(false)

  // 鼠标悬停缩放效果
  useFrame(() => {
    if (ref.current) {
      const targetScale = hovered ? 1.1 : 1
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene.clone()}  // 避免多个卡片共享同一实例
      position={position}
      rotation={rotation}
      onClick={() => onClick(id)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={1}
    />
  )
}