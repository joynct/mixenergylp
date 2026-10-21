import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Send, Calculator } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

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
  // Mantidos para reativar os cards de investimento/retorno (hoje ocultos)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_investimento, setInvestimento] = useState('');
  const [economia, setEconomia] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_payback, setPayback] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  // Assinatura dos últimos dados enviados com sucesso (evita lead duplicado)
  const lastSentRef = useRef<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (!(parseFloat(formData.billValue) > 0)) newErrors.billValue = 'Valor da conta é obrigatório';
    if (!formData.installationType.trim()) newErrors.installationType = 'Tipo de instalação é obrigatório';
    if (!consent) newErrors.consent = 'É necessário aceitar para continuar';
    if (formData.verification !== '2') newErrors.verification = 'Resposta incorreta';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    if (submitting || !validateForm()) return;

    // 1. Envia os dados para o Netlify (que encaminha o lead por e-mail),
    //    exceto se forem idênticos ao último envio (ex.: cliquei em calcular de novo)
    const myForm = e.target as HTMLFormElement;
    const data = new FormData(myForm);
    const signature = new URLSearchParams(data as unknown as Record<string, string>).toString();

    if (signature !== lastSentRef.current) {
      setSubmitting(true);
      data.append('form-name', 'contact');

      fetch('/', {
        method: 'POST',
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
        .then((response) => {
          if (response.ok) {
            lastSentRef.current = signature;
          } else {
            console.error('Erro no envio para o Netlify:', response.status, response.statusText);
          }
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        })
        .finally(() => setSubmitting(false));
    }

    // 2. Coleta os valores para o cálculo
    const valorConta = parseFloat(data.get('billValue') as string);
    const estado = data.get('state') as string;
    const tipoInstalacao = data.get('installationType') as string;

    // 3. Executa os cálculos
    const dados = dadosEstados[estado];
    const tarifa = dados[tipoInstalacao as keyof EstadoData];
    const irradiacao = dados.irradiacao;
    const custo = custoPorWp[tipoInstalacao];
    const taxa = taxaDisponibilidade[tipoInstalacao];

    const consumoMensal = valorConta / tarifa;
    // Nunca negativo: contas abaixo da taxa mínima não geram economia
    const consumoCompensavel = Math.max(0, consumoMensal - taxa / tarifa);
    const potenciaNecessaria = consumoCompensavel / (irradiacao * 30 * fatorPerformance);
    const investimentoTotal = potenciaNecessaria * 1000 * custo;
    const economiaMensal = consumoCompensavel * tarifa;
    const paybackAnos = economiaMensal > 0 ? investimentoTotal / (economiaMensal * 12) : 0;

    setPotencia(formatNumber(potenciaNecessaria) + ' kWp');
    setInvestimento(formatCurrency(investimentoTotal));
    setEconomia(formatCurrency(economiaMensal));
    setPayback(formatNumber(paybackAnos) + ' anos');
    setShowResults(true);
  };

  const handleSendToWhatsapp = () => {
    const tipo =
      formData.installationType === 'residencial'
        ? 'Residencial'
        : formData.installationType === 'comercial'
        ? 'Comercial'
        : 'Industrial';

    const message = `Olá! Meu nome é ${formData.name} e gostaria de fazer uma simulação gratuita de energia solar!

Segue meus dados:
- Telefone: ${formData.phone}
- Cidade: ${formData.city}
- Estado: ${formData.state}
- Tipo de Instalação: ${tipo}
- Valor médio da conta de luz: ${formatCurrency(parseFloat(formData.billValue))}

Resultados da simulação:
- Potência Necessária: ${potencia}
- Economia Mensal Estimada: ${economia}`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
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
            
          {/* Este é o formulário visível que o usuário interage. */}
          <form
            name="contact" 
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleFormSubmission}
            className="bg-white rounded-lg p-8 text-gray-900"
          >
            <p className="hidden" aria-hidden="true">
              <label>
                Não preencha este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && <p id="name-error" role="alert" className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="text"
                  id="phone"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
                {errors.phone && <p id="phone-error" role="alert" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  id="city"
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Sua cidade"
                />
                {errors.city && <p id="city-error" role="alert" className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  Estado *
                </label>
                <select
                  id="state"
                  aria-invalid={!!errors.state}
                  aria-describedby={errors.state ? 'state-error' : undefined}
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
                {errors.state && <p id="state-error" role="alert" className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
              
              <div>
                <label htmlFor="billValue" className="block text-sm font-medium text-gray-700 mb-2">
                  Valor médio da conta de luz *
                </label>
                <input
                  type="number"
                  id="billValue"
                  aria-invalid={!!errors.billValue}
                  aria-describedby={errors.billValue ? 'billValue-error' : undefined}
                  name="billValue"
                  value={formData.billValue}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.billValue ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: 450"
                />
                {errors.billValue && <p id="billValue-error" role="alert" className="text-red-500 text-sm mt-1">{errors.billValue}</p>}
              </div>
              
              <div>
                <label htmlFor="installationType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de instalação *
                </label>
                <select
                  id="installationType"
                  aria-invalid={!!errors.installationType}
                  aria-describedby={errors.installationType ? 'installationType-error' : undefined}
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
                {errors.installationType && <p id="installationType-error" role="alert" className="text-red-500 text-sm mt-1">{errors.installationType}</p>}
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="verification" className="block text-sm font-medium text-gray-700 mb-2">
                1 + 1=?*
              </label>
              <input
                type="text"
                id="verification"
                  aria-invalid={!!errors.verification}
                  aria-describedby={errors.verification ? 'verification-error' : undefined}
                name="verification"
                value={formData.verification}
                onChange={handleInputChange}
                className={`w-32 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.verification ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="?"
              />
              {errors.verification && <p id="verification-error" role="alert" className="text-red-500 text-sm mt-1">{errors.verification}</p>}
            </div>
            
            <div className="mt-6">
              <label htmlFor="consent" className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  value="Sim"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                  }}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                  className="mt-1 h-4 w-4 flex-shrink-0"
                />
                <span>
                  Li e concordo com a{' '}
                  <a
                    href="/politica-privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Política de Privacidade
                  </a>{' '}
                  e autorizo a Mix Energy a entrar em contato pelo telefone/WhatsApp informado.
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" role="alert" className="text-red-500 text-sm mt-1">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="disabled:opacity-70 disabled:cursor-not-allowed w-full mt-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Calculator className="h-5 w-5" />
              <span>CALCULAR ECONOMIA</span>
            </button>
          </form>

          {/* Seção de resultados */}
          {showResults && (
            <div className="mt-8 p-8 bg-gradient-to-r from-[#74b9ff] to-[#0984e3] rounded-2xl text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">SUA SIMULAÇÃO ESTÁ PRONTA!</h3>
                <p>Confira o resultado e envie para o nosso Whatsapp para continuar o atendimento.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Potência Necessária</div>
                  <div className="text-3xl font-bold">{potencia}</div>
                </div>
               {/* <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Investimento Estimado</div>
                  <div className="text-3xl font-bold">{investimento}</div>
                </div> */}
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Economia Mensal Estimada</div>
                  <div className="text-3xl font-bold">{economia}</div>
                </div>
                {/* <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-5 rounded-xl border border-white/20">
                  <div className="text-xs uppercase opacity-80 tracking-wide">Retorno do Investimento</div>
                  <div className="text-3xl font-bold">{payback}</div>
                </div> */}
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