import { useParams, useNavigate, Navigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import ProductList from '../components/ProductList.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { CATEGORIES, products } from '../data/products.js'

function Categoria() {
  const { categoria } = useParams()
  const navigate = useNavigate()
  const active = categoria || 'unidad'

  if (!CATEGORIES.some((category) => category.id === active)) {
    return <Navigate to="/categoria/unidad" replace />
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="section">
          <h2 className="section__title">Catálogo</h2>
          <p className="section__subtitle">
            Elegí cómo querés comprar.
          </p>
        </section>
        <CategoryChips
          active={active}
          onChange={(id) => navigate(`/categoria/${id}`)}
        />
        {active === 'promocion' && <PromoBanner />}
        <ProductList products={products} category={active} />
      </main>
      <BottomNav />
    </>
  )
}

export default Categoria
