import { lazy, Suspense, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import PaymentConditions from './components/PaymentConditions';
import ResultsSection from './components/ResultsSection';
import ForYouSection from './components/ForYouSection';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieConsent from './components/CookieConsent';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SEO_ROUTES, SITE_URL } from './seoRoutes';
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const CookiePolicy = lazy(() => import('./components/CookiePolicy'));

const LEGAL_TITLES: Record<string, string> = Object.fromEntries(
  SEO_ROUTES.map((route) => [route.path, route.title])
);

// Ajusta título e canonical por rota (o index.html só tem os da home)
const RouteMeta = () => {
  const { pathname } = useLocation();
  const homeTitle = useRef(document.title);

  useEffect(() => {
    document.title = LEGAL_TITLES[pathname] ?? homeTitle.current;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = pathname in LEGAL_TITLES ? `${SITE_URL}${pathname}` : `${SITE_URL}/`;
    }
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <AboutSection />
    <BenefitsSection />
    <PaymentConditions />
    <ContactForm />
    <ResultsSection />
    <ForYouSection />
    <LocationSection />
    <FAQSection />
    <Footer />
    <WhatsAppFloat />
    <CookieConsent />
  </>
);

function App() {
  return (
    <Router>
      <RouteMeta />
      <div className="min-h-screen">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-uso" element={<TermsOfService />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
            {/* URLs antigas: redirecionam para a versão única de cada página */}
            <Route path="/privacy-policy" element={<Navigate to="/politica-privacidade" replace />} />
            <Route path="/terms-of-service" element={<Navigate to="/termos-uso" replace />} />
            <Route path="/cookie-policy" element={<Navigate to="/politica-cookies" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
