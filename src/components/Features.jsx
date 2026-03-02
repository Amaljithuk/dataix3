import { motion } from 'framer-motion';
import {
    FaBrain, FaIndustry, FaServer,
    FaShieldAlt, FaHandshake, FaBolt
} from 'react-icons/fa';
import './Features.css';

const features = [
    {
        icon: <FaBrain />,
        title: 'Strategic Consulting Approach',
        desc: 'We begin with in-depth business analysis and strategy planning before any implementation — ensuring technology aligns with your goals.',
    },
    {
        icon: <FaIndustry />,
        title: 'Industry-Specific Solutions',
        desc: 'Our solutions are tailored to the unique operational requirements of each industry, not generic templates.',
    },
    {
        icon: <FaServer />,
        title: 'Scalable Architecture',
        desc: 'Built on enterprise-grade infrastructure that grows with your business — from startup to large enterprise.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Secure & Reliable Systems',
        desc: 'Security-first design with robust uptime guarantees and data protection aligned with compliance standards.',
    },
    {
        icon: <FaHandshake />,
        title: 'Long-Term Technology Partnership',
        desc: 'We don\'t just deliver and disappear. We provide ongoing optimization, updates, and strategic guidance.',
    },
    {
        icon: <FaBolt />,
        title: 'Fast, Outcome-Driven Delivery',
        desc: 'Agile delivery methodology that focuses on measurable business outcomes at every milestone.',
    },
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Why Choose DataiX3</span>
                    <h2 className="section-title">
                        Built for <span className="text-gradient">Enterprise Success</span>
                    </h2>
                    <p className="section-subtitle">
                        We combine strategic consulting with technical excellence to deliver solutions that drive real business results.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            className="feature-item"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <div className="feature-icon">{feat.icon}</div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
