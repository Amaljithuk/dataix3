import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        quote: 'DataiX3 helped us modernize our entire workflow with a seamless ERP implementation. The result was a 40% reduction in manual processing time.',
        name: 'Rajesh Kumar',
        title: 'COO, Nexora Manufacturing',
        stars: 5,
    },
    {
        quote: 'Their CRM platform transformed how our sales team operates. Pipeline visibility and forecasting accuracy improved dramatically within 3 months.',
        name: 'Anitha Pillai',
        title: 'VP Sales, Vertex Retail Group',
        stars: 5,
    },
    {
        quote: 'The LMS they built for us scaled beautifully as our corporate training program grew from 500 to 5000 users. Exceptional technical delivery.',
        name: 'Dr. Mohammed Faiz',
        title: 'Head of L&D, CoreFinance Ltd',
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Client Success</span>
                    <h2 className="section-title">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Real outcomes from organizations that partnered with DataiX3.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <FaQuoteLeft className="quote-icon" />
                            <div className="stars">
                                {[...Array(t.stars)].map((_, j) => <FaStar key={j} />)}
                            </div>
                            <p className="testimonial-text">{t.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.name[0]}</div>
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
