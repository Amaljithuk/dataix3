import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const CrmPage = () => (
    <SolutionPage
        breadcrumb="CRM Platforms"
        title="Customer Relationship Management (CRM) Systems"
        subtitle="Drive revenue growth with structured customer lifecycle management."
        overview="Our CRM systems centralize customer interactions, automate sales workflows, and provide actionable insights to improve acquisition and retention. We customize platforms to fit your unique sales processes and industry requirements — not the other way around."
        sections={[
            {
                heading: 'Lead & Pipeline Management',
                items: ['Lead Capture & Scoring', 'Sales Pipeline Visualization', 'Deal Tracking', 'Forecasting Dashboards'],
            },
            {
                heading: 'Customer Management',
                items: ['Contact & Account Profiles', 'Interaction History', 'Customer Segmentation', 'Account Health Monitoring'],
            },
            {
                heading: 'Sales Automation',
                items: ['Automated Follow-ups', 'Email Sequences', 'Task Automation', 'Sales Playbooks'],
            },
            {
                heading: 'Analytics & Reporting',
                items: ['Revenue Forecasting', 'Performance Dashboards', 'Sales Reports', 'Team Activity Insights'],
            },
        ]}
        benefits={[
            'Increased sales efficiency and close rates',
            'Improved customer engagement and retention',
            'Better revenue forecasting accuracy',
            'Enhanced team collaboration',
            'Automated repetitive sales tasks',
        ]}
        whyText="We customize CRM platforms to align precisely with your sales process, team structure, and industry requirements — not generic out-of-the-box setups. Our approach includes training and adoption strategies to ensure high usage rates."
        ctaText="Book CRM Strategy Call"
    />
);

export default CrmPage;
