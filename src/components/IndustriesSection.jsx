import { motion } from 'framer-motion';
import {
    FaGraduationCap, FaHospital, FaShoppingCart,
    FaIndustry, FaBuilding, FaDollarSign
} from 'react-icons/fa';
import './IndustriesSection.css';

const industries = [
    { icon: <FaIndustry />, name: 'Manufacturing', desc: 'Streamline production, inventory, and supply chain with intelligent ERP systems.' },
    { icon: <FaShoppingCart />, name: 'Retail & E-commerce', desc: 'Drive sales performance and customer engagement with connected commerce platforms.' },
    { icon: <FaGraduationCap />, name: 'Education', desc: 'Scalable LMS and administrative systems for institutions and corporate training.' },
    { icon: <FaHospital />, name: 'Healthcare', desc: 'Secure, compliant management systems for patient data, billing, and operations.' },
    { icon: <FaBuilding />, name: 'Corporate Enterprises', desc: 'End-to-end digital transformation from strategy through implementation and support.' },
    { icon: <FaDollarSign />, name: 'Financial Services', desc: 'Robust data analytics and compliance platforms for financial operations.' },
];

const IndustriesSection = () => {
    return (
        <section className="section industries-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Industries We Serve</span>
                    <h2 className="section-title">
                        Sector-Specific <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        We deliver industry-tailored solutions that address the unique operational challenges of each sector.
                    </p>
                </div>

                <div className="industries-grid">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            className="industry-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.5 }}
                        >
                            <div className="industry-icon">{ind.icon}</div>
                            <h3>{ind.name}</h3>
                            <p>{ind.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
