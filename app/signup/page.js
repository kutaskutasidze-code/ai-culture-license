'use client'

import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import Window95 from '@/components/Window95'
import Taskbar from '@/components/Taskbar'
import Link from 'next/link'

function SignupContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'provider'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    instagram: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup:', type, formData)
    alert(`Welcome to AI Culture License! Account type: ${type}`)
  }

  return (
    <Window95 
      title={type === 'provider' ? 'Provider Sign Up' : 'Consumer Sign Up'}
      defaultPosition={{ x: 200, y: 100 }}
    >
      <div className="p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">
          {type === 'provider' ? 'Create Culture' : 'Use Culture'}
        </h1>
        <p className="mb-6 text-gray-600">
          {type === 'provider' 
            ? 'License your celebrity status, fashion designs, or music for AI generation.'
            : 'Get legal rights to use celebrity avatars, fashion items, and music in your AI-generated content.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-1">Username</label>
            <input
              type="text"
              className="win95-border-inset w-full px-3 py-2"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Email</label>
            <input
              type="email"
              className="win95-border-inset w-full px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Instagram Handle</label>
            <div className="flex items-center">
              <span className="win95-border bg-white px-3 py-2">@</span>
              <input
                type="text"
                className="win95-border-inset flex-1 px-3 py-2"
                placeholder="username"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                required
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              We'll display your Instagram profile on your page
            </p>
          </div>

          <div>
            <label className="block font-bold mb-1">
              {type === 'provider' ? 'What do you create?' : 'What do you use AI for?'}
            </label>
            <textarea
              className="win95-border-inset w-full px-3 py-2 h-24 resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={type === 'provider' 
                ? 'I create music, fashion designs, etc.'
                : 'I create AI-generated marketing content for brands'}
              required
            />
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-400 p-4 mt-6">
            <p className="font-bold mb-2">⚠️ Important Legal Notice</p>
            <p className="text-sm">
              {type === 'provider'
                ? 'By signing up, you confirm you own the rights to license your content for AI generation. All licenses include usage tracking and terms enforcement.'
                : 'All purchases include a legal license certificate. Unauthorized use of unlicensed content may result in legal action.'}
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <button type="submit" className="win95-button flex-1 py-3 text-lg font-bold">
              Create Account
            </button>
            <Link href="/" className="flex-1">
              <button type="button" className="win95-button w-full py-3 text-lg">
                Cancel
              </button>
            </Link>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {type === 'provider' ? (
            <>
              Looking to license culture instead?{' '}
              <Link href="/signup?type=consumer" className="text-win95-blue font-bold">
                Sign up as Consumer
              </Link>
            </>
          ) : (
            <>
              Are you a creator?{' '}
              <Link href="/signup?type=provider" className="text-win95-blue font-bold">
                Sign up as Provider
              </Link>
            </>
          )}
        </div>
      </div>
    </Window95>
  )
}

export default function Signup() {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-win95-teal via-win95-blue to-black scanline vhs-noise overflow-hidden">
      <Suspense fallback={
        <Window95 title="Loading..." defaultPosition={{ x: 200, y: 100 }}>
          <div className="p-8 text-center">Loading...</div>
        </Window95>
      }>
        <SignupContent />
      </Suspense>
      <Taskbar />
    </main>
  )
}
