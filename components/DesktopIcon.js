'use client'

import { motion } from 'framer-motion'

export default function DesktopIcon({ icon, label, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex flex-col items-center gap-2 cursor-pointer select-none group w-24"
    >
      <div className="text-6xl filter drop-shadow-lg group-hover:brightness-125 transition-all">
        {icon}
      </div>
      <div className="font-pixel text-xs text-white text-center bg-win95-blue bg-opacity-50 px-2 py-1 rounded group-hover:bg-opacity-100 transition-all">
        {label}
      </div>
    </motion.div>
  )
}