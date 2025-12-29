import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Features', href: '#features' }, // "Why Choose Us"
        { name: 'Contact', href: '#contact' },
    ];

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    className="logo"
                >
                    <a href="#">Data<span className="blue-text">iX3</span></a>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop-menu">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <a href={link.href}>{link.name}</a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <a href="#contact" className="btn btn-sm">Get Started</a>
                    </motion.li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <ul className="nav-menu-mobile">
                                {navLinks.map((link, index) => (
                                    <li key={index} onClick={() => setIsOpen(false)}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                                <li onClick={() => setIsOpen(false)}>
                                    <a href="#contact" className="btn mobile-btn">Get Started</a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
