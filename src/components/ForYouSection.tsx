import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ForYouSection = () => {
  const desires = [
    "Pagar menos na conta de luz",
    "Reduzir custos da sua empresa",
    "Ter conforto sem medo da conta",
    "Valorizar seu imóvel",
    "Produzir sua própria energia"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">
          Se você quer...
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid gap-4">
            {desires.map((desire, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 hover:from-blue-100 hover:to-blue-200 transition-colors">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg text-blue-950 font-medium flex-1 text-left">{desire}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-8 max-w-3xl mx-auto mb-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Então a energia solar com certeza é para você!
          </h3>
          <p className="text-lg">
           O número de sistemas fotovoltaicos instalados no território brasileiro não para de crescer. Representando 13,1% de toda a matriz elétrica no Brasil, a energia solar é a segunda maior fonte do país, ficando atrás apenas da energia hídrica. Você também pode ter a liberdade de produzir sua própria energia.
          </p>
        </div>
        
        <a
          href="https://wa.me/5564992170512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <span>QUERO MINHA SIMULAÇÃO AGORA</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default ForYouSection;