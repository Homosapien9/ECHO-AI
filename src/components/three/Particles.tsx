'use client'

import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ count = 5200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      values[i3] = (Math.random() - 0.5) * 12
      values[i3 + 1] = (Math.random() - 0.5) * 8
      values[i3 + 2] = (Math.random() - 0.5) * 10
    }
    return values
  }, [count])

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.04
    pointsRef.current.rotation.x += delta * 0.01
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7dd3fc" size={0.018} sizeAttenuation transparent opacity={0.95} depthWrite={false} />
    </points>
  )
}
