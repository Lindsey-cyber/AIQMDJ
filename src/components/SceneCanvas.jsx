// src/components/SceneCanvas.jsx

import React, { useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FancyStars from './FancyStars'

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
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Background & Fog */}
      <color attach="background" args={['#1f2040']} />
      <fog attach="fog" args={['#1f2040', 8, 20]} />

      {/* Lighting */}
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

      {/* Stars */}
      <FancyStars count={10000} />

      {/* Scene Content */}
      {children}


      {/* Dev Controls */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}
