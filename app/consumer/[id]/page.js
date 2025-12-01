'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Window95 from '@/components/Window95'
import Taskbar from '@/components/Taskbar'
import Link from 'next/link'

export default function ConsumerProfile({ params }) {
  const [activeTab, setActiveTab] = useState('collection')

  // Mock consumer data
  const consumer = {
    id: params.id,
    username: 'ai_creator_studio',
    instagram: '@ai_creator_studio',
    followers: '45K',
    bio: 'AI content creation studio based in Tbilisi. We create cutting-edge AI-generated marketing campaigns for global brands.',
    company: 'AI Creator Studio',
    website: 'aicreatorstudio.com',
    licenses: [
      { id: 1, product: 'Celebrity Avatar A', purchaseDate: '2024-11-15', license: 'Commercial', price: 250 },
      { id: 2, product: 'Designer Jacket Collection', purchaseDate: '2024-11-20', license: 'Extended', price: 200 },
      { id: 3, product: 'Hip-Hop Track Alpha', purchaseDate: '2024-11-25', license: 'Commercial', price: 300 },
    ],
    stats: {
      totalSpent: '$750',
      activeLicenses: 3,
      projects: 12
    }
  }

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-win95-teal via-win95-blue to-black scanline vhs-noise overflow-hidden">
      <Window95 
        title={`Consumer: ${consumer.username}`}
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
              className={`win95-button flex-1 ${activeTab === 'collection' ? 'win95-border-inset' : ''}`}
              onClick={() => setActiveTab('collection')}
            >
              📋 My Collection
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
                    🎨
                  </div>
                  
                  {/* Profile Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{consumer.username}</h2>
                    <p className="text-win95-blue font-bold mb-3">{consumer.instagram}</p>
                    <div className="flex gap-6 mb-4">
                      <div>
                        <div className="font-bold text-lg">{consumer.followers}</div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{consumer.stats.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{consumer.stats.activeLicenses}</div>
                        <div className="text-sm text-gray-600">Licenses</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{consumer.bio}</p>
                    <div className="flex gap-4 text-sm">
                      <div><strong>Company:</strong> {consumer.company}</div>
                      <div><strong>Website:</strong> <a href="#" className="text-win95-blue">{consumer.website}</a></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Preview */}
              <div>
                <h3 className="font-bold text-xl mb-3">AI-Generated Portfolio</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="win95-border-inset aspect-square bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🤖</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-100 border-2 border-green-600 p-4">
                <p className="font-bold mb-2">✅ Verified Consumer</p>
                <p className="text-sm">
                  This consumer has verified licensing and actively uses AI Culture License for commercial projects. All licenses are up to date.
                </p>
              </div>
            </motion.div>
          )}

          {/* Collection Tab */}
          {activeTab === 'collection' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Licensed Collection</h2>
                <div className="text-right">
                  <div className="font-bold text-lg">Total Spent: {consumer.stats.totalSpent}</div>
                  <div className="text-sm text-gray-600">{consumer.stats.activeLicenses} active licenses</div>
                </div>
              </div>

              <div className="space-y-3">
                {consumer.licenses.map((license) => (
                  <div key={license.id} className="win95-border p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{license.product}</h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>📅 {license.purchaseDate}</span>
                          <span>📜 {license.license} License</span>
                          <span>💵 ${license.price}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="win95-button text-sm">Download</button>
                        <button className="win95-button text-sm">📄 Certificate</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-100 border-2 border-win95-blue p-4">
                <p className="font-bold mb-2">🔐 License Protection</p>
                <ul className="text-sm space-y-1">
                  <li>• All downloads include embedded license ID for tracking</li>
                  <li>• Certificates are legally binding proof of usage rights</li>
                  <li>• Re-download anytime from your collection</li>
                  <li>• Usage analytics available for Extended licenses</li>
                </ul>
              </div>

              <Link href="/browse">
                <button className="win95-button w-full py-3 text-lg font-bold">
                  Browse More Licenses
                </button>
              </Link>
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