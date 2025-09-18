import React, { useState } from 'react';
import { MapPin, DollarSign, Clock, Star, Quote, X } from 'lucide-react';

const ResultsSection = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects = [
    {
      client: "Restaurante Japa Chic",
      image: "/projetos/japa-chic.JPG",
      location: "Rio Verde-GO",
      modules: 40,
      savings: "R$ 2.500/mês",
      generation: "2.800 kWh",
      rating: 5
    },
    {
      client: "Barão Bebida Gelada",
      image: "/projetos/barao.JPG",
      location: "Rio Verde-GO",
      modules: 100,
      savings: "R$ 7.200/mês",
      generation: "7.500 kWh",
      rating: 5
    },
    {
      client: "Residência Morada do Sol",
      image: "/projetos/residencia.JPG",
      location: "Rio Verde-GO",
      modules: 32,
      savings: "R$ 2.200/mês",
      generation: "2.400 kWh",
      rating: 5
    },
    {
      client: "Ki-Karnes",
      image: "/projetos/ki-karnes.JPG",
      location: "Rio Verde-GO",
      modules: 50,
      savings: "R$ 3.400/mês",
      generation: "3.600 kWh",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative cursor-pointer group" onClick={() => setModalImage(project.image)}>
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                  Clique para ampliar
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3">{project.client}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 font-semibold">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-orange-600 font-semibold">
                    <span>Módulos:</span>
                    <span className="font-semibold">{project.modules}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
                    <span>Economia Estimada: {project.savings}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-600 font-semibold">                  
                    <span>Geração: {project.generation}</span>
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

        {/* Modal de imagem ampliada */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                onClick={() => setModalImage(null)}
                aria-label="Fechar"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              <img src={modalImage} alt="Projeto ampliado" className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg" />
            </div>
          </div>
        )}
        
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
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                         Excelente experiência com a Mix Energy! A equipe foi super atenciosa e profissional. O sistema de energia solar instalado é de alta qualidade e já estou economizando na conta de luz.
Funcionários educados , prazo de entrega rápido e serviço de qualidade . Recomendo muito!💡
                </p>
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
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                  Ótimo atendimento, entrega no prazo combinado, preço bem acessível 🔝
                </p>
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
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                  Serviço de procedência! Recomendo Mix Energy solar..
                </p>
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
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                  Bom atendimento ótimo trabalho profissional excelente
                </p>
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
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                  Ótimo atendimento, uma empresa que entrega o nosso pedido no prazo certo e um sistema de qualidade, ótima equipe de instalação, recomendo muito porque agora o sol gera minha energia graças a mix energy😉Ótima experiência !
                </p>
              </div>
            </div>
            
            {/* Placeholder for 6th review - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  H
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Helio Henrrique Francisco da Silva</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4 indent-4">
                  A Mix Energy superou minhas expectativas! Atendimento rápido, produtos de qualidade e um ótimo custo-benefício. Recomendo de olhos fechados!
                </p>
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