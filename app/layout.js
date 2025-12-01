import './globals.css'

export const metadata = {
  title: 'AI Culture License',
  description: 'License celebrity avatars, fashion items, and music for AI-generated content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}