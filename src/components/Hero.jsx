import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const images = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1920&auto=format&fit=crop",
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero-section">
            {/* Background Slider */}
            <div className="hero-bg">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="Enterprise background"
                        className="hero-bg-img"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                </AnimatePresence>
                <div className="hero-overlay" />
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <motion.span
                        className="hero-eyebrow"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Business Consulting & Technology Solutions
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.9 }}
                    >
                        Transforming Businesses with{' '}
                        <span className="hero-title-accent">Intelligent Technology</span>{' '}
                        &amp; Strategic Consulting
                    </motion.h1>

                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65, duration: 0.8 }}
                    >
                        We help organizations streamline operations, scale efficiently, and make
                        data-driven decisions through enterprise-grade digital solutions.
                    </motion.p>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85, duration: 0.7 }}
                    >
                        <Link to="/contact" className="btn btn-lg">
                            Schedule a Consultation
                        </Link>
                        <Link to="/solutions/erp" className="btn btn-lg btn-outline">
                            Explore Our Solutions
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.7 }}
                    >
                        <div className="hero-stat">
                            <strong>150+</strong>
                            <span>Projects Delivered</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <strong>50+</strong>
                            <span>Enterprise Clients</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <strong>6</strong>
                            <span>Industries Served</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="slider-dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(i)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
