export const CATEGORIES = [
  { id: 'unidad', label: 'Por Unidad' },
  { id: 'mayor', label: 'Al Mayor' },
  { id: 'promocion', label: 'Promoción' },
]

export const PROMO_BUNDLE_SIZE = 3
export const PROMO_BUNDLE_PRICE = 70000
export const PROMO_UNIT_PRICE = Math.round(PROMO_BUNDLE_PRICE / PROMO_BUNDLE_SIZE)

export function categoryLabel(id) {
  const category = CATEGORIES.find((item) => item.id === id)
  return category ? category.label : ''
}

export function formatPrice(value) {
  return `$${value.toLocaleString('es-AR')}`
}

export function priceForCategory(product, category) {
  if (category === 'promocion') return PROMO_UNIT_PRICE
  return product.prices[category]
}

export const products = [
  {
    id: 1,
    name: 'Body Enterizo Lisa',
    sizes: ['S', 'M', 'L', 'XL'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Body enterizo liso de algodón con elasticidad media. Corte cómodo, ideal para uso diario.',
    image: '/images/products/body-enterizo-liso.jpg',
    gallery: [
      '/images/products/body-enterizo-liso-2.jpg',
      '/images/products/body-enterizo-liso-3.jpg',
      '/images/products/body-enterizo-liso-4.jpg',
      '/images/products/body-enterizo-liso-5.jpg',
      '/images/products/body-enterizo-liso-6.jpg',
    ],
  },
  {
    id: 2,
    name: 'Body con Encaje',
    sizes: ['S', 'M', 'L', 'XL'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Body con detalles de encaje en el escote, tela suave y terminación premium.',
    image: '/images/products/body-con-encaje.jpg',
    gallery: [
      '/images/products/body-con-encaje-2.jpg',
      '/images/products/body-con-encaje-3.jpg',
    ],
  },
  {
    id: 3,
    name: 'Enterizo Push Up',
    sizes: ['S', 'M', 'L'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Enterizo con copas push up y costuras reforzadas para realzar la silueta.',
    image: '/images/products/enterizo-push-up.jpg',
    gallery: [
      '/images/products/enterizo-push-up-2.jpg',
      '/images/products/enterizo-push-up-3.jpg',
      '/images/products/enterizo-push-up-4.jpg',
    ],
  },
  {
    id: 4,
    name: 'Body Tiras Regulables',
    sizes: ['S', 'M', 'L', 'XL'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Body con tiras ajustables, ideal para combinar con cualquier outfit.',
    image: '/images/products/body-tiras-regulables.jpg',
    gallery: [
      '/images/products/body-tiras-regulables-2.jpg',
      '/images/products/body-tiras-regulables-3.jpg',
    ],
  },
  {
    id: 5,
    name: 'Calza Deportiva Alta',
    sizes: ['S', 'M', 'L', 'XL'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Calza deportiva de tiro alto con compresión suave. Perfecta para entrenar.',
    image: '/images/products/calza-deportiva-alta.jpg',
    gallery: [
      '/images/products/calza-deportiva-alta-2.jpg',
    ],
  },
  {
    id: 6,
    name: 'Calza Corta Verano',
    sizes: ['S', 'M', 'L'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Calza corta de tiro medio, liviana y fresca. La elección ideal para el verano.',
    image: '/images/products/calza-corta-verano.jpg',
    gallery: [],
  },
  {
    id: 7,
    name: 'Pack 3 Bodys Clásicos',
    sizes: ['S', 'M', 'L', 'XL'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Pack de 3 bodys clásicos lisos en colores básicos.',
    image: '/images/products/pack-3-bodys-clasicos.jpg',
    gallery: [],
  },
  {
    id: 8,
    name: 'Pack Enterizo + Calza',
    sizes: ['S', 'M', 'L'],
    prices: { unidad: 30000, mayor: 20000 },
    description:
      'Combo de enterizo y calza a juego.',
    image: '/images/products/pack-enterizo-calza.jpg',
    gallery: [],
  },
]
