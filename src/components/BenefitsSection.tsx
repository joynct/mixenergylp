import React from 'react';
import { TrendingDown, DollarSign, Home, Zap, Leaf } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Menos surpresas com bandeira vermelha",
      description: "Livre das variações tarifárias e bandeiras da concessionária"
    },
    {
      icon: DollarSign,
      title: "Economia garantida",
      description: "Redução de até 95% na sua conta de energia elétrica"
    },
    {
      icon: Home,
      title: "Valorização do imóvel",
      description: "Imóveis com instalações fotovoltaicas podem se valorizar em até 10%"
    },
    {
      icon: Zap,
      title: "Liberdade com aparelhos elétricos",
      description: "Use seus equipamentos sem medo da conta"
    },
    {
      icon: Leaf,
      title: "Energia limpa e sustentável",
      description: "Contribua para um futuro mais verde e sustentável"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Por que investir em energia solar?
          </h2>
         
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-blue-200 group hover:border-orange-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg p-3 group-hover:scale-110 transition-transform shadow-md">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-950 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;