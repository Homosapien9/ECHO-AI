'use client'

import { AdaptiveDpr, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import MyBrainThing from './MyBrainThing'
import Particles from './Particles'

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 48 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#020617']} />
        <fog attach="fog" args={['#020617', 4, 12]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 2]} intensity={35} color="#7c3aed" />
        <pointLight position={[-2, -1, 3]} intensity={16} color="#22d3ee" />
        <MyBrainThing />
        <Particles count={isMobile ? 2400 : 5400} />
        <AdaptiveDpr pixelated />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={isMobile ? 0.35 : 0.6} />
      </Canvas>
    </div>
  )
}
