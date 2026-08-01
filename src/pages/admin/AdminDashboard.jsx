import { Link } from 'react-router-dom'
import { products } from '../../data/products.js'

function AdminDashboard() {
  return (
    <div>
      <h2 className="admin-title">Dashboard</h2>
      <div className="admin-stats">
        <div className="admin-card admin-card--stat">
          <div className="admin-card__value">{products.length}</div>
          <div className="admin-card__label">Productos</div>
        </div>
        <div className="admin-card admin-card--stat">
          <div className="admin-card__value">0</div>
          <div className="admin-card__label">Pedidos</div>
        </div>
        <div className="admin-card admin-card--stat">
          <div className="admin-card__value">0</div>
          <div className="admin-card__label">Clientes</div>
        </div>
      </div>
      <div className="admin-actions">
        <Link to="/admin/productos/nuevo" className="admin-btn admin-btn--primary">
          Agregar Producto
        </Link>
        <Link to="/admin/pedidos" className="admin-btn admin-btn--secondary">
          Ver Pedidos
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
