import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './PageStyles.css';

const openRoles = [
    { title: 'Business Analyst', dept: 'Consulting', type: 'Full-Time', location: 'Kochi, Kerala', desc: 'Analyze client business processes, gather requirements, and bridge the gap between business needs and technology solutions.' },
    { title: 'Full Stack Developer', dept: 'Engineering', type: 'Full-Time', location: 'Kochi, Kerala', desc: 'Design and build enterprise web applications and integrations using modern frameworks and cloud technologies.' },
    { title: 'ERP Consultant', dept: 'Consulting', type: 'Full-Time', location: 'Kochi, Kerala / Remote', desc: 'Lead ERP implementation engagements from discovery through go-live, working closely with client stakeholders and technical teams.' },
    {
        title: 'Sales Executive', dept: 'Sales', type: 'Full-Time', location: 'Kochi, Kerala', desc: "Drive new business development for DataiX3's consulting and technology solutions portfolio across target industries."
    },
    { title: 'Data Analyst', dept: 'Analytics', type: 'Full-Time', location: 'Kochi, Kerala', desc: 'Design BI dashboards, develop ETL pipelines, and deliver analytics solutions for enterprise clients.' },
    { title: 'UI/UX Designer', dept: 'Design', type: 'Full-Time', location: 'Kochi, Kerala / Remote', desc: 'Create user-centered design solutions for enterprise web applications, dashboards, and digital platforms.' },
];

const CareersPage = () => (
    <div className="page-content">
        <section className="page-hero-section">
            <div className="page-hero-bg" />
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Careers</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Join Our Team</h1>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 620, lineHeight: 1.7 }}>
                        We are always looking for passionate professionals in consulting, development, analytics, and business strategy. Join a team that builds real enterprise impact.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="section" style={{ background: 'var(--section-bg-light)' }}>
            <div className="container">
                <div className="careers-intro">
                    <span className="section-eyebrow">Open Positions</span>
                    <h2 className="section-title">Current <span className="text-gradient">Openings</span></h2>
                    <p className="section-subtitle">Explore our open roles and take the next step in your career.</p>
                </div>
                <div className="jobs-list">
                    {openRoles.map((job, i) => (
                        <motion.div key={i} className="job-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.45 }}>
                            <div className="job-info">
                                <h3>{job.title}</h3>
                                <div className="job-meta">
                                    <span className="job-badge"><FaBriefcase style={{ marginRight: 4 }} />{job.dept}</span>
                                    <span className="job-badge"><FaClock style={{ marginRight: 4 }} />{job.type}</span>
                                    <span className="job-badge"><FaMapMarkerAlt style={{ marginRight: 4 }} />{job.location}</span>
                                </div>
                                <p style={{ marginTop: 10, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{job.desc}</p>
                            </div>
                            <Link to="/contact" className="btn btn-outline-blue" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                                Apply Now <FaArrowRight style={{ fontSize: '0.75rem' }} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="page-bottom-cta">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: 16 }}>Don't See a Matching Role?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>We're always open to exceptional talent. Send us your profile.</p>
                <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                    Submit Your Application <FaArrowRight style={{ marginLeft: 8, fontSize: '0.85rem' }} />
                </Link>
            </div>
        </section>
    </div>
);

export default CareersPage;
