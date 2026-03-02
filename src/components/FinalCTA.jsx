import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FinalCTA.css';

const FinalCTA = () => {
    return (
        <section className="final-cta-section">
            <div className="cta-bg-pattern" />
            <div className="container">
                <motion.div
                    className="cta-inner"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Ready to Get Started?
                    </span>
                    <h2 className="cta-title">
                        Ready to Transform Your<br />
                        <span style={{ color: '#4fc3f7' }}>Business Operations?</span>
                    </h2>
                    <p className="cta-desc">
                        Schedule a free strategy call with our consultants and discover how DataiX3
                        can streamline your operations and accelerate growth.
                    </p>
                    <div className="cta-btns">
                        <Link to="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary-blue)', border: '2px solid white' }}>
                            Book a Free Strategy Call
                        </Link>
                        <Link to="/solutions/erp" className="btn btn-lg btn-outline">
                            Explore Solutions
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
