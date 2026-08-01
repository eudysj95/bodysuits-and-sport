import ProductCard from './ProductCard.jsx'

function ProductList({ products, category }) {
  if (products.length === 0) {
    return (
      <p className="product-list product-list--empty">
        No hay productos disponibles por el momento.
      </p>
    )
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category={category} />
      ))}
    </div>
  )
}

export default ProductList
