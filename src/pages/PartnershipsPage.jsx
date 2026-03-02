import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMicrochip, FaCogs, FaNetworkWired, FaArrowRight, FaHandshake } from 'react-icons/fa';
import './PageStyles.css';

const partnerTypes = [
    {
        icon: <FaMicrochip />,
        title: 'Technology Partnerships',
        desc: 'We partner with leading technology vendors and platform providers to deliver best-in-class solutions. Our technology partnerships ensure our clients always have access to the latest and most capable enterprise platforms.',
    },
    {
        icon: <FaCogs />,
        title: 'Implementation Partners',
        desc: 'We work with certified implementation partners across regions to expand our delivery capacity and bring local expertise to global projects. All partners follow our quality and methodology standards.',
    },
    {
        icon: <FaNetworkWired />,
        title: 'Channel Partnerships',
        desc: 'DataiX3 channel partners resell and co-deliver our solutions to their client base. We provide full training, certification, and co-marketing support to channel partners.',
    },
    {
        icon: <FaHandshake />,
        title: 'Become a Partner',
        desc: 'Join the DataiX3 partner ecosystem. Whether you\'re a technology provider, systems integrator, or regional consulting firm — we\'re open to building mutually beneficial long-term partnerships.',
    },
];

const PartnershipsPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Partnerships</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Building a Stronger Ecosystem</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        We collaborate with technology providers, implementation firms, and channel partners to deliver the best outcomes for our clients.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Partnership Programs</span>
                    <h2 className="section-title">Partner <span className="text-gradient">with DataiX3</span></h2>
                    <p className="section-subtitle">Multiple partnership models designed for technology vendors, implementation firms, and regional consulting companies.</p>
                </div>
                <div className="partnerships-grid">
                    {partnerTypes.map((pt, i) => (
                        <motion.div key={i} className="partnership-card" id={['technology', 'implementation', 'channel', 'become'][i]} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                            <div className="partnership-icon">{pt.icon}</div>
                            <h3>{pt.title}</h3>
                            <p>{pt.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Interested in Partnering with Us?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Reach out to our partnerships team and let's explore opportunities together.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Contact Our Partnerships Team <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default PartnershipsPage;
