import { useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import BottomNav from '../components/BottomNav.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import ProductImage from '../components/ProductImage.jsx'
import { products, formatPrice, priceForCategory, categoryLabel, PROMO_BUNDLE_SIZE, PROMO_BUNDLE_PRICE, PROMO_UNIT_PRICE } from '../data/products.js'
import { whatsappLink } from '../config.js'

function ProductDetail() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const cat = searchParams.get('cat') || 'unidad'
  const product = products.find((item) => item.id === Number(id))
  const [selected, setSelected] = useState(() => {
    const talla = searchParams.get('talla')
    return product && product.sizes.includes(talla) ? talla : ''
  })
  const [activeIndex, setActiveIndex] = useState(0)

  if (!product) {
    return (
      <>
        <Header back backTo="/categoria" />
        <main className="main not-found">
          <h1 className="not-found__title">Producto no encontrado</h1>
          <p className="not-found__text">
            El producto que buscas no existe o ya no está disponible.
          </p>
          <Link className="not-found__link" to="/categoria">
            Ver catálogo
          </Link>
        </main>
        <BottomNav />
      </>
    )
  }

  const allImages = [product.image, ...product.gallery]
  const hasGallery = allImages.length > 1
  const selectedSize = selected || product.sizes[0]
  const displayPrice = priceForCategory(product, cat)
  const isPromo = cat === 'promocion'
  const categoryText = isPromo ? `Promo 3x${formatPrice(PROMO_BUNDLE_PRICE)}` : categoryLabel(cat)
  const productUrl = `${window.location.origin}/producto/${product.id}?cat=${cat}&talla=${selectedSize}`
  const message = isPromo
    ? `Hola BodySuits and Sport 👋\n\nQuiero consultar por la promo:\n• Producto: ${product.name}\n• Talla: ${selectedSize}\n• Promo: 3 bodys por ${formatPrice(PROMO_BUNDLE_PRICE)} (≈${formatPrice(PROMO_UNIT_PRICE)} c/u)\n\n🔗 Ver producto: ${productUrl}\n\n¿Está disponible? ¡Gracias!`
    : `Hola BodySuits and Sport 👋\n\nQuiero consultar por:\n• Producto: ${product.name}\n• Talla: ${selectedSize}\n• Modo: ${categoryText}\n• Precio: ${formatPrice(displayPrice)}\n\n🔗 Ver producto: ${productUrl}\n\n¿Está disponible? ¡Gracias!`

  return (
    <>
      <Header back backTo={`/categoria/${cat}`} />
      <main className="main product-detail">
        <div className="gallery">
          <div className="gallery__main">
            <ProductImage
              className="gallery__main-image"
              src={allImages[activeIndex]}
              alt={`${product.name} - imagen ${activeIndex + 1}`}
            />
            {hasGallery && (
              <span className="gallery__counter">{activeIndex + 1}/{allImages.length}</span>
            )}
          </div>
          {hasGallery && (
            <div className="gallery__thumbs">
              {allImages.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`gallery__thumb${i === activeIndex ? ' gallery__thumb--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img src={src} alt="" className="gallery__thumb-img" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="product-detail__content">
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__price-row">
            {isPromo ? (
              <>
                <span className="product-detail__promo-badge">
                  {PROMO_BUNDLE_SIZE}x{formatPrice(PROMO_BUNDLE_PRICE)}
                </span>
                <span className="product-detail__price">
                  {formatPrice(displayPrice)} c/u
                </span>
              </>
            ) : (
              <span className="product-detail__price">
                {formatPrice(displayPrice)}
              </span>
            )}
          </div>
          <div className="sizes">
            <span className="sizes__label">Talla</span>
            <div className="sizes__options" role="radiogroup" aria-label="Seleccionar talla">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  role="radio"
                  aria-checked={selectedSize === size}
                  className={`size-btn${selectedSize === size ? ' size-btn--active' : ''}`}
                  onClick={() => setSelected(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <a
            className="product-detail__cta"
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            Consultar por WhatsApp
          </a>
        </div>
      </main>
      <BottomNav />
    </>
  )
}

export default ProductDetail
