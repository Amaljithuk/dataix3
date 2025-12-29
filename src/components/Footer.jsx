import './Footer.css';

const Footer = () => {
    return (
        <footer className="styles-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>Data<span className="blue-text">iX3</span></h3>
                        <p>Digital Transformation Enabler</p>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#features">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Data Analytics</a></li>
                            <li><a href="#">Cloud Computing</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DataiX3. All rights reserved.</p>
                    <p>Designed for Concept Submission</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
