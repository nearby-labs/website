# Nearby Labs - Development Consulting Website

A modern, responsive website for Nearby Labs, showcasing development consulting services for startups. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI library with React Compiler enabled
- **TypeScript** - Type-safe development
- **Vite** (Rolldown) - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Embla Carousel** - Carousel component
- **Lucide React** - Icon library
- **Biome** - Fast formatter and linter

## 📦 Installation

```bash
# Install dependencies
bun install
```

## 🛠️ Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run linter
bun run lint

# Check code formatting with Biome
bun run biome:check

# Fix code formatting with Biome
bun run biome:fix
```

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/    # Animation components (FadeIn, FloatingElement, etc.)
│   ├── layout/        # Layout components (Header, Footer, Container)
│   ├── sections/      # Page sections (Hero, Services, Work, etc.)
│   └── ui/            # Reusable UI components (Button, Card, Input, etc.)
├── lib/               # Utility functions
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion powered transitions
- **Accessible Components** - Built with Radix UI primitives
- **Modern UI** - Clean, professional design
- **Performance Optimized** - React Compiler for automatic optimizations
- **Type Safe** - Full TypeScript coverage

## 🎨 Sections

- **Hero** - Main landing section with CTA
- **Trust Logos** - Client/partner showcase
- **Services** - Service offerings
- **Work** - Portfolio/project showcase
- **Process** - Development workflow
- **Testimonials** - Client testimonials carousel
- **Stats** - Key metrics
- **FAQ** - Frequently asked questions
- **CTA** - Call-to-action section

## 🔧 Configuration

- **Vite Config** - `vite.config.ts`
- **TypeScript** - `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **ESLint** - `eslint.config.js`
- **Biome** - `biome.json`
- **Tailwind** - Configured via Vite plugin

## 📝 License

Private project - All rights reserved
