import React from 'react';
import { MapPin, DollarSign, Clock, Star, Quote } from 'lucide-react';

const ResultsSection = () => {
  const projects = [
    {
      client: "Restaurante Japa Chic",
      location: "Rio Verde-GO",
      savings: "R$ 2.600/mês",
      delivery: "28 dias",
      rating: 5
    },
    {
      client: "Fazenda Santa Clara",
      location: "Jataí-GO",
      savings: "R$ 4.200/mês",
      delivery: "35 dias",
      rating: 5
    },
    {
      client: "Residência Silva",
      location: "Goiânia-GO",
      savings: "R$ 680/mês",
      delivery: "21 dias",
      rating: 5
    }
  ];

  return (
    <section id="results" className="py-16 bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados Garantidos
          </h2>
          <p className="text-xl text-blue-200">Veja alguns dos nossos projetos entregues</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-10 w-10 text-green-600" />
                  </div>
                  <p className="text-white font-semibold text-lg">Projeto Concluído</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3">{project.client}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>Economia: {project.savings}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Clock className="h-4 w-4" />
                    <span>Entrega: {project.delivery}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({project.rating}.0)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Google Reviews Social Proof Section */}
        <div className="mt-16 pt-16 border-t border-blue-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
             O que estão falando da Mix Energy
            </h3>
            <img 
              src="/Google Logo.png" 
              alt="Google Logo" 
              className="mx-auto mb-4 h-8 w-auto"
            />
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
              <span className="text-white text-xl font-semibold ml-3">5.0</span>
            </div>         
          </div>
          
          {/* Google Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Bruna Ptaniskas</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Excelente experiência com a mix Energy! A equipe foi super atenciosa e profissional. O sistema de energia solar instalado é de alta qualidade e já estou economizando na conta de luz.
Funcionários educados , prazo de entrega rápido e serviço de qualidade . Recomendo muito!💡"
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 2 semanas
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Matheus Freitas</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Ótimo atendimento, entrega no prazo combinado, preço bem acessível 🔝"
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 6 meses
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">talison rogerio</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Serviço de procedência! Recomendo Mix Energy solar.."
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 6 meses
              </div>
            </div>
            
            {/* Review 4 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Maria Oliveira</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Bom atendimento ótimo trabalho profissional excelente"
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 1 semana
              </div>
            </div>
            
            {/* Review 5 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Maria Eduarda Oliveira</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Ótimo atendimento, uma empresa que entrega o nosso pedido no prazo certo e um sistema de qualidade, ótima equipe de instalação, recomendo muito porque agora o sol gera minha energia graças a mix energy😉Ótima experiência !"
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 4 dias
              </div>
            </div>
            
            {/* Placeholder for 6th review - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Lucia Ferreira</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "Equipe muito competente e prestativa. Explicaram todo o processo e me deixaram muito segura com o investimento."
                </p>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Há 5 dias
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-blue-200 text-lg mb-6">
              Seja você também um cliente satisfeito!
            </p>
            <a
              href="https://wa.me/5564992170512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span>QUERO ECONOMIZAR COM ENERGIA SOLAR</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;