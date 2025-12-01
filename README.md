# AI Culture License

A marketplace for licensing celebrity avatars, fashion items, and music for AI-generated content.

## Design Philosophy

**Landing Page**: ASAP Rocky style - Minimal, dark, mysterious
**Main App**: Yeezy Supply style - Soft pastels, no boxes, huge elements, Monet-inspired

### Key Design Principles

1. **NO BOXES** - Only soft, rounded shapes (inspired by Kanye: "tired of all the boxes")
2. **NO STRAIGHT LINES** - Everything is curved
3. **Monet Color Palette** - Soft blues, lavenders, creams, roses
4. **Medical Supply Aesthetic** - Clean, functional, lo-fi
5. **HUGE Elements** - 200px+ circles, 100px+ padding
6. **Beautiful Simplicity** - Minimal text, maximum breathing room

## Tech Stack

- Next.js 14
- React 18
- Framer Motion (animations)
- Three.js + React Three Fiber (3D models)
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── page.js           # Landing (ASAP style)
│   ├── main/page.js      # Main app (Yeezy style)
│   └── browse/page.js    # Product browsing
├── components/
│   └── Model3D.js        # 3D avatar model
└── tailwind.config.js    # Monet color palette
```

## Color Palette

- Soft Blue: `#a8c0d9`
- Lavender: `#c8b5d9`
- Cream: `#f5f0e8`
- Rose: `#f2d7d5`
- Mint: `#d4e8d4`
- Sand: `#e8dcc8`

## License

MIT