import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Homepage sections
import Hero from './components/Hero';
import SolutionsOverview from './components/SolutionsOverview';
import AboutSnapshot from './components/AboutSnapshot';
import IndustriesSection from './components/IndustriesSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';

// Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import WorksPage from './pages/WorksPage';
import InsightsPage from './pages/InsightsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// Solution Pages
import ErpPage from './pages/solutions/ErpPage';
import CrmPage from './pages/solutions/CrmPage';
import LmsPage from './pages/solutions/LmsPage';
import HrPage from './pages/solutions/HrPage';
import AnalyticsPage from './pages/solutions/AnalyticsPage';
import WebDevPage from './pages/solutions/WebDevPage';

// Scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Homepage
const HomePage = () => (
  <>
    <Hero />
    <SolutionsOverview />
    <AboutSnapshot />
    <IndustriesSection />
    <Features />
    <Testimonials />
    <Contact />
    <FinalCTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions/erp" element={<ErpPage />} />
          <Route path="/solutions/crm" element={<CrmPage />} />
          <Route path="/solutions/lms" element={<LmsPage />} />
          <Route path="/solutions/hr" element={<HrPage />} />
          <Route path="/solutions/analytics" element={<AnalyticsPage />} />
          <Route path="/solutions/web" element={<WebDevPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
