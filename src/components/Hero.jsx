import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../config.js'

function Hero() {
  return (
    <section className="hero">
      <span className="hero__badge">Promo</span>
      <h1 className="hero__title">3x2 en bodys seleccionados</h1>
      <p className="hero__subtitle">
        Aprovecha la promoción por tiempo limitado.
      </p>
      <div className="hero__actions">
        <Link to="/ofertas" className="hero__cta">
          Ver ofertas
        </Link>
        <a
          className="hero__cta hero__cta--ghost"
          href={whatsappLink('Hola BodySuits and Sport, quiero información sobre la promo 3x2.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={16} />
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero
