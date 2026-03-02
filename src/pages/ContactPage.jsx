import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import './PageStyles.css';

const ContactPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Contact</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Get in Touch</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        Schedule a consultation, ask a question, or simply reach out — our team is ready to help.
                    </p>
                </motion.div>
            </div>
        </section>
        <Contact />
    </div>
);

export default ContactPage;
