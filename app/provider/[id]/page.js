'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Window95 from '@/components/Window95'
import Taskbar from '@/components/Taskbar'
import Link from 'next/link'

export default function ProviderProfile({ params }) {
  const [activeTab, setActiveTab] = useState('products')

  // Mock provider data
  const provider = {
    id: params.id,
    username: 'asap_rocky_tbilisi',
    instagram: '@asap_rocky_tbilisi',
    followers: '125K',
    bio: 'Tbilisi-based artist, fashion creator, and cultural icon. Licensing my work for the AI generation.',
    products: [
      { id: 1, name: 'Full 360° Avatar', type: 'avatar', price: 500, license: 'Extended' },
      { id: 2, name: 'Designer Jacket Collection', type: 'fashion', price: 200, license: 'Commercial' },
      { id: 3, name: 'Exclusive Track "Tbilisi Nights"', type: 'music', price: 300, license: 'Commercial' },
      { id: 4, name: 'Streetwear Accessories Set', type: 'fashion', price: 150, license: 'Personal' },
    ],
    stats: {
      totalSales: 47,
      revenue: '$12,450',
      rating: 4.8
    }
  }

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-win95-teal via-win95-blue to-black scanline vhs-noise overflow-hidden">
      <Window95 
        title={`Provider: ${provider.username}`}
        defaultPosition={{ x: 100, y: 60 }}
      >
        <div className="p-8">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6">
            <button
              className={`win95-button flex-1 ${activeTab === 'social' ? 'win95-border-inset' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              📱 Instagram Profile
            </button>
            <button
              className={`win95-button flex-1 ${activeTab === 'products' ? 'win95-border-inset' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              📦 Product Catalog
            </button>
          </div>

          {/* Social Tab */}
          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="win95-border p-6 bg-white">
                <div className="flex items-start gap-6">
                  {/* Profile Picture */}
                  <div className="win95-border-inset w-32 h-32 bg-gray-200 flex items-center justify-center text-6xl flex-shrink-0">
                    👤
                  </div>
                  
                  {/* Profile Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{provider.username}</h2>
                    <p className="text-win95-blue font-bold mb-3">{provider.instagram}</p>
                    <div className="flex gap-6 mb-4">
                      <div>
                        <div className="font-bold text-lg">{provider.followers}</div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{provider.stats.totalSales}</div>
                        <div className="text-sm text-gray-600">Sales</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{provider.stats.rating}/5</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{provider.bio}</p>
                  </div>
                </div>
              </div>

              {/* Instagram Feed Preview */}
              <div>
                <h3 className="font-bold text-xl mb-3">Recent Posts</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="win95-border-inset aspect-square bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🖼️</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-100 border-2 border-win95-blue p-4">
                <p className="font-bold mb-2">🔗 Instagram Integration</p>
                <p className="text-sm">
                  This page displays real Instagram data. Connect your Instagram account to auto-sync your profile, photos, and follower count.
                </p>
              </div>
            </motion.div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Product Catalog</h2>
                <div className="text-right">
                  <div className="font-bold text-lg">Total Revenue: {provider.stats.revenue}</div>
                  <div className="text-sm text-gray-600">{provider.stats.totalSales} sales</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {provider.products.map((product) => (
                  <div key={product.id} className="win95-border p-4 bg-white">
                    <div className="win95-border-inset aspect-square bg-gray-200 flex items-center justify-center mb-3">
                      <span className="text-5xl">
                        {product.type === 'avatar' && '👤'}
                        {product.type === 'fashion' && '👔'}
                        {product.type === 'music' && '🎵'}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm bg-win95-blue text-white px-2 py-1">
                        {product.license}
                      </span>
                      <span className="font-bold text-lg">${product.price}</span>
                    </div>
                    <button className="win95-button w-full">Purchase License</button>
                  </div>
                ))}
              </div>

              <button className="win95-button w-full py-3 text-lg font-bold">
                + Add New Product
              </button>
            </motion.div>
          )}

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