// src/components/StarsField.jsx
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function StarsField({ count = 1000 }) {
  const points = useRef()

  const stars = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [count])

  useFrame(({ clock }) => {
    if (points.current) {
      const time = clock.getElapsedTime()
      points.current.material.size = 0.1 + 0.05 * Math.sin(time * 3)
    }
  })

  return (
    <points ref={points} geometry={stars}>
      <pointsMaterial
        color="#ffffff"
        size={0.1}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  )
}