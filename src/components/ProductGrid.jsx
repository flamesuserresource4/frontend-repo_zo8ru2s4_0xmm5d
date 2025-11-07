import { useEffect, useState } from 'react'
import { Star, Heart } from 'lucide-react'

const productsSeed = [
  { id: 1, title: 'Minimal Leather Sneakers', price: 120, rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Everyday Tote Bag', price: 68, rating: 4.3, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Classic Denim Jacket', price: 98, rating: 4.8, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Wireless Headphones', price: 149, rating: 4.5, image: 'https://images.unsplash.com/photo-1611299081794-5965fc4d900b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwTGVhdGhlciUyMFNuZWFrZXJzfGVufDB8MHx8fDE3NjI1Mjk3ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'Smart Watch Series', price: 199, rating: 4.2, image: 'https://images.unsplash.com/photo-1611299081794-5965fc4d900b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwTGVhdGhlciUyMFNuZWFrZXJzfGVufDB8MHx8fDE3NjI1Mjk3ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Linen Overshirt', price: 79, rating: 4.1, image: 'https://images.unsplash.com/photo-1611299081794-5965fc4d900b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwTGVhdGhlciUyMFNuZWFrZXJzfGVufDB8MHx8fDE3NjI1Mjk3ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
]

function Rating({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < full ? 'fill-amber-500' : 'fill-transparent'} ${i < full || (i === full && half) ? 'opacity-100' : 'opacity-30'}`} />
      ))}
      <span className="ml-1 text-xs text-black/60">{value.toFixed(1)}</span>
    </div>
  )
}

export default function ProductGrid() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsSeed)
  }, [])

  return (
    <section id="trending" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Trending now</h2>
            <p className="text-black/60 mt-1">Hand-picked products curated by our team.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
              <div className="relative">
                <img src={p.image} alt={p.title} className="aspect-square object-cover w-full group-hover:scale-105 transition-transform" />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow" aria-label="Wishlist">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2 min-h-[3.25rem]">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <div className="font-extrabold">${p.price}</div>
                </div>
                <button className="mt-4 w-full inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-black/90">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
