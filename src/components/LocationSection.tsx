import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="min-h-screen py-16" style={{ backgroundColor: 'rgb(23, 37, 84)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Venha nos visitar!
          </h2>
          <p className="text-xl text-white/90">Conheça nosso escritório em Rio Verde</p>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mb-12">
          <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.8731103692103!2d-50.92817192295506!3d-17.797659675469472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361dbcd93b9b907%3A0xaaa88da383083c07!2sMix%20Energy%20Solar!5e0!3m2!1spt-BR!2sbr!4v1750531363602!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Mix Energy Solar"
            ></iframe>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <div className="flex items-start space-x-4 text-white">
            <MapPin className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div className="text-base text-white">
              <h3 className="text-lg font-bold mb-2">Endereço</h3>
              <p className="text-white/90 leading-relaxed">
                Av. Pedro Ludovico Teixeira, 16 - lt07/08 - parte c<br />
                Rio Verde - GO, 75906-270
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 text-white">
            <Clock className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
            <div className="text-base text-white">
              <h3 className="text-lg font-bold mb-2">Horário de Funcionamento</h3>
              <p className="text-white/90 leading-relaxed">
                Segunda a Sexta: 08h às 18h<br />
                Sábado e Domingo: Fechado
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 text-white">
            <Phone className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
            <div className="text-base text-white">
              <h3 className="text-lg font-bold mb-2">Contato</h3>
              <a 
                href="https://wa.me/5564992170512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                (64) 99217-0512
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;