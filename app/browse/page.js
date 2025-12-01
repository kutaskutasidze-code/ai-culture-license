'use client'

import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'

function BrowseContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'avatars'

  const products = {
    avatars: [
      { id: 1, name: 'Celebrity A', price: 250 },
      { id: 2, name: 'Celebrity B', price: 400 },
      { id: 3, name: 'Celebrity C', price: 180 },
    ],
    fashion: [
      { id: 1, name: 'Designer Jacket', price: 100 },
      { id: 2, name: 'Luxury Sneakers', price: 80 },
      { id: 3, name: 'Haute Couture', price: 200 },
    ],
    music: [
      { id: 1, name: 'Hip-Hop Track', price: 300 },
      { id: 2, name: 'R&B Single', price: 200 },
      { id: 3, name: 'Experimental Beat', price: 250 },
    ],
  }

  const items = products[type] || products.avatars
  const icon = type === 'avatars' ? '👤' : type === 'fashion' ? '👔' : '🎵'

  return (
    <main className="min-h-screen bg-gradient-to-br from-monet-cream via-monet-mint to-monet-blue p-24 md:p-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16"
      >
        <Link href="/main">
          <button className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/60 transition-all duration-300">
            <span className="text-xl">←</span>
          </button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {items.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="flex flex-col items-center"
          >
            <div className="w-[280px] h-[280px] bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] cursor-pointer hover:bg-white/60 transition-all duration-500">
              <div className="text-9xl">{icon}</div>
            </div>
            
            <div className="text-center">
              <p className="text-xs tracking-wider uppercase text-gray-600 font-light mb-2">
                {product.name}
              </p>
              <p className="text-2xl font-light text-gray-800">
                ${product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default function Browse() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-monet-cream via-monet-mint to-monet-blue flex items-center justify-center">
        <div className="text-sm tracking-wider uppercase text-gray-400">Loading...</div>
      </div>
    }>
      <BrowseContent />
    </Suspense>
  )
}