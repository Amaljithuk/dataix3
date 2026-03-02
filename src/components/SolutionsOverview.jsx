import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaLayerGroup, FaUsers, FaGraduationCap, FaUsersCog,
    FaChartBar, FaGlobe, FaArrowRight
} from 'react-icons/fa';
import './SolutionsOverview.css';

const solutions = [
    {
        icon: <FaLayerGroup />,
        title: 'ERP Solutions',
        desc: 'End-to-end enterprise resource planning to streamline finance, operations, inventory, and reporting.',
        href: '/solutions/erp',
        color: '#0f3460',
    },
    {
        icon: <FaUsers />,
        title: 'CRM Platforms',
        desc: 'Customer lifecycle management platforms to improve sales performance and customer engagement.',
        href: '/solutions/crm',
        color: '#1a6db5',
    },
    {
        icon: <FaGraduationCap />,
        title: 'LMS Systems',
        desc: 'Scalable learning management systems for corporate training and institutional education.',
        href: '/solutions/lms',
        color: '#0077b6',
    },
    {
        icon: <FaUsersCog />,
        title: 'HR Management Software',
        desc: 'Smart HR systems to manage recruitment, payroll, attendance, and compliance.',
        href: '/solutions/hr',
        color: '#023e8a',
    },
    {
        icon: <FaChartBar />,
        title: 'Data Analytics & BI',
        desc: 'Business intelligence dashboards and reporting systems for actionable insights.',
        href: '/solutions/analytics',
        color: '#0f3460',
    },
    {
        icon: <FaGlobe />,
        title: 'Web & Digital Platforms',
        desc: 'Enterprise-grade websites and digital platforms built for performance and growth.',
        href: '/solutions/web',
        color: '#1a6db5',
    },
];

const SolutionsOverview = () => {
    return (
        <section className="section solutions-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">What We Build</span>
                    <h2 className="section-title">Our Core <span className="text-gradient">Solutions</span></h2>
                    <p className="section-subtitle">
                        Purpose-built enterprise platforms designed to modernize operations, improve efficiency, and accelerate growth.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            className="solution-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <div className="sol-icon" style={{ background: `${sol.color}14`, color: sol.color }}>
                                {sol.icon}
                            </div>
                            <h3 className="sol-title">{sol.title}</h3>
                            <p className="sol-desc">{sol.desc}</p>
                            <Link to={sol.href} className="sol-link">
                                Learn More <FaArrowRight className="sol-arrow" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsOverview;
