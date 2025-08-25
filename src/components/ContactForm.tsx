import React, { useState, FormEvent } from 'react';
import { Send, Calculator } from 'lucide-react';

// Interfaces para os tipos de dados
interface EstadoData {
  irradiacao: number;
  residencial: number;
  comercial: number;
  industrial: number;
}

interface DadosEstados {
  [key: string]: EstadoData;
}

// Base de dados da calculadora solar
const dadosEstados: DadosEstados = {
  'AC': { irradiacao: 4.8, residencial: 0.72, comercial: 0.68, industrial: 0.55 },
  'AL': { irradiacao: 5.6, residencial: 0.69, comercial: 0.65, industrial: 0.52 },
  'AP': { irradiacao: 4.9, residencial: 0.55, comercial: 0.52, industrial: 0.48 },
  'AM': { irradiacao: 4.7, residencial: 0.58, comercial: 0.55, industrial: 0.50 },
  'BA': { irradiacao: 5.8, residencial: 0.74, comercial: 0.70, industrial: 0.58 },
  'CE': { irradiacao: 5.9, residencial: 0.67, comercial: 0.63, industrial: 0.51 },
  'DF': { irradiacao: 5.3, residencial: 0.65, comercial: 0.62, industrial: 0.48 },
  'ES': { irradiacao: 5.0, residencial: 0.63, comercial: 0.60, industrial: 0.47 },
  'GO': { irradiacao: 5.2, residencial: 0.71, comercial: 0.67, industrial: 0.54 },
  'MA': { irradiacao: 5.4, residencial: 0.66, comercial: 0.62, industrial: 0.49 },
  'MT': { irradiacao: 5.4, residencial: 0.73, comercial: 0.69, industrial: 0.56 },
  'MS': { irradiacao: 5.1, residencial: 0.68, comercial: 0.64, industrial: 0.51 },
  'MG': { irradiacao: 5.1, residencial: 0.70, comercial: 0.66, industrial: 0.53 },
  'PA': { irradiacao: 4.8, residencial: 0.61, comercial: 0.57, industrial: 0.45 },
  'PB': { irradiacao: 5.7, residencial: 0.68, comercial: 0.64, industrial: 0.51 },
  'PR': { irradiacao: 4.6, residencial: 0.66, comercial: 0.62, industrial: 0.49 },
  'PE': { irradiacao: 5.7, residencial: 0.71, comercial: 0.67, industrial: 0.54 },
  'PI': { irradiacao: 5.8, residencial: 0.64, comercial: 0.60, industrial: 0.47 },
  'RJ': { irradiacao: 4.9, residencial: 0.75, comercial: 0.71, industrial: 0.58 },
  'RN': { irradiacao: 6.0, residencial: 0.67, comercial: 0.63, industrial: 0.50 },
  'RS': { irradiacao: 4.3, residencial: 0.69, comercial: 0.65, industrial: 0.52 },
  'RO': { irradiacao: 4.9, residencial: 0.62, comercial: 0.58, industrial: 0.45 },
  'RR': { irradiacao: 5.1, residencial: 0.56, comercial: 0.53, industrial: 0.49 },
  'SC': { irradiacao: 4.4, residencial: 0.64, comercial: 0.60, industrial: 0.47 },
  'SP': { irradiacao: 4.8, residencial: 0.67, comercial: 0.63, industrial: 0.50 },
  'SE': { irradiacao: 5.6, residencial: 0.70, comercial: 0.66, industrial: 0.53 },
  'TO': { irradiacao: 5.3, residencial: 0.65, comercial: 0.61, industrial: 0.48 }
};

const custoPorWp: { [key: string]: number } = {
  'residencial': 4.50,
  'comercial': 4.00,
  'industrial': 3.50
};

const taxaDisponibilidade: { [key: string]: number } = {
  'residencial': 50,
  'comercial': 100,
  'industrial': 200
};

const fatorPerformance = 0.80;

// Funções de formatação
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const formatNumber = (value: number, decimals = 1): string => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
};

const formatTelefone = (value: string): string => {
  const cleanedValue = value.replace(/\D/g, '');
  if (cleanedValue.length <= 10) {
    return cleanedValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
};

const ContactForm = () => {
  // Estados do formulário e de validação
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    state: '',
    billValue: '',
    installationType: '',
    verification: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Estados para os resultados da calculadora
  const [potencia, setPotencia] = useState('');
  const [investimento, setInvestimento] = useState('');
  const [economia, setEconomia] = useState('');
  const [payback, setPayback] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formatted = formatTelefone(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Telefone inválido';
    if (!formData.city.trim()) newErrors.city = 'Cidade é obrigatória';
    if (!formData.state.trim()) newErrors.state = 'Estado é obrigatório';
    if (!formData.billValue.trim()) newErrors.billValue = 'Valor da conta é obrigatório';
    if (!formData.installationType.trim()) newErrors.installationType = 'Tipo de instalação é obrigatório';
    if (formData.verification !== '2') newErrors.verification = 'Resposta incorreta';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 1. Envia os dados para o Netlify
      const myForm = e.target as HTMLFormElement;
      const formData = new FormData(myForm);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })
      .then(() => console.log("Formulario enviado para o Netlify com sucesso!"))
      .catch((error) => console.error("Erro ao enviar para o Netlify:", error));
  
      // 2. Coleta os valores para o cálculo
      const valorConta = parseFloat(formData.get('billValue') as string);
      const estado = formData.get('state') as string;
      const tipoInstalacao = formData.get('installationType') as string;
  
      // 3. Executa os cálculos (mesma lógica de antes)
      const dados = dadosEstados[estado];
      const tarifa = dados[tipoInstalacao as keyof EstadoData];
      const irradiacao = dados.irradiacao;
      const custo = custoPorWp[tipoInstalacao];
      const taxa = taxaDisponibilidade[tipoInstalacao];
  
      const consumoMensal = valorConta / tarifa;
      const consumoCompensavel = consumoMensal - (taxa / tarifa);
      const potenciaNecessaria = consumoCompensavel / (irradiacao * 30 * fatorPerformance);
      const investimentoTotal = potenciaNecessaria * 1000 * custo;
      const economiaMensal = consumoCompensavel * tarifa;
      const paybackAnos = investimentoTotal / (economiaMensal * 12);
  
      setPotencia(formatNumber(potenciaNecessaria) + ' kWp');
      setInvestimento(formatCurrency(investimentoTotal));
      setEconomia(formatCurrency(economiaMensal));
      setPayback(formatNumber(paybackAnos) + ' anos');
      setShowResults(true);
    }
  };

  const handleSendToWhatsapp = () => {
    const message = `Olá! Gostaria de fazer uma simulação gratuita de energia solar.
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Estado: ${formData.state}
Valor médio da conta: R$ ${formData.billValue}
Tipo de Instalação: ${formData.installationType === 'residencial' ? 'Residencial' : formData.installationType === 'comercial' ? 'Comercial' : 'Industrial'}

---
Resultados da simulação:
Potência Necessária: ${potencia}
Investimento Estimado: ${investimento}
Economia Mensal: ${economia}
Payback Estimado: ${payback}`;
    
    const whatsappUrl = `https://wa.me/5564992170512?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact-form" className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
      {/* IMPORTANTE: Este é o formulário HTML que o Netlify detecta. */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <input type="text" name="city" />
        <input type="text" name="state" />
        <input type="text" name="billValue" />
        <input type="text" name="installationType" />
        <input type="text" name="verification" />
      </form>
        
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
            
          {/* Este é o formulário visível que o usuário interage. */}
          <form
            name="contact" 
            method="POST"
            data-netlify="true"
            onSubmit={handleFormSubmission}
            className="bg-white rounded-lg p-8 text-gray-900"
          >
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
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  Estado *
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione seu estado</option>
                  {Object.keys(dadosEstados).map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
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
              
              <div>
                <label htmlFor="installationType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de instalação *
                </label>
                <select
                  id="installationType"
                  name="installationType"
                  value={formData.installationType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.installationType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="industrial">Industrial</option>
                </select>
                {errors.installationType && <p className="text-red-500 text-sm mt-1">{errors.installationType}</p>}
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
              <Calculator className="h-5 w-5" />
              <span>CALCULAR ECONOMIA</span>
            </button>
          </form>

          {/* Seção de resultados - permanece igual */}
          {showResults && (
            <div className="mt-8 p-8 bg-gradient-to-r from-[#74b9ff] to-[#0984e3] rounded-2xl text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Sua simulação está pronta!</h3>
                <p>Confira os resultados e envie para o nosso WhatsApp para continuar</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Potência Necessária</div>
                  <div className="text-3xl font-bold">{potencia}</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Investimento Estimado</div>
                  <div className="text-3xl font-bold">{investimento}</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Economia Mensal</div>
                  <div className="text-3xl font-bold">{economia}</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Retorno do Investimento</div>
                  <div className="text-3xl font-bold">{payback}</div>
                </div>
              </div>
              <button
                onClick={handleSendToWhatsapp}
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>ENVIAR VIA WHATSAPP</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;