import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Send, Clock } from 'lucide-react';
import './CareersSection.css';

const JOBS = [
  {
    title: 'Boucher',
    type: 'CDI',
    icon: Briefcase,
    desc: 'Vous maîtrisez les techniques de découpe et de préparation des viandes. Vous assurez la mise en valeur des produits et le conseil client dans le respect des normes d\'hygiène.',
    tags: ['Temps plein', 'Expérience requise'],
  },
  {
    title: 'Employé Polyvalent',
    type: 'CDI',
    icon: Briefcase,
    desc: 'Vous assurez la mise en rayon, le facing, l\'accueil client et l\'encaissement. Polyvalent(e) et dynamique, vous contribuez au bon fonctionnement du magasin.',
    tags: ['Temps plein', 'Débutant accepté'],
  },
  {
    title: 'Apprenti Boucher',
    type: 'Alternance',
    icon: GraduationCap,
    desc: 'Vous préparez un CAP/BP Boucherie et souhaitez apprendre le métier aux côtés de professionnels passionnés. Formation pratique en magasin.',
    tags: ['Alternance', 'Formation'],
  },
  {
    title: 'Alternant Commercial B2B',
    type: 'Alternance',
    icon: GraduationCap,
    desc: 'Vous développez notre portefeuille de clients professionnels (restaurateurs, traiteurs). Prospection, négociation et fidélisation au cœur de vos missions.',
    tags: ['Alternance', 'Commercial'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CareersSection() {
  return (
    <section id="recrutement" className="careers section">
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recrutement
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Rejoignez <span>Notre Équipe</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nous recherchons des personnes passionnées, motivées et prêtes à s'investir
          dans une entreprise familiale en pleine croissance.
        </motion.p>

        <div className="careers__grid">
          {JOBS.map(({ title, type, icon: Icon, desc, tags }, i) => (
            <motion.div
              key={title}
              className="careers__card glass-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="careers__card-header">
                <div className="careers__card-icon">
                  <Icon size={22} />
                </div>
                <span className={`careers__card-type ${type === 'Alternance' ? 'careers__card-type--alt' : ''}`}>
                  {type}
                </span>
              </div>
              <h3 className="careers__card-title">{title}</h3>
              <p className="careers__card-desc">{desc}</p>
              <div className="careers__card-tags">
                {tags.map((tag) => (
                  <span key={tag} className="careers__tag">
                    <Clock size={12} />
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="mailto:contact@marchedemo.com?subject=Candidature%20-%20{title}"
                className="btn btn-outline careers__card-btn"
              >
                <Send size={14} />
                Postuler
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
