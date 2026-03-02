import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Business Consulting', href: '/services#consulting' },
            { name: 'Digital Transformation', href: '/services#digital' },
            { name: 'Enterprise Architecture', href: '/services#architecture' },
            { name: 'Custom Software Development', href: '/services#software' },
            { name: 'Website & Application Development', href: '/services#web' },
            { name: 'Data Strategy & Analytics Consulting', href: '/services#data' },
        ],
    },
    {
        name: 'Solutions',
        href: '/solutions',
        dropdown: [
            { name: 'ERP Solutions', href: '/solutions/erp' },
            { name: 'CRM Platforms', href: '/solutions/crm' },
            { name: 'LMS Systems', href: '/solutions/lms' },
            { name: 'HR Management Software', href: '/solutions/hr' },
            { name: 'Data Analytics & BI', href: '/solutions/analytics' },
            { name: 'Web & Digital Platforms', href: '/solutions/web' },
        ],
    },
    {
        name: 'Industries',
        href: '/industries',
        dropdown: [
            { name: 'Education', href: '/industries#education' },
            { name: 'Healthcare', href: '/industries#healthcare' },
            { name: 'Retail & E-commerce', href: '/industries#retail' },
            { name: 'Manufacturing', href: '/industries#manufacturing' },
            { name: 'Corporate Enterprises', href: '/industries#corporate' },
            { name: 'Financial Services', href: '/industries#financial' },
        ],
    },
    {
        name: 'Works',
        href: '/works',
        dropdown: [
            { name: 'Case Studies', href: '/works#case-studies' },
            { name: 'Success Stories', href: '/works#success' },
            { name: 'Project Portfolio', href: '/works#portfolio' },
        ],
    },
    {
        name: 'Insights',
        href: '/insights',
        dropdown: [
            { name: 'Blog', href: '/insights#blog' },
            { name: 'Whitepapers', href: '/insights#whitepapers' },
            { name: 'Industry Trends', href: '/insights#trends' },
            { name: 'Technology Updates', href: '/insights#tech' },
        ],
    },
    {
        name: 'Partnerships',
        href: '/partnerships',
        dropdown: [
            { name: 'Technology Partnerships', href: '/partnerships#technology' },
            { name: 'Implementation Partners', href: '/partnerships#implementation' },
            { name: 'Channel Partnerships', href: '/partnerships#channel' },
            { name: 'Become a Partner', href: '/partnerships#become' },
        ],
    },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={dropdownRef}>
            <div className="nav-inner container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <span className="logo-blue">Data</span><span className="logo-i">i</span><span className="logo-blue">X3</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={item.href}
                                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                            >
                                {item.name}
                                {item.dropdown && <FaChevronDown className="chevron" />}
                            </Link>
                            {item.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            className="dropdown"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    className="dropdown-item"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link to="/contact" className="btn btn-sm nav-cta">
                    Schedule a Consultation
                </Link>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ul className="mobile-nav-list">
                            {navItems.map((item) => (
                                <li key={item.name} className="mobile-nav-item">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                className="mobile-nav-link mobile-expandable"
                                                onClick={() => setMobileExpanded(
                                                    mobileExpanded === item.name ? null : item.name
                                                )}
                                            >
                                                {item.name}
                                                <FaChevronDown className={`chevron ${mobileExpanded === item.name ? 'open' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileExpanded === item.name && (
                                                    <motion.ul
                                                        className="mobile-submenu"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {item.dropdown.map((sub) => (
                                                            <li key={sub.name}>
                                                                <Link
                                                                    to={sub.href}
                                                                    className="mobile-sublink"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="mobile-nav-link"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link to="/contact" className="btn btn-block mobile-cta" onClick={() => setIsOpen(false)}>
                                    Schedule a Consultation
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
