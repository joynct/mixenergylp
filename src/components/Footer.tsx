import React from 'react';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handlePrivacyPolicyClick = () => {
    // Scroll to top when navigating to privacy policy
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/mix energy logo branco.png" 
                alt="Mix Energy Solar" 
                className="h-[88px] w-auto"
              />
            </div>
            <p className="text-blue-200 mb-4">
              Deixe o sol gerar sua energia! 
            </p>
            <p className="text-sm text-blue-300">
              © 2025 Mix Energy Solar. Todos os direitos reservados.
            </p>
            
            {/* Privacy Policy link moved below copyright */}
            <div className="mt-4">
              <Link
                to="/politica-privacidade"
                onClick={handlePrivacyPolicyClick}
                className="text-blue-300 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5564992170512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>(64) 99217-0512</span>
              </a>
              
              <a
                href="https://instagram.com/mixenergysolar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@mixenergysolar</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Localização</h3>
            <div className="flex items-start space-x-2 text-blue-200">
              <MapPin className="h-5 w-5 mt-1" />
              <div>
                <p>Av. Pedro Ludovico Teixeira, 16</p>
                <p>lt07/08 - parte c</p>
                <p>Rio Verde - GO, 75906-270</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Developer credit - positioned at the bottom */}
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-sm text-blue-300">
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/cria.joy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              @cria.joy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;