'use client'

import { useState, useEffect } from 'react'

export default function Taskbar() {
  const [time, setTime] = useState('')
  const [showStart, setShowStart] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Start Menu */}
      {showStart && (
        <div className="absolute bottom-12 left-0 bg-win95-gray win95-border w-64">
          <div className="bg-gradient-to-r from-win95-blue to-win95-teal text-white font-bold p-2 text-xl">
            AI Culture License
          </div>
          <div className="border-t-2 border-white">
            <div className="hover:bg-win95-blue hover:text-white p-3 cursor-pointer flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span>Browse Avatars</span>
            </div>
            <div className="hover:bg-win95-blue hover:text-white p-3 cursor-pointer flex items-center gap-3">
              <span className="text-2xl">👔</span>
              <span>Browse Fashion</span>
            </div>
            <div className="hover:bg-win95-blue hover:text-white p-3 cursor-pointer flex items-center gap-3">
              <span className="text-2xl">🎵</span>
              <span>Browse Music</span>
            </div>
            <hr className="border-gray-400" />
            <div className="hover:bg-win95-blue hover:text-white p-3 cursor-pointer flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              <span>Settings</span>
            </div>
            <div className="hover:bg-win95-blue hover:text-white p-3 cursor-pointer flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <span>Shut Down</span>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-win95-gray win95-border h-12 flex items-center justify-between px-1 z-50">
        <button 
          className="win95-button flex items-center gap-2 font-bold"
          onClick={() => setShowStart(!showStart)}
        >
          <span className="text-xl">🟩</span>
          <span>Start</span>
        </button>
        <div className="flex-1" />
        <div className="win95-border-inset px-4 py-1 flex items-center gap-3">
          <span className="text-xl">🔊</span>
          <span className="font-mono">{time}</span>
        </div>
      </div>
    </>
  )
}