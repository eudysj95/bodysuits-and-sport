import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { to: '/admin', label: 'Dashboard', icon: '📊', end: true },
    { to: '/admin/productos', label: 'Productos', icon: '📦' },
    { to: '/admin/pedidos', label: 'Pedidos', icon: '🛒' },
    { to: '/admin/clientes', label: 'Clientes', icon: '👥' },
  ]

  return (
    <div className="admin-layout">
      {sidebarOpen && (
        <div
          className="admin-overlay"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={() => setsidebarOpen(false)}
        />
      )}
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-sidebar__header">
          <span className="admin-sidebar__logo">B</span>
          <span className="admin-sidebar__brand">BodySuits and Sport</span>
        </div>
        <nav className="admin-sidebar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="admin-nav"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="admin-nav__icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar__footer">
          <a href="/" className="admin-nav admin-nav--store">
            <span className="admin-nav__icon">🏪</span>
            <span>Ver Tienda</span>
          </a>
        </div>
      </aside>
      <div className="admin-main">
        <header className="admin-header">
          <button
            className="admin-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            type="button"
            aria-label="Abrir menú"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="admin-header__title">BodySuits and Sport Admin</h1>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
