import './globals.css'

export const metadata = {
  title: 'AI Culture License',
  description: 'License celebrity avatars, fashion items, and music for AI-generated content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-ms-sans bg-black overflow-hidden">
        {children}
      </body>
    </html>
  )
}