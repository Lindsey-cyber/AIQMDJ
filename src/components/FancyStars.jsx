// src/components/FancyStars.jsx

import React, { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FancyStars({ count = 1000 }) {
  const starGeometry = useMemo(() => new THREE.SphereGeometry(0.02, 12, 12), [])
  const starMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('white'),
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      }),
    []
  )

  const stars = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 80
      const y = (Math.random() - 0.5) * 80
      const z = -Math.random() * 80
      positions.push(new THREE.Vector3(x, y, z))
    }
    return positions
  }, [count])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    starMaterial.opacity = 0.7 + 0.3 * Math.sin(t * 2)
  })

  return (
    <>
      {stars.map((pos, i) => (
        <mesh key={i} geometry={starGeometry} material={starMaterial} position={pos} />
      ))}
    </>
  )
}