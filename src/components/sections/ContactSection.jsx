import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import './ContactSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__accent-line" />
      <div className="container">
        <motion.div
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Contact
        </motion.div>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
        >
          Parlons <span>Ensemble</span>
        </motion.h2>

        <div className="contact__grid">
          {/* Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >
            {status === 'sent' ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={48} />
                <h3>Merci pour votre message !</h3>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Nom complet</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject">Sujet</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le Message'}
                </button>
              </>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            className="contact__info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.35}
          >
            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>Téléphone</h4>
                <a href="tel:0582958252">05 82 95 82 52</a>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@marchedemo.com">contact@marchedemo.com</a>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Adresse Principale</h4>
                <p>8 Allée Pablo Picasso<br />31120 Portet-sur-Garonne</p>
              </div>
            </div>

            <div className="contact__info-help">
              <p>
                Besoin d'aide rapide ? Appelez notre{' '}
                <a href="tel:0582958252">Service Client</a> ou passez directement
                en magasin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
