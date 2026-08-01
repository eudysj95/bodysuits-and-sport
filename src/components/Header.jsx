import { Link, useNavigate } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../config.js'

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function Header({ back = false, backTo = '' }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (backTo) {
      navigate(backTo)
    } else if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <header className="header">
      {back && (
        <button
          type="button"
          className="header__back"
          onClick={handleBack}
          aria-label="Volver"
        >
          <BackIcon />
        </button>
      )}
      <Link to="/" className="header__brand" aria-label="BodySuits and Sport — inicio">
        <svg className="header__logo" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="20" fill="#D4A373"/>
          <path d="M14 14 C14 10, 26 10, 26 14 L26 20 C26 26, 23 30, 20 34 C17 30, 14 26, 14 20Z" fill="#FAFAFA" stroke="#2B2B2B" stroke-width="1.2"/>
          <circle cx="20" cy="13" r="2.5" fill="#FAFAFA" stroke="#2B2B2B" stroke-width="1"/>
        </svg>
        <span className="header__text">
          <span className="header__name">BodySuits and Sport</span>
          {!back && <span className="header__tagline">Bodys, enterizos y calzas</span>}
        </span>
      </Link>
      <a
        className="header__whatsapp"
        href={whatsappLink('Hola BodySuits and Sport, quiero hacer una consulta.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        <WhatsAppIcon size={22} />
      </a>
    </header>
  )
}

export default Header
