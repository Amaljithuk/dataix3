import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Let's discuss <br />your <span className="text-gradient">Project</span></h2>
                        <p>
                            We are always open to discussing your new ideas and opportunities
                            to be part of your visions.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon"><FaEnvelope /></div>
                                <div className="details">
                                    <span>Email us</span>
                                    <a href="mailto:mail@dataix3.com">mail@dataix3.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><FaPhone /></div>
                                <div className="details">
                                    <span>Call us</span>
                                    <a href="tel:+918590945369">+91 8590 945 369</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><FaMapMarkerAlt /></div>
                                <div className="details">
                                    <span>Visit us</span>
                                    <p>Infopark, Kochi</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon"><FaLinkedin /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaFacebook /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Service Interested</label>
                                <select>
                                    <option>Web Development</option>
                                    <option>Data Analytics</option>
                                    <option>Cloud Services</option>
                                    <option>Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-block">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
