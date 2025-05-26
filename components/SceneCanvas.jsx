// src/components/SceneCanvas.jsx

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function SceneCanvas({ children }) {
  return (
    <Canvas
      shadows={false}
      camera={{
        fov: 35,
        near: 0.1,
        far: 100,
        position: [0, 1.8, 5],
      }}
      style={{ width: '100vw', height: '100vh', background: '#000000' }}
    >
      {/* 光照配置 */}
      <ambientLight intensity={0.3} />
      <directionalLight
        intensity={1.2}
        position={[5, 10, 5]}
        color={'#ffffff'}
      />
      <pointLight
        intensity={0.6}
        position={[-3, 2, -2]}
        color={'#ffcc99'}
      />

      {/* 插槽组件，如 BallModel / CardDeck 等 */}
      {children}

      {/* 调试控制器（正式发布建议移除） */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}