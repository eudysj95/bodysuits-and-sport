import { useState } from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import ProductList from '../components/ProductList.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { products } from '../data/products.js'

const INITIAL_VISIBLE = 4

function Home() {
  const [category, setCategory] = useState('unidad')
  const [showAll, setShowAll] = useState(false)

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_VISIBLE)
  const hasMore = products.length > INITIAL_VISIBLE

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <section className="section">
          <h2 className="section__title">Catálogo</h2>
          <p className="section__subtitle">
            Elige cómo quieres comprar.
          </p>
        </section>
        <CategoryChips active={category} onChange={(cat) => { setCategory(cat); setShowAll(false) }} />
        {category === 'promocion' && <PromoBanner />}
        <ProductList products={visibleProducts} category={category} />
        {hasMore && !showAll && (
          <div className="see-more">
            <button
              type="button"
              className="see-more__btn"
              onClick={() => setShowAll(true)}
            >
              Ver más productos
            </button>
          </div>
        )}
      </main>
      <BottomNav />
    </>
  )
}

export default Home
