import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './AboutSnapshot.css';

const AboutSnapshot = () => {
    return (
        <section className="section about-snapshot">
            <div className="container about-snapshot-inner">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-eyebrow">Who We Are</span>
                    <h2 className="section-title">
                        Bridging Strategy &amp; Technology for{' '}
                        <span className="text-gradient">Enterprise Growth</span>
                    </h2>
                    <p className="about-body">
                        DataiX3 is a business consulting and technology solutions firm focused on
                        delivering scalable, efficient, and intelligent systems. We bridge strategy
                        and technology to help companies modernize operations and accelerate growth.
                    </p>
                    <ul className="about-points">
                        {[
                            'Strategic consulting-first approach',
                            'Industry-specific implementations',
                            'Enterprise-grade scalable architecture',
                            'Long-term technology partnership',
                        ].map((pt, i) => (
                            <li key={i}>
                                <FaCheckCircle className="check-icon" />
                                {pt}
                            </li>
                        ))}
                    </ul>
                    <Link to="/about" className="btn btn-outline-blue">
                        Learn About Us <FaArrowRight style={{ marginLeft: 6, fontSize: '0.8rem' }} />
                    </Link>
                </motion.div>

                <motion.div
                    className="about-visual"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <div className="about-img-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop"
                            alt="Business consulting team"
                        />
                    </div>
                    <div className="about-stat-card">
                        <strong>10+</strong>
                        <span>Years of Expertise</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSnapshot;
