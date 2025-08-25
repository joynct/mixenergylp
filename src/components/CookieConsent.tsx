import React, { useState, useEffect } from 'react';
import { Cookie, X, ExternalLink } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-950 shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-start space-x-4">
          <Cookie className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Utilizamos cookies para melhorar sua experiência
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Este site utiliza cookies essenciais para seu funcionamento e cookies de análise para melhorar sua experiência. 
              Você pode aceitar todos os cookies ou personalizar suas preferências.
            </p>
            
            {showDetails && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-950">Cookies Necessários (Sempre Ativos)</h4>
                    <p className="text-gray-600">Essenciais para o funcionamento básico do site, incluindo navegação e formulários de contato.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Cookies de Análise</h4>
                    <p className="text-gray-600">Nos ajudam a entender como os visitantes interagem com o site para melhorar a experiência.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Cookies de Marketing</h4>
                    <p className="text-gray-600">Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias.</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Aceitar Todos
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Apenas Necessários
              </button>
              <button
                onClick={handleRejectAll}
                className="text-gray-600 hover:text-gray-800 px-4 py-2 font-medium transition-colors"
              >
                Rejeitar Todos
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 hover:text-blue-800 px-4 py-2 font-medium transition-colors flex items-center space-x-1"
              >
                <span>{showDetails ? 'Menos' : 'Mais'} Detalhes</span>
              </button>
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:text-blue-800 px-4 py-2 font-medium transition-colors flex items-center space-x-1"
              >
                <span>Política de Privacidade</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;