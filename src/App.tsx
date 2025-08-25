import React from 'react';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/termos-uso" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;