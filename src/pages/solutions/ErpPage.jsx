import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const ErpPage = () => (
    <SolutionPage
        breadcrumb="ERP Solutions"
        title="Enterprise Resource Planning (ERP) Solutions"
        subtitle="Integrate, automate, and optimize your core business operations with a unified ERP platform."
        overview="Our ERP solutions centralize finance, operations, inventory, procurement, HR, and reporting into a single intelligent system. We design scalable ERP architectures tailored to your business structure, enabling operational visibility and strategic control across the enterprise."
        sections={[
            {
                heading: 'Finance & Accounting',
                items: ['General Ledger', 'Accounts Payable & Receivable', 'Tax Management', 'Financial Reporting'],
            },
            {
                heading: 'Inventory Management',
                items: ['Stock Tracking', 'Warehouse Management', 'Automated Reordering', 'Multi-location Support'],
            },
            {
                heading: 'Procurement',
                items: ['Vendor Management', 'Purchase Orders', 'Approval Workflows', 'Contract Management'],
            },
            {
                heading: 'HR & Payroll',
                items: ['Employee Records', 'Payroll Automation', 'Attendance Tracking', 'Compliance Management'],
            },
            {
                heading: 'Sales & Distribution',
                items: ['Order Processing', 'Invoicing', 'Sales Reporting', 'Customer Management'],
            },
            {
                heading: 'Manufacturing',
                items: ['Production Planning', 'BOM Management', 'Quality Control', 'Shop Floor Tracking'],
            },
        ]}
        benefits={[
            'Real-time business visibility across all departments',
            'Reduced operational inefficiencies',
            'Improved financial accuracy and compliance',
            'Automated workflows and approvals',
            'Scalable architecture for growth',
        ]}
        whyText="We combine strategic consulting with deep technical expertise to ensure your ERP system aligns with your actual business goals — not just a generic software deployment. Our implementation methodology reduces risk and accelerates time-to-value."
        ctaText="Request ERP Consultation"
    />
);

export default ErpPage;
