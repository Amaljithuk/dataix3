import SolutionPage from './SolutionPage';
import './SolutionPage.css';

const LmsPage = () => (
    <SolutionPage
        breadcrumb="LMS Systems"
        title="Learning Management Systems (LMS)"
        subtitle="Scalable digital learning platforms for institutions and enterprises."
        overview="We design and implement LMS platforms for corporate training programs, educational institutions, and professional certification bodies. Our systems are built on secure, scalable architecture with intuitive user experiences for both learners and administrators."
        sections={[
            {
                heading: 'Course Management',
                items: ['Course Creation & Publishing', 'Multimedia Content Support', 'SCORM Compliance', 'Curriculum Structuring'],
            },
            {
                heading: 'Learner Management',
                items: ['Student Enrollment', 'Progress Tracking', 'Learning Paths', 'Cohort Management'],
            },
            {
                heading: 'Assessments & Certification',
                items: ['Online Quizzes & Exams', 'Auto-Grading', 'Certificate Generation', 'Compliance Tracking'],
            },
            {
                heading: 'Analytics & Reporting',
                items: ['Completion Reports', 'Learner Performance', 'Engagement Analytics', 'Admin Dashboards'],
            },
        ]}
        benefits={[
            'Centralized learning environment',
            'Improved learner engagement and retention',
            'Automated reporting and compliance tracking',
            'Scalable for thousands of concurrent users',
            'Mobile-accessible learning on any device',
        ]}
        whyText="Our LMS implementations are designed around your specific learning objectives — whether corporate upskilling, compliance training, or institutional education. We provide seamless migration, content design guidance, and ongoing platform support."
        ctaText="Request LMS Demo"
    />
);

export default LmsPage;
