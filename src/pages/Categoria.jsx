import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import ProductList from '../components/ProductList.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { CATEGORIES, products } from '../data/products.js'

const INITIAL_VISIBLE = 4

function Categoria() {
  const { categoria } = useParams()
  const navigate = useNavigate()
  const active = categoria || 'unidad'
  const [showAll, setShowAll] = useState(false)

  if (!CATEGORIES.some((category) => category.id === active)) {
    return <Navigate to="/categoria/unidad" replace />
  }

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_VISIBLE)
  const hasMore = products.length > INITIAL_VISIBLE

  return (
    <>
      <Header />
      <main className="main">
        <section className="section">
          <h2 className="section__title">Catálogo</h2>
          <p className="section__subtitle">
            Elige cómo quieres comprar.
          </p>
        </section>
        <CategoryChips
          active={active}
          onChange={(id) => { navigate(`/categoria/${id}`); setShowAll(false) }}
        />
        {active === 'promocion' && <PromoBanner />}
        <ProductList products={visibleProducts} category={active} />
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

export default Categoria
