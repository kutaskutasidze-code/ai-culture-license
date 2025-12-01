'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const items = [
    { id: 'avatars', icon: '👤', label: 'AVATARS', color: 'spray-pink', route: '/browse?type=avatars' },
    { id: 'fashion', icon: '👔', label: 'FASHION', color: 'spray-green', route: '/browse?type=fashion' },
    { id: 'music', icon: '🎵', label: 'MUSIC', color: 'spray-orange', route: '/browse?type=music' },
  ]

  return (
    <main className="min-h-screen gradient-mesh texture-overlay relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-spray-pink/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-spray-green/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-8 pt-32 pb-20 relative z-10">
        {/* Retro Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="retro-accent text-stone mb-8 text-center"
        >
          AI CULTURE LICENSE v1.0
        </motion.div>

        {/* Main Headline with Graffiti Style */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span 
            className="graffiti-text text-7xl md:text-9xl text-concrete-dark block mb-4"
            data-text="LICENSE"
          >
            LICENSE
          </span>
          <span 
            className="graffiti-text text-7xl md:text-9xl text-concrete-dark block"
            data-text="CULTURE"
          >
            CULTURE
          </span>
        </motion.h1>

        {/* Subheading - Clean Yeezy Style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xl md:text-2xl text-stone font-light tracking-wide mb-20 max-w-2xl mx-auto"
        >
          For AI Generation
        </motion.p>

        {/* Floating 3D Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Link href={item.route} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="glass-card p-12 text-center cursor-pointer float-3d group relative"
              >
                {/* Spray Paint Accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-${item.color} spray-drip opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="text-8xl mb-6 filter drop-shadow-lg">
                  {item.icon}
                </div>
                
                {/* Label */}
                <h3 className="font-display text-2xl text-concrete-dark tracking-wide mb-2">
                  {item.label}
                </h3>
                
                {/* Hover Description */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    height: hoveredItem === item.id ? 'auto' : 0
                  }}
                  className="text-stone text-sm overflow-hidden"
                >
                  {item.id === 'avatars' && 'Celebrity likeness for AI'}
                  {item.id === 'fashion' && 'Designer items licensed'}
                  {item.id === 'music' && 'Artist tracks for generation'}
                </motion.p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Buttons - Minimal Yeezy Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link href="/signup?type=provider">
            <button className="yeezy-button w-64">
              I Create Culture
            </button>
          </Link>
          
          <Link href="/signup?type=consumer">
            <button className="yeezy-button w-64 bg-transparent border-2 border-concrete-dark text-concrete-dark hover:bg-concrete-dark hover:text-concrete-light">
              I Use Culture
            </button>
          </Link>
        </motion.div>

        {/* Legal Notice - Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-stone text-sm leading-relaxed">
            Solving IP rights for AI generation. Every purchase includes a legal license certificate 
            proving commercial usage rights. Built for creators, by creators.
          </p>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <footer className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <span className="retro-accent text-stone">TBILISI 🇬🇪</span>
          <span className="retro-accent text-stone">v1.0</span>
        </div>
      </footer>
    </main>
  )
}
