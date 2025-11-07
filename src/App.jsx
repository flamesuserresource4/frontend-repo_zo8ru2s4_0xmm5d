import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(40rem_40rem_at_10%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(35rem_35rem_at_90%_10%,rgba(236,72,153,0.12),transparent)]">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
