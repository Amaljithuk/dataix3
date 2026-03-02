import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaNewspaper, FaArrowRight } from 'react-icons/fa';
import './PageStyles.css';

const posts = [
    { category: 'Digital Transformation', title: '5 Signs Your Business Is Ready for an ERP Transformation', excerpt: 'Discover the key operational signals that indicate your organization needs a unified ERP system to stay competitive.' },
    { category: 'ERP Trends', title: 'Cloud ERP vs On-Premise: What Enterprise Leaders Need to Know in 2025', excerpt: 'A strategic comparison of deployment models to help CIOs make informed architecture decisions.' },
    { category: 'Business Automation', title: 'How CRM Automation Increased Sales Efficiency by 35%', excerpt: 'A detailed breakdown of how pipeline automation and automated follow-up workflows transformed one retail client\'s sales operation.' },
    { category: 'Industry Insights', title: 'The Future of HR Technology: AI, Compliance & the Employee Experience', excerpt: 'How intelligent HR systems are reshaping workforce management across industries in the coming decade.' },
    { category: 'Technology Updates', title: 'Data Analytics Maturity: Moving from Reporting to Predictive Intelligence', excerpt: 'Understanding the stages of analytics maturity and how organizations can progress to predictive and prescriptive insights.' },
    { category: 'Case Studies', title: 'How We Scaled an LMS from 500 to 8,000 Users Without Downtime', excerpt: 'A technical and strategic walkthrough of a high-growth LMS scaling project for a global compliance training program.' },
];

const InsightsPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Insights</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Insights & Thought Leadership</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        Expert perspectives on enterprise technology, digital transformation, and business consulting strategy.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="insights-grid">
                    {posts.map((post, i) => (
                        <motion.div key={i} className="insight-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                            <div className="insight-card-img"><FaNewspaper /></div>
                            <div className="insight-card-body">
                                <span className="insight-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Want Expert Insights for Your Industry?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Talk to our consultants for tailored strategic guidance.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Schedule a Consultation <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default InsightsPage;
