import { Link } from 'react-router-dom'
import { formatPrice, priceForCategory, categoryLabel, PROMO_BUNDLE_PRICE, PROMO_BUNDLE_SIZE, PROMO_UNIT_PRICE } from '../data/products.js'
import { whatsappLink } from '../config.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import ProductImage from './ProductImage.jsx'

function ProductCard({ product, category = 'unidad' }) {
  const displayPrice = priceForCategory(product, category)
  const isPromo = category === 'promocion'
  const categoryText = isPromo ? `Promo 3x${formatPrice(PROMO_BUNDLE_PRICE)}` : categoryLabel(category)
  const productUrl = `${window.location.origin}/producto/${product.id}?cat=${category}`
  const message = isPromo
    ? `Hola BodySuits and Sport 👋\n\nQuiero consultar por la promo:\n• Producto: ${product.name}\n• Promo: 3 bodys por ${formatPrice(PROMO_BUNDLE_PRICE)} (≈${formatPrice(PROMO_UNIT_PRICE)} c/u)\n\n🔗 Ver producto: ${productUrl}\n\n¿Está disponible? ¡Gracias!`
    : `Hola BodySuits and Sport 👋\n\nQuiero consultar por:\n• Producto: ${product.name}\n• Modo: ${categoryText}\n• Precio: ${formatPrice(displayPrice)}\n\n🔗 Ver producto: ${productUrl}\n\n¿Está disponible? ¡Gracias!`

  return (
    <article className="product-card">
      <Link
        to={`/producto/${product.id}?cat=${category}`}
        className="product-card__image-link"
        aria-label={product.name}
      >
        <ProductImage
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </Link>
      <div className="product-card__body">
        <h3 className="product-card__name">
          <Link to={`/producto/${product.id}?cat=${category}`}>{product.name}</Link>
        </h3>
        <p className="product-card__sizes">
          Talla: {product.sizes.join(' · ')}
        </p>
        <div className="product-card__price-row">
          {isPromo ? (
            <>
              <span className="product-card__promo-badge">
                {PROMO_BUNDLE_SIZE}x{formatPrice(PROMO_BUNDLE_PRICE)}
              </span>
              <span className="product-card__price product-card__price--muted">
                {formatPrice(displayPrice)} c/u
              </span>
            </>
          ) : (
            <span className="product-card__price">{formatPrice(displayPrice)}</span>
          )}
        </div>
        <a
          className="product-card__cta"
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={16} />
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}

export default ProductCard
