import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const HrPage = () => (
    <SolutionPage
        breadcrumb="HR Management"
        title="HR & Payroll Management Systems"
        subtitle="Automate workforce management with intelligent HR technology."
        overview="Our HR systems simplify every stage of the employee lifecycle — from recruitment and onboarding to payroll processing, attendance tracking, and compliance management. We build platforms that reduce manual effort while improving workforce visibility across your organization."
        sections={[
            {
                heading: 'Recruitment & Onboarding',
                items: ['Job Posting Management', 'Applicant Tracking', 'Interview Scheduling', 'Digital Onboarding Workflows'],
            },
            {
                heading: 'Employee Management',
                items: ['Employee Database', 'Role & Department Management', 'Document Management', 'Self-Service Portal'],
            },
            {
                heading: 'Payroll & Compliance',
                items: ['Payroll Automation', 'Tax Computation', 'Statutory Compliance', 'Payslip Generation'],
            },
            {
                heading: 'Attendance & Performance',
                items: ['Leave Management', 'Attendance Tracking', 'Shift Management', 'Performance Reviews'],
            },
        ]}
        benefits={[
            'Reduced manual HR processing time',
            'Compliance-ready payroll and reporting',
            'Accurate and timely payroll processing',
            'Improved workforce visibility',
            'Streamlined employee lifecycle management',
        ]}
        whyText="We build HR systems that align with your organization's structure, policies, and regulatory requirements — not an off-the-shelf solution that requires your team to adapt. Full customization, integration, and ongoing support included."
        ctaText="Talk to HR Specialist"
    />
);

export default HrPage;
