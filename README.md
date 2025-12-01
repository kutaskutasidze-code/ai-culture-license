# AI Culture License 🎨

> **License celebrity avatars, fashion items, and music for AI-generated content**

A marketplace solving the IP rights problem in AI generation. Creators (celebrities, fashion designers, musicians) license their likeness and work for legal commercial use in AI-generated content.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Status](https://img.shields.io/badge/status-prototype-orange)

## 🎯 Concept

The AI generation boom created a massive legal problem: **who owns the rights to AI-generated content that uses celebrity likenesses, designer fashion, or artist music?**

AI Culture License solves this by creating a two-sided marketplace:

**Providers** (celebrities, designers, musicians) → License their IP for AI generation  
**Consumers** (AI creators, agencies, brands) → Purchase legal usage rights with certificates

## ✨ Features

### Core Functionality
- ✅ **Dual User System**: Separate experiences for Providers and Consumers
- ✅ **Retro Windows 95 Aesthetic**: Unique visual identity combining vintage PC with modern hip-hop culture
- ✅ **Instagram Integration Ready**: Auto-sync profile data and social proof
- ✅ **Dual-Tab Profiles**: Instagram page + Products/Collection page for each user
- ✅ **License Types**: Personal, Commercial, Extended with clear usage rights
- ✅ **Interactive Product Browser**: Filter by license type and product category

### Design Philosophy

Blending three aesthetic worlds:

1. **Retro PC** - Windows 95/98 UI elements, pixelated fonts, system dialogs
2. **Experimental Art** - Kanye-inspired no-boxes design, 3D elements, painterly colors  
3. **Hip-Hop Culture** - Dark backgrounds, VHS glitch effects, bold typography

**Result**: A Windows 95 desktop displaying an art gallery with neon accents and glitch effects.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom Windows 95 components
- **Font**: Press Start 2P (pixel font) + MS Sans Serif aesthetic

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kutaskutasidze-code/ai-culture-license.git
cd ai-culture-license

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ai-culture-license/
├── app/
│   ├── page.js                    # Landing page (retro desktop)
│   ├── layout.js                  # Root layout
│   ├── globals.css                # Global styles + Windows 95 classes
│   ├── signup/
│   │   └── page.js                # Dual signup flow (Provider/Consumer)
│   ├── provider/
│   │   └── [id]/
│   │       └── page.js            # Provider profile (Instagram + Catalog)
│   ├── consumer/
│   │   └── [id]/
│   │       └── page.js            # Consumer profile (Instagram + Collection)
│   └── browse/
│       └── page.js                # Product browser with filters
├── components/
│   ├── Window95.js                # Draggable retro window
│   ├── DesktopIcon.js             # 3D desktop icons
│   ├── Taskbar.js                 # Windows 95 taskbar + Start menu
│   └── GlitchText.js              # VHS glitch text effect
├── public/                        # Static assets
└── package.json
```

## 🎨 Key Components

### Window95
Draggable, resizable Windows 95-style window with title bar and menu.

```jsx
<Window95 title="My Window" onClose={() => {}}>
  <div>Content here</div>
</Window95>
```

### DesktopIcon
3D animated desktop icon with label.

```jsx
<DesktopIcon 
  icon="🎵" 
  label="MUSIC"
  onClick={() => console.log('clicked')}
/>
```

### Taskbar
Bottom taskbar with Start menu and clock.

```jsx
<Taskbar />
```

## 📄 License Types

| License | Use Case | Price Range |
|---------|----------|-------------|
| **Personal** | Non-commercial AI generation only | $50-150 |
| **Commercial** | Business/marketing content allowed | $150-400 |
| **Extended** | Unlimited commercial + resale rights | $400-1000 |

## 🗺 Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Retro landing page with desktop icons
- [x] Dual signup flow (Provider/Consumer)
- [x] Provider profiles (Instagram + Products)
- [x] Consumer profiles (Instagram + Collection)
- [x] Product browser with filtering
- [x] Windows 95 UI components

### Phase 2: Integration 🚧
- [ ] Instagram OAuth integration
- [ ] Real user authentication
- [ ] Database setup (PostgreSQL)
- [ ] File upload system (S3/R2)
- [ ] Payment processing (Stripe Connect)

### Phase 3: Advanced Features
- [ ] License certificate generation (PDF)
- [ ] AI generation preview
- [ ] Usage analytics dashboard
- [ ] Review/rating system
- [ ] Subscription plans
- [ ] Admin panel
- [ ] Email notifications
- [ ] Search functionality

### Phase 4: Scale
- [ ] 3D product viewer (360° rotation)
- [ ] Real-time chat support
- [ ] Mobile app (React Native)
- [ ] API for third-party integration
- [ ] Multi-language support
- [ ] Cryptocurrency payment option

## 🎭 User Flows

### Provider Journey
1. Sign up as Provider
2. Connect Instagram (auto-sync profile)
3. Upload products (avatars/fashion/music)
4. Set pricing + license terms
5. Get verified
6. Earn revenue from sales

### Consumer Journey
1. Sign up as Consumer
2. Connect Instagram (show portfolio)
3. Describe company/project
4. Browse providers and products
5. Purchase license
6. Download files + certificate
7. Use legally in AI generation

## 🔒 Legal Framework

Each purchase includes:
- Unique license ID
- Purchaser/Provider details
- Asset specifications
- Usage rights definition
- Expiration date (or perpetual)
- Digital signature
- Embedded watermarking in files

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kutaskutasidze-code/ai-culture-license)

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 Environment Variables

Create `.env.local`:

```env
# Instagram OAuth (coming soon)
INSTAGRAM_CLIENT_ID=your_client_id
INSTAGRAM_CLIENT_SECRET=your_client_secret

# Stripe (coming soon)
STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key

# Database (coming soon)
DATABASE_URL=your_postgres_url
```

## 🎯 Target Market

- **Primary**: Tbilisi-based celebrities, fashion designers, musicians
- **Secondary**: AI content creation agencies globally
- **Tertiary**: Brands seeking legal AI-generated marketing

## 💡 Inspiration

Design aesthetic inspired by:
- ASAP Rocky's retro t-shirt store
- Kanye West's experimental Yeezy Supply website
- Hip-hop culture (Lil Peep, XXXTentacion, Kendrick Lamar)
- Windows 95/98 nostalgia
- VHS/glitch art movement

## 📞 Contact

Built in Tbilisi 🇬🇪

Questions? Open an issue or reach out.

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details

---

**Note**: This is a prototype. Features like payment processing, Instagram OAuth, and database integration are placeholders for future development.
