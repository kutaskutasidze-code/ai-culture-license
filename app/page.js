'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Window95 from '@/components/Window95'
import DesktopIcon from '@/components/DesktopIcon'
import Taskbar from '@/components/Taskbar'
import Link from 'next/link'

export default function Home() {
  const [openWindow, setOpenWindow] = useState(null)

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-win95-teal via-win95-blue to-black scanline vhs-noise overflow-hidden">
      {/* Desktop Icons */}
      <div className="p-8 grid grid-cols-1 gap-6 w-fit">
        <DesktopIcon 
          icon="👤" 
          label="AVATARS"
          onClick={() => setOpenWindow('avatars')}
        />
        <DesktopIcon 
          icon="👔" 
          label="FASHION"
          onClick={() => setOpenWindow('fashion')}
        />
        <DesktopIcon 
          icon="🎵" 
          label="MUSIC"
          onClick={() => setOpenWindow('music')}
        />
      </div>

      {/* Hero Text - Glitch Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <h1 
          className="text-6xl md:text-8xl font-pixel mb-8 glitch text-neon-cyan"
          data-text="LICENSE CULTURE"
        >
          LICENSE CULTURE
        </h1>
        <p className="text-2xl md:text-3xl font-pixel text-neon-pink mb-12 glitch" data-text="FOR AI">
          FOR AI
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center flex-wrap">
          <Link href="/signup?type=provider">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="win95-button text-xl font-bold"
            >
              I CREATE CULTURE
            </motion.button>
          </Link>
          <Link href="/signup?type=consumer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="win95-button text-xl font-bold"
            >
              I USE CULTURE
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Windows */}
      {openWindow === 'avatars' && (
        <Window95
          title="Celebrity Avatars"
          onClose={() => setOpenWindow(null)}
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">360° Celebrity Avatars</h2>
            <p className="mb-4">License verified celebrity likeness for AI-generated content.</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="win95-border-inset p-4 aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              ))}
            </div>
            <Link href="/browse?type=avatars">
              <button className="win95-button mt-6 w-full">Browse All</button>
            </Link>
          </div>
        </Window95>
      )}

      {openWindow === 'fashion' && (
        <Window95
          title="Designer Fashion"
          onClose={() => setOpenWindow(null)}
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Fashion Brand Items</h2>
            <p className="mb-4">License designer pieces for AI fashion generation.</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="win95-border-inset p-4 aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👔</span>
                </div>
              ))}
            </div>
            <Link href="/browse?type=fashion">
              <button className="win95-button mt-6 w-full">Browse All</button>
            </Link>
          </div>
        </Window95>
      )}

      {openWindow === 'music' && (
        <Window95
          title="Artist Music"
          onClose={() => setOpenWindow(null)}
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Real Artist Music</h2>
            <p className="mb-4">License tracks for AI music generation and remixes.</p>
            <div className="space-y-2">
              {['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'].map((track, i) => (
                <div key={i} className="win95-border p-3 bg-white flex items-center gap-3">
                  <span className="text-2xl">🎵</span>
                  <span>{track}</span>
                </div>
              ))}
            </div>
            <Link href="/browse?type=music">
              <button className="win95-button mt-6 w-full">Browse All</button>
            </Link>
          </div>
        </Window95>
      )}

      {/* Taskbar */}
      <Taskbar />
    </main>
  )
}