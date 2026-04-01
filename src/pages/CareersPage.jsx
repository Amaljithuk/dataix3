import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt, FaClock, FaTimes } from 'react-icons/fa';
import './PageStyles.css';

const openRoles = [
    {
        title: 'Business Analyst',
        dept: 'Consulting',
        type: 'Full-Time',
        location: 'Kochi, Kerala',
        desc: 'Analyze client business processes, gather requirements, and bridge the gap between business needs and technology solutions.',
        requirements: [
            '2+ years of experience in business analysis or consulting',
            'Strong skills in requirements gathering and process mapping',
            'Experience with tools like JIRA, Confluence, or equivalent',
            'Excellent communication and stakeholder management skills',
            'Bachelor\'s degree in Business, IT, or related field',
        ],
    },
    {
        title: 'Full Stack Developer',
        dept: 'Engineering',
        type: 'Full-Time',
        location: 'Kochi, Kerala',
        desc: 'Design and build enterprise web applications and integrations using modern frameworks and cloud technologies.',
        requirements: [
            '3+ years of experience in full stack development',
            'Proficiency in React, Node.js, and REST APIs',
            'Experience with cloud platforms (AWS, Azure, or GCP)',
            'Knowledge of SQL and NoSQL databases',
            'Familiarity with CI/CD pipelines and DevOps practices',
        ],
    },
    {
        title: 'Business Analyst Intern',
        dept: 'Consulting',
        type: 'Internship',
        location: 'Kochi, Kerala',
        desc: 'Support our consulting team in gathering requirements, documenting business processes, and assisting with client presentations and reports.',
        requirements: [
            'Currently pursuing a degree in Business, IT, or a related field',
            'Strong analytical and problem-solving skills',
            'Good communication and documentation skills',
            'Basic knowledge of tools like MS Excel, PowerPoint, or JIRA',
            'Eagerness to learn in a fast-paced consulting environment',
        ],
    },
    {
        title: 'Full Stack Developer Intern',
        dept: 'Engineering',
        type: 'Internship',
        location: 'Kochi, Kerala / Remote',
        desc: 'Work alongside our engineering team to build and test web application features, contribute to real client projects, and grow your development skills.',
        requirements: [
            'Currently pursuing a degree in Computer Science or related field',
            'Basic knowledge of HTML, CSS, JavaScript, and React',
            'Familiarity with Git and version control workflows',
            'Interest in full stack development and modern web technologies',
            'Ability to learn quickly and work collaboratively',
        ],
    },
    {
        title: 'Data Analyst',
        dept: 'Analytics',
        type: 'Full-Time',
        location: 'Kochi, Kerala',
        desc: 'Design BI dashboards, develop ETL pipelines, and deliver analytics solutions for enterprise clients.',
        requirements: [
            '2+ years of experience in data analysis or BI',
            'Proficiency in SQL and at least one BI tool (Power BI, Tableau, or Looker)',
            'Experience with Python or R for data manipulation',
            'Strong analytical thinking and attention to detail',
            'Ability to translate data insights into business recommendations',
        ],
    },
    {
        title: 'UI/UX Designer',
        dept: 'Design',
        type: 'Full-Time',
        location: 'Kochi, Kerala / Remote',
        desc: 'Create user-centered design solutions for enterprise web applications, dashboards, and digital platforms.',
        requirements: [
            '2+ years of UI/UX design experience',
            'Proficiency in Figma or Adobe XD',
            'Strong portfolio showcasing web/app design projects',
            'Understanding of accessibility and responsive design principles',
            'Experience collaborating with developers in an agile environment',
        ],
    },
];

const CareersPage = () => {
    const [selected, setSelected] = useState(null);

    return (
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
                        <p className="section-subtitle">Click on a role to view full description and requirements.</p>
                    </div>
                    <div className="jobs-list">
                        {openRoles.map((job, i) => (
                            <motion.div
                                key={i}
                                className="job-card"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelected(job)}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                            >
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span className="job-badge"><FaBriefcase style={{ marginRight: 4 }} />{job.dept}</span>
                                        <span className="job-badge"><FaClock style={{ marginRight: 4 }} />{job.type}</span>
                                        <span className="job-badge"><FaMapMarkerAlt style={{ marginRight: 4 }} />{job.location}</span>
                                    </div>
                                    <p style={{ marginTop: 10, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{job.desc}</p>
                                </div>
                                <span className="btn btn-outline-blue" style={{ flexShrink: 0, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                                    View Role <FaArrowRight style={{ fontSize: '0.75rem' }} />
                                </span>
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

            {/* Job Detail Modal */}
            {selected && (
                <div
                    style={{
                        position: 'fixed', inset: 0, zIndex: 1000,
                        background: 'rgba(10,20,40,0.65)', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
                    }}
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'white', borderRadius: 16, padding: '36px 40px',
                            maxWidth: 620, width: '100%', position: 'relative',
                            maxHeight: '85vh', overflowY: 'auto',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            style={{
                                position: 'absolute', top: 18, right: 18,
                                background: 'none', border: 'none', cursor: 'pointer',
                                color: 'var(--text-muted)', fontSize: '1.1rem', padding: 4,
                            }}
                        ><FaTimes /></button>

                        <div className="job-meta" style={{ marginBottom: 12 }}>
                            <span className="job-badge"><FaBriefcase style={{ marginRight: 4 }} />{selected.dept}</span>
                            <span className="job-badge"><FaClock style={{ marginRight: 4 }} />{selected.type}</span>
                            <span className="job-badge"><FaMapMarkerAlt style={{ marginRight: 4 }} />{selected.location}</span>
                        </div>

                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 14 }}>{selected.title}</h2>

                        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-blue)', marginBottom: 8 }}>Description</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 24 }}>{selected.desc}</p>

                        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-blue)', marginBottom: 12 }}>Requirements</h4>
                        <ul style={{ paddingLeft: 18, margin: 0, marginBottom: 28 }}>
                            {selected.requirements.map((req, i) => (
                                <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 6 }}>{req}</li>
                            ))}
                        </ul>

                        <a
                            href={`mailto:connect@dataix3.com?subject=Application for ${encodeURIComponent(selected.title)}`}
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center', display: 'block' }}
                        >
                            Apply Now <FaArrowRight style={{ marginLeft: 8, fontSize: '0.8rem' }} />
                        </a>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default CareersPage;
