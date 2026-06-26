/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  webpack(config) {
    // three.js is heavy. this at least makes webpack think about it harder.
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  },
}

module.exports = nextConfig
