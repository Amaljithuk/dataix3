import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode, FaDatabase, FaCloud, FaBullhorn,
    FaLaptopCode, FaRocket, FaShoppingCart, FaUserTie,
    FaBrain, FaNetworkWired, FaChartLine,
    FaServer, FaIndustry, FaGraduationCap,
    FaSearch, FaHashtag, FaUserCircle
} from 'react-icons/fa';
import './Services.css';

const servicesData = {
    Web: {
        icon: <FaCode />,
        items: [
            { title: 'Website Building', desc: 'Custom visuals and performance-driven development.', icon: <FaLaptopCode /> },
            { title: 'Website Relaunching', desc: 'Modernize your legacy sites with new tech.', icon: <FaRocket /> },
            { title: 'E-commerce Development', desc: 'Scalable online stores with secure payments.', icon: <FaShoppingCart /> },
            { title: 'Portfolio Websites', desc: 'Showcase your work with stunning designs.', icon: <FaUserTie /> },
        ]
    },
    Data: {
        icon: <FaDatabase />,
        items: [
            { title: 'ML Model Development', desc: 'Predictive analytics and intelligent automation.', icon: <FaBrain /> },
            { title: 'Data Engineering', desc: 'Robust pipelines for your data infrastructure.', icon: <FaNetworkWired /> },
            { title: 'Data Analytics', desc: 'Actionable insights from your complex data.', icon: <FaChartLine /> },
        ]
    },
    Cloud: {
        icon: <FaCloud />,
        items: [
            { title: 'Cloud Computing', desc: 'Scalable infrastructure on AWS, Azure, or GCP.', icon: <FaServer /> },
            { title: 'ERP Solutions', desc: 'Integrated management for core business processes.', icon: <FaIndustry /> },
            { title: 'LMS Solutions', desc: 'Learning Management Systems for education.', icon: <FaGraduationCap /> },
        ]
    },
    Marketing: {
        icon: <FaBullhorn />,
        items: [
            { title: 'Digital Marketing', desc: 'Comprehensive strategies for online growth.', icon: <FaBullhorn /> },
            { title: 'SEO Optimization', desc: 'Rank higher and drive organic traffic.', icon: <FaSearch /> },
            { title: 'SMM', desc: 'Engage your audience on social media platforms.', icon: <FaHashtag /> },
            { title: 'Personal Branding', desc: 'Build authority and trust in your niche.', icon: <FaUserCircle /> },
            { title: 'Portfolio Making', desc: 'Professional portfolio curation and design.', icon: <FaUserTie /> },
            { title: 'Brand Outreach', desc: 'Strategic outreach to grow your brand presence.', icon: <FaRocket /> },
        ]
    }
};

const Services = () => {
    const [activeTab, setActiveTab] = useState('Web');

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle">Comprehensive solutions for your digital transformation</p>
                </motion.div>

                <div className="services-tabs">
                    {Object.keys(servicesData).map((key) => (
                        <button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                        >
                            <span className="tab-icon">{servicesData[key].icon}</span>
                            {key}
                        </button>
                    ))}
                </div>

                <div className="services-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="services-grid"
                        >
                            {servicesData[activeTab].items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="service-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="service-icon-wrapper">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Services;
