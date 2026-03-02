import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Get In Touch</span>
                    <h2 className="section-title">Let's Discuss Your <span className="text-gradient">Project</span></h2>
                    <p className="section-subtitle">
                        Ready to transform your operations? Our consultants are here to help.
                    </p>
                </div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-info-items">
                            <div className="contact-info-item">
                                <div className="contact-icon-box"><FaEnvelope /></div>
                                <div>
                                    <span>Email Us</span>
                                    <a href="mailto:connect@dataix3.com">connect@dataix3.com</a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-icon-box"><FaPhone /></div>
                                <div>
                                    <span>Call Us</span>
                                    <a href="tel:+918590945369">+91 8590 945 369</a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                                <div>
                                    <span>Location</span>
                                    <p>Kochi, Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrap"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        {submitted ? (
                            <div className="form-success">
                                <h3>Thank you for reaching out!</h3>
                                <p>We'll get back to you within 1 business day.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" name="company" placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Service Interested In</label>
                                    <select name="service" value={form.service} onChange={handleChange}>
                                        <option value="">Select a service...</option>
                                        <option>ERP Solutions</option>
                                        <option>CRM Platforms</option>
                                        <option>LMS Systems</option>
                                        <option>HR Management Software</option>
                                        <option>Data Analytics & BI</option>
                                        <option>Web Development</option>
                                        <option>Business Consulting</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea name="message" rows="4" placeholder="Tell us about your project and goals..." value={form.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-block">Submit Inquiry</button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
