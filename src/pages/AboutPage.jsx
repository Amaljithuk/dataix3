import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const steps = [
    { num: '01', title: 'Business Analysis', desc: 'We deep-dive into your current operations, workflows, and pain points to build a complete understanding.' },
    { num: '02', title: 'Strategy Planning', desc: 'We design a digital transformation roadmap aligned with your business goals and budget.' },
    { num: '03', title: 'Solution Architecture', desc: 'Our architects design scalable, secure systems tailored to your operational requirements.' },
    { num: '04', title: 'Implementation', desc: 'Agile delivery with milestone-based progress tracking, demos, and continuous alignment.' },
    { num: '05', title: 'Optimization & Support', desc: 'Ongoing performance monitoring, updates, and strategic guidance as your business evolves.' },
];

const AboutPage = () => (
    <div className="page-content">
        {/* Hero */}
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>About DataiX3</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
                        Bridging Strategy &amp; Technology
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
                        A business consulting and enterprise technology firm built to help organizations modernize and grow.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Overview */}
        <section className="section">
            <div className="container about-page-grid">
                <div>
                    <span className="section-eyebrow">Company Overview</span>
                    <h2 className="section-title" style={{ marginBottom: 20 }}>Who We Are</h2>
                    <p className="page-body-text">
                        DataiX3 was founded with a vision to integrate strategic business consulting with modern technology solutions.
                        We believe digital transformation should be structured, scalable, and results-driven — not a technology experiment.
                    </p>
                    <p className="page-body-text" style={{ marginTop: 16 }}>
                        We work with enterprises, mid-market organizations, and growing businesses across multiple industries to design,
                        build, and optimize the technology systems that power their operations.
                    </p>
                </div>
                <div className="about-mvv-cards">
                    <div className="mvv-card">
                        <h3>Our Mission</h3>
                        <p>To empower businesses with intelligent systems that improve efficiency, visibility, and decision-making at every level of the organization.</p>
                    </div>
                    <div className="mvv-card">
                        <h3>Our Vision</h3>
                        <p>To become a trusted enterprise technology partner across industries — known for outcomes, not just deliverables.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Approach */}
        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Our Methodology</span>
                    <h2 className="section-title">Our <span className="text-gradient">Approach</span></h2>
                    <p className="section-subtitle">A structured 5-step process that ensures every engagement is strategic, measurable, and aligned.</p>
                </div>
                <div className="steps-list">
                    {steps.map((step, i) => (
                        <motion.div key={i} className="step-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                            <div className="step-num">{step.num}</div>
                            <div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Ready to Partner with DataiX3?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Schedule a free strategy call and let's discuss your goals.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Schedule a Consultation <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default AboutPage;
