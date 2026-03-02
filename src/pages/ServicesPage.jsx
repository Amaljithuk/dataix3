import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBrain, FaDigitalOcean, FaProjectDiagram, FaCode, FaGlobe, FaChartBar, FaArrowRight } from 'react-icons/fa';
import './PageStyles.css';

const services = [
    {
        icon: <FaBrain />,
        title: 'Business Consulting',
        desc: 'We analyze your business workflows, identify inefficiencies, and design scalable digital transformation strategies aligned with your competitive objectives.',
        features: ['Process Optimization', 'Change Management', 'Digital Roadmapping', 'ROI Analysis'],
    },
    {
        icon: <FaDigitalOcean />,
        title: 'Digital Transformation',
        desc: 'End-to-end transformation engagements that modernize legacy systems, automate workflows, and position your organization for sustainable digital growth.',
        features: ['Legacy Modernization', 'Process Automation', 'Cloud Adoption', 'Integration Strategy'],
    },
    {
        icon: <FaProjectDiagram />,
        title: 'Enterprise Architecture',
        desc: 'Strategic architecture planning to ensure every technology decision supports your long-term business vision and operational scalability.',
        features: ['System Design', 'Tech Stack Advisory', 'Security Architecture', 'Integration Blueprints'],
    },
    {
        icon: <FaCode />,
        title: 'Custom Software Development',
        desc: 'Custom-built enterprise applications — ERP, CRM, LMS, HR systems — tailored to your exact operational and regulatory requirements.',
        features: ['Full-Cycle Development', 'QA & Testing', 'DevOps Integration', 'Post-Launch Support'],
    },
    {
        icon: <FaGlobe />,
        title: 'Website & Application Development',
        desc: 'High-performance corporate websites, business portals, and web applications designed for conversion and built for enterprise scalability.',
        features: ['UI/UX Design', 'Responsive Development', 'SEO Optimization', 'CMS Integration'],
    },
    {
        icon: <FaChartBar />,
        title: 'Data Strategy & Analytics Consulting',
        desc: 'Real-time dashboards, KPI monitoring, and business intelligence platforms that turn your raw data into strategic decision-making tools.',
        features: ['BI Dashboard Design', 'Data Warehouse', 'ETL Pipelines', 'Predictive Analytics'],
    },
];

const ServicesPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Services</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
                        Consulting + Execution
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        How we work — strategic consulting from discovery through delivery and ongoing optimization.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="services-list">
                    {services.map((svc, i) => (
                        <motion.div key={i} className="service-detail" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}>
                            <div className="service-detail-icon">{svc.icon}</div>
                            <div>
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                                <div className="service-features-list">
                                    {svc.features.map((f, j) => <span key={j} className="service-tag">{f}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Ready to Discuss Your Requirements?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Our consultants are ready to build your transformation roadmap.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Schedule a Consultation <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default ServicesPage;
