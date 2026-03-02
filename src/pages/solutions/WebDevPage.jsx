import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const WebDevPage = () => (
    <SolutionPage
        breadcrumb="Web & Digital Platforms"
        title="Enterprise Web Development"
        subtitle="High-performance digital platforms built for scalability and conversion."
        overview="We design and develop enterprise-grade corporate websites, business portals, and custom web applications with a focus on performance, security, and conversion. Our development process is guided by UX strategy and business objectives — not just aesthetics."
        sections={[
            {
                heading: 'Corporate Websites',
                items: ['Brand-Aligned Design', 'SEO-Optimized Structure', 'CMS Integration', 'Performance Optimization'],
            },
            {
                heading: 'Web Applications',
                items: ['Custom Business Portals', 'E-commerce Platforms', 'Client Dashboards', 'Workflow Automation Tools'],
            },
            {
                heading: 'UI/UX Design',
                items: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility Compliance'],
            },
            {
                heading: 'Technical Excellence',
                items: ['Responsive Design', 'Page Speed Optimization', 'Security Hardening', 'Scalable Architecture'],
            },
        ]}
        benefits={[
            'Mobile-responsive design across all devices',
            'SEO-optimized structure for organic visibility',
            'Secure and scalable technical architecture',
            'Conversion-focused layouts and UX',
            'Ongoing maintenance and performance support',
        ]}
        whyText="We combine UX strategy, brand design, and engineering precision to deliver digital platforms that don't just look great — they perform and convert. Every project is led by a dedicated consultant and delivery team."
        ctaText="Start Your Web Project"
    />
);

export default WebDevPage;
