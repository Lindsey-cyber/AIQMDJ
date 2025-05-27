// src/components/BallModel.jsx

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function BallModel({ url = '/assets/models/ball.glb' }) {
  const ref = useRef()
  const { scene } = useGLTF(url)

  // 球体轻微左右摇摆动效（可删除）
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.2
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, 1, 0]}
      scale={0.3}
    />
  )
}