import { Link, useNavigate } from 'react-router-dom'
import { products, formatPrice } from '../../data/products.js'

function AdminProductos() {
  const navigate = useNavigate()

  const handleDelete = (id, name) => {
    if (window.confirm(`¿Eliminar "${name}"?`)) {
      alert(`Producto "${name}" eliminado (demo)`)
    }
  }

  return (
    <div>
      <div className="admin-header-row">
        <h2 className="admin-title">Productos</h2>
        <Link to="/admin/productos/nuevo" className="admin-btn admin-btn--primary">
          Agregar Producto
        </Link>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>P. Unidad</th>
              <th>P. Mayor</th>
              <th>Tallas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="admin-table__thumb"
                  />
                </td>
                <td className="admin-table__name">{product.name}</td>
                <td>{formatPrice(product.prices.unidad)}</td>
                <td>{formatPrice(product.prices.mayor)}</td>
                <td>{product.sizes.join(', ')}</td>
                <td className="admin-table__actions">
                  <button
                    type="button"
                    className="admin-btn admin-btn--sm admin-btn--edit"
                    onClick={() => navigate(`/admin/productos/${product.id}/editar`)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="admin-btn admin-btn--sm admin-btn--delete"
                    onClick={() => handleDelete(product.id, product.name)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProductos
