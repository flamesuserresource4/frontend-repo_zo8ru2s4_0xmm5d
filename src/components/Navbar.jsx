import { ShoppingBag, Search, User, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-inner" />
              <span className="font-extrabold text-xl tracking-tight">ShopWave</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#new" className="hover:text-indigo-600 transition-colors">New Arrivals</a>
            <a href="#trending" className="hover:text-indigo-600 transition-colors">Trending</a>
            <a href="#sale" className="hover:text-indigo-600 transition-colors">Sale</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 focus-within:ring-2 ring-indigo-500">
              <Search className="h-4 w-4 text-black/60" />
              <input
                className="bg-transparent outline-none placeholder:text-black/40 text-sm w-48"
                placeholder="Search products"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-black/5" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-indigo-600 text-white">3</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a href="#new" className="px-3 py-2 rounded-md hover:bg-black/5">New Arrivals</a>
              <a href="#trending" className="px-3 py-2 rounded-md hover:bg-black/5">Trending</a>
              <a href="#sale" className="px-3 py-2 rounded-md hover:bg-black/5">Sale</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-black/5">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
