import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './PageStyles.css';

const caseStudies = [
    { tag: 'ERP', title: 'Manufacturing ERP Transformation', client: 'Mid-size Manufacturing Co.', desc: 'Full-cycle ERP implementation unifying production, inventory, procurement and finance — reducing manual effort by 45% and improving reporting accuracy.' },
    { tag: 'CRM', title: 'Sales Pipeline Overhaul for Retail Group', client: 'National Retail Chain', desc: 'Custom CRM platform replacing disconnected spreadsheets, enabling pipeline visibility, automated follow-ups and 30% increase in sales efficiency.' },
    { tag: 'LMS', title: 'Corporate Training Platform Scale-up', client: 'Global Financial Services Firm', desc: 'LMS platform scaling from 500 to 8,000 concurrent users for mandatory compliance training with automated completion tracking and certification.' },
    { tag: 'Data Analytics', title: 'Executive BI Dashboard Suite', client: 'Corporate Enterprise', desc: 'Real-time executive dashboards unifying data from 5 disparate systems — enabling leadership to make faster, data-backed decisions across all business units.' },
];

const WorksPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Works</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Case Studies & Project Portfolio</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        Real outcomes delivered for real organizations. Here's how we've helped businesses transform.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Case Studies</span>
                    <h2 className="section-title">Proven <span className="text-gradient">Outcomes</span></h2>
                </div>
                <div className="works-grid">
                    {caseStudies.map((cs, i) => (
                        <motion.div key={i} className="work-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                            <div className="work-card-top" />
                            <div className="work-card-body">
                                <span className="work-tag">{cs.tag}</span>
                                <h3>{cs.title}</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', marginBottom: 8, fontWeight: 600 }}>{cs.client}</p>
                                <p>{cs.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Ready to Become a Success Story?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Let's discuss what we can achieve together.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Schedule a Consultation <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default WorksPage;
