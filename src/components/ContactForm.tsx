import React, { useState } from 'react';
import { Send, Calculator } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    billValue: '',
    verification: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Format phone number
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.city.trim()) newErrors.city = 'Cidade é obrigatória';
    if (!formData.billValue.trim()) newErrors.billValue = 'Valor da conta é obrigatório';
    if (formData.verification !== '2') newErrors.verification = 'Resposta incorreta';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Olá! Gostaria de fazer uma simulação gratuita de energia solar.
      
Nome: ${formData.name}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Valor médio da conta: R$ ${formData.billValue}`;
      
      const whatsappUrl = `https://wa.me/5564992170512?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Receba uma simulação gratuita
            </h2>
            <p className="text-xl text-blue-100">
              Preencha os dados abaixo e descubra quanto você pode economizar
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-900">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Sua cidade"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              
              <div>
                <label htmlFor="billValue" className="block text-sm font-medium text-gray-700 mb-2">
                  Valor médio da conta de luz *
                </label>
                <input
                  type="number"
                  id="billValue"
                  name="billValue"
                  value={formData.billValue}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.billValue ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: 450"
                />
                {errors.billValue && <p className="text-red-500 text-sm mt-1">{errors.billValue}</p>}
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="verification" className="block text-sm font-medium text-gray-700 mb-2">
                1 + 1=?*
              </label>
              <input
                type="text"
                id="verification"
                name="verification"
                value={formData.verification}
                onChange={handleInputChange}
                className={`w-32 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.verification ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="?"
              />
              {errors.verification && <p className="text-red-500 text-sm mt-1">{errors.verification}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>ENVIAR SIMULAÇÃO</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;