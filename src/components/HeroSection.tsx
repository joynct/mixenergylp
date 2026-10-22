import { ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 md:pt-20 pb-16 text-white relative overflow-hidden min-h-screen">
      {/* Background image overlay with 50% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url(/herobg.webp)'
        }}
      ></div>
      
      {/* Black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Você paga mais de <span className="text-yellow-400">R$300 </span> na sua conta de energia?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Com energia solar você economiza até <span className="text-yellow-400 font-semibold">95%</span> desse valor.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span>QUERO ECONOMIZAR AGORA</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl animate-bill-shake">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/conta-de-energia.webp" width={600} height={1264} />
                  <img
                    src="/conta-de-energia-mobile.webp"
                    alt="Conta de Energia Elétrica"
                    width={600}
                    height={624}
                    className="w-full h-auto block animate-print-up"
                  />
                </picture>

                {/* R$ 300 overlay with impactful animation - increased size by 40% */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-impact-reveal">
                  <img 
                    src="/R$ 300.png" 
                    alt="R$ 300" 
                    width={424}
                    height={197}
                    className="w-[25.6rem] h-auto drop-shadow-2xl animate-tag-pulse"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Downward Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <button
            type="button"
            aria-label="Ir para a próxima seção"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="h-8 w-8 text-white/70 hover:text-white transition-colors cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;