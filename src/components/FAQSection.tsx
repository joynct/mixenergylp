import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
       {
      question: "Qual o valor de um sistema de energia solar?",
      answer: "O custo dependerá diretamente do consumo de energia da casa e da capacidade do sistema necessário para suprir esse consumo. Pode acontecer de o sistema sair mais barato do que o valor da sua fatura atual, por isso fale com a gente para um orçamento personalizado. Temos condições especiais para pagamento."
    },
    {
      question: "Em quanto tempo terei o retorno do investimento em energia solar?",
      answer: "Em média, o retorno ocorre entre 4 a 5 anos. Por exemplo, se um sistema custa R$ 25.000 e gera uma economia mensal de R$ 500, o retorno aconteceria em cerca de 50 meses (4 anos e 2 meses). Após esse período, a economia gerada é puro lucro."
    },

    {
      question: "A energia solar funciona em dias nublados?",
      answer: "Sim! Os painéis solares geram energia mesmo com baixa luminosidade. Embora a produção seja menor em dias nublados, o sistema continua funcionando e gerando economia."
    },
    {
      question: "A conta de energia zera completamente?",
      answer: "A conta pode ser reduzida em até 95%, mas sempre haverá uma taxa mínima da concessionária de energia elétrica, que é obrigatória por lei."
    },
    {
      question: "Posso financiar o sistema?",
      answer: "Sim! Oferecemos financiamento em até 120x no boleto, com carência de até 120 dias. Você só começa a pagar quando o sistema já estiver gerando economia."
    },
    {
      question: "O que acontece com meu sistema de energia solar se eu mudar de endereço?",
      answer: "O sistema pode ser transferido para o novo endereço. Nossa equipe faz um novo projeto e realiza a transferência de forma segura e eficiente."
    },
   ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
            </div>
        
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-blue-950">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://wa.me/5564992170512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <span>FALAR COM ESPECIALISTA AGORA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;