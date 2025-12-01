'use client'

import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Window95 from '@/components/Window95'
import Taskbar from '@/components/Taskbar'
import Link from 'next/link'

const mockProducts = {
  avatars: [
    { id: 1, name: 'Celebrity Avatar A', price: 250, license: 'Commercial' },
    { id: 2, name: 'Celebrity Avatar B', price: 150, license: 'Personal' },
    { id: 3, name: 'Celebrity Avatar C', price: 500, license: 'Extended' },
    { id: 4, name: 'Celebrity Avatar D', price: 300, license: 'Commercial' },
    { id: 5, name: 'Celebrity Avatar E', price: 200, license: 'Personal' },
    { id: 6, name: 'Celebrity Avatar F', price: 400, license: 'Extended' },
  ],
  fashion: [
    { id: 1, name: 'Designer Jacket', price: 100, license: 'Commercial' },
    { id: 2, name: 'Luxury Sneakers', price: 80, license: 'Personal' },
    { id: 3, name: 'Haute Couture Dress', price: 200, license: 'Extended' },
    { id: 4, name: 'Statement Accessories', price: 50, license: 'Personal' },
    { id: 5, name: 'Streetwear Collection', price: 120, license: 'Commercial' },
    { id: 6, name: 'Avant-Garde Piece', price: 180, license: 'Extended' },
  ],
  music: [
    { id: 1, name: 'Hip-Hop Track Alpha', price: 300, license: 'Commercial' },
    { id: 2, name: 'R&B Single Beta', price: 200, license: 'Personal' },
    { id: 3, name: 'Experimental Beat Gamma', price: 250, license: 'Commercial' },
    { id: 4, name: 'Pop Anthem Delta', price: 400, license: 'Extended' },
    { id: 5, name: 'Indie Track Epsilon', price: 150, license: 'Personal' },
  ]
}

export default function Browse() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'avatars'
  const [filter, setFilter] = useState('all')
  const products = mockProducts[type] || []

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.license.toLowerCase() === filter)

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-win95-teal via-win95-blue to-black scanline vhs-noise overflow-hidden">
      <Window95 
        title={`Browse ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        defaultPosition={{ x: 150, y: 80 }}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {type === 'avatars' && '👤 Celebrity Avatars'}
              {type === 'fashion' && '👔 Designer Fashion'}
              {type === 'music' && '🎵 Artist Music'}
            </h1>
            
            <div className="flex gap-2">
              <button 
                className={`win95-button ${filter === 'all' ? 'win95-border-inset' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`win95-button ${filter === 'personal' ? 'win95-border-inset' : ''}`}
                onClick={() => setFilter('personal')}
              >
                Personal
              </button>
              <button 
                className={`win95-button ${filter === 'commercial' ? 'win95-border-inset' : ''}`}
                onClick={() => setFilter('commercial')}
              >
                Commercial
              </button>
              <button 
                className={`win95-button ${filter === 'extended' ? 'win95-border-inset' : ''}`}
                onClick={() => setFilter('extended')}
              >
                Extended
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                className="win95-border bg-white p-4 cursor-pointer"
              >
                <div className="win95-border-inset aspect-square bg-gray-200 flex items-center justify-center mb-3">
                  <span className="text-6xl">
                    {type === 'avatars' && '👤'}
                    {type === 'fashion' && '👔'}
                    {type === 'music' && '🎵'}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-win95-blue text-white px-2 py-1">
                    {product.license}
                  </span>
                  <span className="font-bold text-lg">${product.price}</span>
                </div>
                <button className="win95-button w-full mt-3">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-100 border-2 border-yellow-400 p-4">
            <p className="font-bold">📜 License Information</p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Personal:</strong> Non-commercial AI generation only</li>
              <li>• <strong>Commercial:</strong> Business/marketing content allowed</li>
              <li>• <strong>Extended:</strong> Unlimited commercial + resale rights</li>
            </ul>
          </div>

          <Link href="/">
            <button className="win95-button mt-6 w-full py-3">
              Back to Home
            </button>
          </Link>
        </div>
      </Window95>

      <Taskbar />
    </main>
  )
}