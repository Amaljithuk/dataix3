import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo"><img src="/logo.jpg" alt="DataiX3" className="footer-logo-img" /></Link>
                        <p className="footer-tagline">Business Consulting & Enterprise Technology Solutions</p>
                        <div className="footer-contact-list">
                            <a href="mailto:connect@dataix3.com" className="footer-contact-item">
                                <FaEnvelope /> connect@dataix3.com
                            </a>
                            <a href="tel:+918590945369" className="footer-contact-item">
                                <FaPhone /> +91 8590 945 369
                            </a>
                            <span className="footer-contact-item">
                                <FaMapMarkerAlt /> Kochi, Kerala, India
                            </span>
                        </div>
                        <div className="footer-socials">
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/solutions/erp">ERP Solutions</Link></li>
                            <li><Link to="/solutions/crm">CRM Platforms</Link></li>
                            <li><Link to="/solutions/lms">LMS Systems</Link></li>
                            <li><Link to="/solutions/hr">HR Management</Link></li>
                            <li><Link to="/solutions/analytics">Data Analytics</Link></li>
                            <li><Link to="/solutions/web">Web Development</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Business Consulting</Link></li>
                            <li><Link to="/services">Digital Transformation</Link></li>
                            <li><Link to="/services">Enterprise Architecture</Link></li>
                            <li><Link to="/services">Custom Software Dev</Link></li>
                            <li><Link to="/services">Data Strategy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About DataiX3</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/works">Works & Case Studies</Link></li>
                            <li><Link to="/insights">Insights & Blog</Link></li>
                            <li><Link to="/partnerships">Partnerships</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {year} DataiX3. All rights reserved.</p>
                    <p>Business Consulting & Enterprise Technology Solutions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
