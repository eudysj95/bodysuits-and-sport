import { CATEGORIES } from '../data/products.js'

function CategoryChips({ active, onChange }) {
  return (
    <div className="chips" role="tablist" aria-label="Modo de compra">
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={active === category.id}
          className={`chip${active === category.id ? ' chip--active' : ''}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryChips
