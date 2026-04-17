import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const LINKS_ABOUT = [
  { label: 'Notre Enseigne', href: '#enseigne' },
  { label: 'Nos Engagements', href: '#engagements' },
  { label: 'Nos Magasins', href: '#magasins' },
  { label: 'Recrutement', href: '#recrutement' },
];

const LINKS_RAYONS = [
  { label: 'Boucherie Halal', href: '#rayons' },
  { label: 'Fruits & Légumes', href: '#rayons' },
  { label: 'Épices du Monde', href: '#rayons' },
  { label: 'Produits Discount', href: '#rayons' },
];

const LINKS_LEGAL = [
  { label: 'Mentions Légales' },
  { label: 'Politique de Cookies' },
  { label: 'Termes et Conditions' },
  { label: 'Livraison et Retours' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (e, href) => {
    if (!href) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="gradient-divider" />

      <div className="footer__main container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">M'</span>
            <span className="footer__logo-text">Marché de Mo'</span>
          </div>
          <p className="footer__brand-desc">
            Supermarché indépendant spécialisé dans l'ultra frais.
            Boucherie Halal, produits du monde, prix cassés.
            Ouvert 7/7 à Toulouse.
          </p>
          <div className="footer__contact-info">
            <a href="tel:0582958252">📞 05 82 95 82 52</a>
            <a href="mailto:contact@marchedemo.com">✉️ contact@marchedemo.com</a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">À Propos</h4>
          <ul>
            {LINKS_ABOUT.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Nos Rayons</h4>
          <ul>
            {LINKS_RAYONS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Légal</h4>
          <ul>
            {LINKS_LEGAL.map(({ label }) => (
              <li key={label}>
                <span className="footer__legal-link">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Marchédemo.com — Tous droits réservés
        </p>

        <div className="footer__payments">
          <span>Paiements acceptés :</span>
          <div className="footer__payment-icons">
            <span className="footer__payment-badge">CB</span>
            <span className="footer__payment-badge">Visa</span>
            <span className="footer__payment-badge">MC</span>
            <span className="footer__payment-badge">€</span>
          </div>
        </div>

        <motion.button
          className="footer__back-to-top"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
