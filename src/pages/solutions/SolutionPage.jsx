import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './SolutionPage.css';

const SolutionPage = ({
    title,
    subtitle,
    overview,
    sections,    // [{heading, items:[]}]
    benefits,
    whyTitle = 'Why DataiX3?',
    whyText,
    ctaText,
    ctaHref = '/contact',
    breadcrumb,
}) => {
    return (
        <div className="solution-page">
            {/* Hero */}
            <section className="sol-hero">
                <div className="sol-hero-bg" />
                <div className="container sol-hero-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="sol-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to="/solutions">Solutions</Link>
                            <span>/</span>
                            <span>{breadcrumb}</span>
                        </div>
                        <h1>{title}</h1>
                        <p className="sol-hero-sub">{subtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="section sol-overview">
                <div className="container">
                    <div className="sol-overview-grid">
                        <div className="sol-overview-text">
                            <span className="section-eyebrow">Overview</span>
                            <h2 className="section-title">What We Deliver</h2>
                            <p>{overview}</p>
                        </div>
                        <div className="sol-benefits-box">
                            <h3>Key Benefits</h3>
                            <ul>
                                {benefits.map((b, i) => (
                                    <li key={i}>
                                        <span className="benefit-dot" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features / Modules */}
            <section className="section sol-features-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-eyebrow">Capabilities</span>
                        <h2 className="section-title">Key Features &amp; Modules</h2>
                    </div>
                    <div className="sol-features-grid">
                        {sections.map((sec, i) => (
                            <motion.div
                                key={i}
                                className="sol-feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                            >
                                <h3>{sec.heading}</h3>
                                <ul>
                                    {sec.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why DataiX3 */}
            <section className="section sol-why-section">
                <div className="container sol-why-inner">
                    <div className="sol-why-text">
                        <span className="section-eyebrow">{whyTitle}</span>
                        <h2 className="section-title">Strategic Consulting Meets<br /><span className="text-gradient">Technical Excellence</span></h2>
                        <p>{whyText}</p>
                    </div>
                    <div className="sol-cta-box">
                        <h3>Ready to get started?</h3>
                        <p>Schedule a consultation with our specialists.</p>
                        <Link to={ctaHref} className="btn btn-lg">
                            {ctaText} <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionPage;
