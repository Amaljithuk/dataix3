import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaHospital, FaShoppingCart, FaIndustry, FaBuilding, FaDollarSign } from 'react-icons/fa';
import './PageStyles.css';

const industries = [
    {
        icon: <FaIndustry />,
        name: 'Manufacturing',
        id: 'manufacturing',
        desc: 'Streamline production, procurement, inventory, and supply chain with integrated ERP systems built for manufacturing environments. We support discrete, process, and hybrid manufacturing models.',
        solutions: ['ERP Implementation', 'Supply Chain Management', 'Production Planning', 'Quality Control Systems'],
    },
    {
        icon: <FaShoppingCart />,
        name: 'Retail & E-commerce',
        id: 'retail',
        desc: 'Drive omnichannel sales performance with connected commerce platforms that unify inventory, POS, CRM, and analytics across physical and digital channels.',
        solutions: ['Inventory Management', 'CRM Platforms', 'E-commerce Development', 'Sales Analytics'],
    },
    {
        icon: <FaGraduationCap />,
        name: 'Education',
        id: 'education',
        desc: 'Scalable LMS platforms, student management systems, and institutional ERP for universities, schools, and corporate training programs.',
        solutions: ['LMS Platforms', 'Student Management', 'Fee Management', 'Academic Analytics'],
    },
    {
        icon: <FaHospital />,
        name: 'Healthcare',
        id: 'healthcare',
        desc: 'Secure and compliant management systems for patient records, billing, scheduling, and operational reporting in clinical and administrative environments.',
        solutions: ['Patient Management', 'Billing Systems', 'Compliance Reporting', 'HR & Payroll'],
    },
    {
        icon: <FaBuilding />,
        name: 'Corporate Enterprises',
        id: 'corporate',
        desc: 'End-to-end digital transformation — from enterprise architecture planning through ERP, CRM, and BI implementation with ongoing strategic support.',
        solutions: ['ERP & CRM', 'Business Intelligence', 'Digital Transformation', 'Enterprise Architecture'],
    },
    {
        icon: <FaDollarSign />,
        name: 'Financial Services',
        id: 'financial',
        desc: 'Robust analytics, compliance platforms, and process automation tools designed for the unique regulatory and operational requirements of financial organizations.',
        solutions: ['Compliance Systems', 'Data Analytics', 'Process Automation', 'Reporting Dashboards'],
    },
];

const IndustriesPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Industries</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Sector-Specific Expertise</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        Industry-tailored solutions that address the unique operational challenges of each sector.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="industries-page-grid">
                    {industries.map((ind, i) => (
                        <motion.div key={i} id={ind.id} className="industry-detail-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                            <div className="industry-detail-icon">{ind.icon}</div>
                            <h3>{ind.name}</h3>
                            <p>{ind.desc}</p>
                            <div className="service-features-list" style={{ marginTop: 16 }}>
                                {ind.solutions.map((s, j) => <span key={j} className="service-tag">{s}</span>)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Don't See Your Industry?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>We work across industries. Let's discuss your specific requirements.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Contact Us <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default IndustriesPage;
