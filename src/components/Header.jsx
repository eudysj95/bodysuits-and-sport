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
        <span className="header__logo" aria-hidden="true">
          B
        </span>
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
