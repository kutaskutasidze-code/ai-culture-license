'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Landing() {
  return (
    <main className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-light tracking-[0.5em] uppercase mb-5">
          AI CULTURE LICENSE
        </h1>
        <p className="text-base md:text-lg font-light tracking-[0.3em] uppercase opacity-70">
          RUBY ROSARY OUT NOW
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Link href="/main">
          <button className="px-16 py-5 border border-white bg-transparent text-white text-sm tracking-[0.25em] uppercase font-light transition-all duration-300 hover:bg-white hover:text-black">
            ENTER
          </button>
        </Link>
      </motion.div>
    </main>
  )
}