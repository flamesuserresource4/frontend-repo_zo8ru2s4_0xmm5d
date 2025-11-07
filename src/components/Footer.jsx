import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-black/70">
              <li><a href="#" className="hover:text-black">Women</a></li>
              <li><a href="#" className="hover:text-black">Men</a></li>
              <li><a href="#" className="hover:text-black">Accessories</a></li>
              <li><a href="#" className="hover:text-black">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-black/70">
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Support</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-black/70">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow us</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-black/60">© {new Date().getFullYear()} ShopWave. All rights reserved.</div>
      </div>
    </footer>
  )
}
