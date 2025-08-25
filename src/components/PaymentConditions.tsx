import React from 'react';
import { Calendar, CreditCard, ArrowRight } from 'lucide-react';

const PaymentConditions = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">
          Condições Especiais de Pagamento
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-200">
            <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-950 mb-4">120 dias de carência</h3>
            <p className="text-blue-800 text-lg">
              Comece a pagar apenas depois que seu sistema já estiver gerando economia
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 border-2 border-orange-200">
            <CreditCard className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Financiamento em até 120x</h3>
            <p className="text-blue-800 text-lg">
              Parcelas no boleto que cabem no seu orçamento
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <p className="text-white text-xl font-semibold">
            💡 <strong>Dica:</strong> Sua parcela pode ser menor que o valor atual da sua conta de luz!
          </p>
        </div>
        
        <a
          href="https://wa.me/5564992170512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <span>FAZER SIMULAÇÃO GRÁTIS NO WHATSAPP</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
      
      {/* Gradient overlay at bottom - reduced height and positioned closer to content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-orange-100/20 to-yellow-100/30 pointer-events-none"></div>
    </section>
  );
};

export default PaymentConditions;