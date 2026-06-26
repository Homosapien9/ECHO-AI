'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function MyBrainThing() {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.x += delta * 0.14
    group.current.rotation.y += delta * 0.26
  })

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.1, 0.3, 220, 32]} />
        <meshStandardMaterial color="#c084fc" emissive="#7c3aed" emissiveIntensity={0.9} roughness={0.18} metalness={0.35} wireframe />
      </mesh>
      <mesh scale={1.05}>
        <torusKnotGeometry args={[1.1, 0.3, 220, 32]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.08} />
      </mesh>
    </group>
  )
}
