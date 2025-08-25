import React, { useEffect, useRef } from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (heading) {
      // Remove cursor after animation completes
      const timer = setTimeout(() => {
        heading.classList.add('animation-complete');
      }, 3500); // 0.5s delay + 3s animation

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/mix energy logo preto.png" 
            alt="Mix Energy Solar - Logo" 
            className="w-full max-w-lg mx-auto"
          />
        </div>
        
        {/* Text Container */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl font-bold mb-6 uppercase bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent typewriter-text-white"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontSize: '36px'
            }}
          >
            VAMOS DEIXAR O SOL GERAR SUA ENERGIA!
          </h2>
          <p className="text-xl mb-4 text-gray-800 fade-in-text fade-in-delay-1">
          </p>
          <p className="text-lg text-gray-700 fade-in-text fade-in-delay-2">
            Com equipe própria e especializada, garantimos instalação em tempo recorde,<p> atendimento humanizado e um pós-venda que realmente funciona. </p> <p> Atendemos em todo o Brasil. </p>
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Instalação Ágil</h3>
            <p className="text-gray-600">Equipe própria e especializada para instalação rápida e segura</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Excelência em Atendimento</h3>
            <p className="text-gray-600">Acompanhamento em todas as etapas do processo</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Pós-venda Garantido</h3>
            <p className="text-gray-600">Atendimento e suporte contínuo após a instalação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;