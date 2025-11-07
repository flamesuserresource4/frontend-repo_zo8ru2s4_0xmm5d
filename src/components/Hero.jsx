import { ArrowRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/47D3N8oS8mVY7dKx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 text-xs font-semibold ring-1 ring-indigo-600/20 mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Fresh styles weekly
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Elevate your everyday style
          </h1>
          <p className="mt-4 text-lg text-black/70 max-w-xl">
            Discover curated fashion, accessories, and lifestyle picks from independent designers and top brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#new" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition-colors">
              Shop new arrivals <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#trending" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black/5 font-semibold hover:bg-black/10">
              Explore trending
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <img src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop" alt="Sneakers" className="rounded-2xl shadow object-cover aspect-[4/5]" />
          <img src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1200&auto=format&fit=crop" alt="Backpack" className="rounded-2xl shadow object-cover aspect-[4/5] mt-8" />
        </div>
      </div>
    </section>
  )
}
