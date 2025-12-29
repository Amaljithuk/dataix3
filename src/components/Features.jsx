import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserTie, FaBolt, FaBrain, FaAward, FaHeadset } from 'react-icons/fa';
import './Features.css';

const features = [
    {
        id: 1,
        icon: <FaBrain />,
        title: 'AI-First Approach',
        desc: 'We integrate cutting-edge Artificial Intelligence into every solution to future-proof your business.',
        size: 'large' // Spans 2 cols
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: 'High Performance',
        desc: 'Optimized for speed and scalability.',
        size: 'medium'
    },
    {
        id: 3,
        icon: <FaShieldAlt />,
        title: 'Enterprise Security',
        desc: 'Bank-grade protection for your data.',
        size: 'medium'
    },
    {
        id: 4,
        icon: <FaUserTie />,
        title: 'Top 1% Talent',
        desc: 'Our developers and data scientists are vetted experts.',
        size: 'medium'
    },
    {
        id: 5,
        icon: <FaHeadset />,
        title: '24/7 Dedicated Support',
        desc: 'We are always here to ensure your systems run smoothly.',
        size: 'medium'
    },
    {
        id: 6,
        icon: <FaAward />,
        title: 'Award Winning Design',
        desc: 'User interfaces that look stunning and convert users.',
        size: 'medium' // Fits in the remaining 1x1 slot
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="features-header text-center mb-5">
                    <motion.h4
                        className="blue-caption"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Why Choose DataiX3
                    </motion.h4>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Built for <span className="text-gradient">Growth</span>
                    </motion.h2>
                </div>

                <div className="bento-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={`bento-item ${feature.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="bento-icon-box">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                            <div className="bento-bg-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

