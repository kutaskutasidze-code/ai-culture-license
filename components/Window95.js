'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Window95({ title, children, onClose, defaultPosition = { x: 100, y: 100 } }) {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      drag={!isMaximized}
      dragMomentum={false}
      className={`absolute bg-win95-gray win95-border ${
        isMaximized ? 'inset-0 m-0' : 'w-3/4 max-w-4xl'
      }`}
      style={!isMaximized ? { left: defaultPosition.x, top: defaultPosition.y } : {}}
    >
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-win95-blue to-win95-teal px-2 py-1 flex items-center justify-between cursor-move">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="win95-button px-3 py-0 text-sm h-6 leading-none">_</button>
          <button 
            className="win95-button px-3 py-0 text-sm h-6 leading-none"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            □
          </button>
          <button 
            className="win95-button px-3 py-0 text-sm h-6 leading-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-win95-gray border-t border-white border-b-2 border-b-gray-600 px-2 py-1 flex gap-4">
        <span className="cursor-pointer hover:bg-win95-blue hover:text-white px-2">File</span>
        <span className="cursor-pointer hover:bg-win95-blue hover:text-white px-2">Edit</span>
        <span className="cursor-pointer hover:bg-win95-blue hover:text-white px-2">View</span>
        <span className="cursor-pointer hover:bg-win95-blue hover:text-white px-2">Help</span>
      </div>

      {/* Content */}
      <div className="bg-white overflow-auto" style={{ maxHeight: isMaximized ? 'calc(100vh - 100px)' : '500px' }}>
        {children}
      </div>
    </motion.div>
  )
}