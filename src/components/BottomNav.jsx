import { NavLink } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../config.js'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: HomeIcon, end: true },
  { to: '/buscar', label: 'Buscar', icon: SearchIcon, end: false },
  { to: '/ofertas', label: 'Ofertas', icon: TagIcon, end: false },
]

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="bottom-nav__item"
          >
            <Icon />
            <span className="bottom-nav__label">{item.label}</span>
          </NavLink>
        )
      })}
      <a
        className="bottom-nav__item bottom-nav__item--whatsapp"
        href={whatsappLink('Hola BodySuits and Sport, quiero hacer una consulta.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={22} />
        <span className="bottom-nav__label">WhatsApp</span>
      </a>
    </nav>
  )
}

export default BottomNav
