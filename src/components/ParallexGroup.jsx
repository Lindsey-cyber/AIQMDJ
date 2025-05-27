// src/components/ParallaxGroup.jsx
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export default function ParallaxGroup({ children }) {
  const groupRef = useRef()
  const { mouse } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.2
      groupRef.current.rotation.x = mouse.y * 0.2
    }
  })

  return <group ref={groupRef}>{children}</group>
}