import { formatPrice, PROMO_BUNDLE_SIZE, PROMO_BUNDLE_PRICE, PROMO_UNIT_PRICE } from '../data/products.js'

function PromoBanner() {
  return (
    <div className="promo-banner">
      <span className="promo-banner__badge">Promo</span>
      <p className="promo-banner__title">
        Llevá {PROMO_BUNDLE_SIZE} bodys por {formatPrice(PROMO_BUNDLE_PRICE)}
      </p>
      <p className="promo-banner__subtitle">
        ≈{formatPrice(PROMO_UNIT_PRICE)} c/u
      </p>
    </div>
  )
}

export default PromoBanner
