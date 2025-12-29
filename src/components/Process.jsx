import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const steps = [
    {
        icon: <FaLightbulb />,
        title: 'Discovery',
        desc: 'We analyze your goals and roadmap the perfect solution.'
    },
    {
        icon: <FaCogs />,
        title: 'Development',
        desc: 'Agile sprints with regular updates and feedback loops.'
    },
    {
        icon: <FaRocket />,
        title: 'Launch',
        desc: 'Seamless deployment with rigorous testing and optimization.'
    },
    {
        icon: <FaChartLine />,
        title: 'Scale',
        desc: 'Continuous monitoring and improvements for growth.'
    }
];

const Process = () => {
    return (
        <section className="section process-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
                    <p className="section-subtitle">From concept to reality in four simple steps</p>
                </motion.div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step-container">
                            <motion.div
                                className="process-step"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <div className="step-number">0{index + 1}</div>
                                <div className="step-icon-box">
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
