'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import Link from 'next/link'
import Model3D from '@/components/Model3D'

export default function Main() {
  const categories = [
    { id: 'avatars', icon: '👤', label: 'AVATARS' },
    { id: 'fashion', icon: '👔', label: 'FASHION' },
    { id: 'music', icon: '🎵', label: 'MUSIC' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-monet-cream via-monet-sand to-monet-rose flex flex-col items-center justify-center p-24 md:p-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-monet-blue/10 via-transparent to-monet-lavender/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-32 float-animation"
      >
        <div className="w-[400px] h-[500px] bg-white/30 backdrop-blur-md rounded-[200px_200px_80px_80px] flex items-center justify-center shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
          <Suspense fallback={<div className="text-8xl">👤</div>}>
            <Model3D />
          </Suspense>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex gap-20 md:gap-24"
      >
        {categories.map((category, index) => (
          <Link key={category.id} href={`/browse?type=${category.id}`}>
            <motion.div
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-[200px] h-[200px] bg-white/40 backdrop-blur-sm rounded-full flex flex-col items-center justify-center cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-500"
            >
              <div className="text-7xl mb-2">{category.icon}</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-gray-600 font-light">
                {category.label}
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 text-[8px] tracking-wider uppercase text-gray-400"
      >
        AI CULTURE LICENSE v1.0
      </motion.div>
    </main>
  )
}