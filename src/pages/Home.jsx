import { useState } from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import ProductList from '../components/ProductList.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { products } from '../data/products.js'

function Home() {
  const [category, setCategory] = useState('unidad')

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <section className="section">
          <h2 className="section__title">Catálogo</h2>
          <p className="section__subtitle">
            Elegí cómo querés comprar.
          </p>
        </section>
        <CategoryChips active={category} onChange={setCategory} />
        {category === 'promocion' && <PromoBanner />}
        <ProductList products={products} category={category} />
      </main>
      <BottomNav />
    </>
  )
}

export default Home
