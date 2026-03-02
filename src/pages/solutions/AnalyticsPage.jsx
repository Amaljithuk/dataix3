import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const AnalyticsPage = () => (
    <SolutionPage
        breadcrumb="Data Analytics & BI"
        title="Business Intelligence & Data Analytics"
        subtitle="Transform raw data into strategic insights for smarter decision-making."
        overview="We build real-time dashboards and analytics platforms that empower decision-makers to track KPIs, monitor operational performance, and forecast growth. Our data engineering team connects disparate data sources into a unified, reliable intelligence layer for your organization."
        sections={[
            {
                heading: 'Dashboard & Visualization',
                items: ['Interactive Business Dashboards', 'KPI Monitoring', 'Custom Report Builder', 'Executive Snapshot Views'],
            },
            {
                heading: 'Data Integration',
                items: ['Multi-Source Data Connectors', 'ETL Pipeline Development', 'Data Warehouse Design', 'API Integrations'],
            },
            {
                heading: 'Advanced Analytics',
                items: ['Predictive Analytics', 'Trend Analysis', 'Anomaly Detection', 'Forecasting Models'],
            },
            {
                heading: 'BI Platform Development',
                items: ['Custom BI Portals', 'Role-Based Access', 'Scheduled Reports', 'Mobile Dashboards'],
            },
        ]}
        benefits={[
            'Data-driven decision making across all departments',
            'Real-time operational transparency',
            'Improved forecasting and planning accuracy',
            'Faster executive reporting cycles',
            'Unified view of all business data',
        ]}
        whyText="We go beyond dashboards — we architect the data infrastructure, design the insight strategy, and build the analytics systems that give your leadership team the visibility they need to make confident, data-backed decisions."
        ctaText="Explore Analytics Solutions"
    />
);

export default AnalyticsPage;
