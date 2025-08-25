import React from 'react';
import { Shield, Mail, Phone, MapPin, Calendar, FileText, Users, Lock, Eye, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-950 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao início</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-950 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-600">
            Mix Energy Solar - Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              1. Informações Gerais
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Mix Energy Solar, pessoa jurídica de direito privado, com sede na Av. Pedro Ludovico Teixeira, 16 - lt07/08 - parte c, 
              Rio Verde - GO, CEP 75906-270, doravante denominada "Mix Energy" ou "Empresa", 
              está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, prospects e visitantes do site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos 
              suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), 
              o Marco Civil da Internet (Lei nº 12.965/2014) e demais regulamentações aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2" />
              2. Dados Pessoais Coletados
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-950 mb-3">2.1 Dados Fornecidos Voluntariamente</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-3">Coletamos os seguintes dados quando você preenche nossos formulários de simulação:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Nome completo:</strong> Para identificação e personalização do atendimento</li>
                  <li><strong>Número de telefone (WhatsApp):</strong> Para contato direto e envio de propostas comerciais</li>
                  <li><strong>Cidade de residência:</strong> Para verificar área de atendimento e calcular logística de instalação</li>
                  <li><strong>Valor médio da conta de energia elétrica:</strong> Para cálculo preciso de simulação de economia e dimensionamento do sistema solar</li>
                  <li><strong>Endereço completo:</strong> Durante o processo de orçamento detalhado e agendamento de instalação</li>
                  <li><strong>Dados de consumo energético:</strong> Histórico de consumo para projeto personalizado</li>
                  <li><strong>Características do imóvel:</strong> Tipo de telhado, área disponível, orientação solar</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-950 mb-3">2.2 Dados Coletados Automaticamente</h3>
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-gray-700 mb-3">Nosso site coleta automaticamente através de cookies e tecnologias similares:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, resolução de tela</li>
                  <li><strong>Dados de interação:</strong> Páginas visitadas, tempo de permanência, cliques em botões e links</li>
                  <li><strong>Dados de localização:</strong> Localização aproximada baseada no IP para personalização regional</li>
                  <li><strong>Dados de origem:</strong> Como você chegou ao nosso site (Google, redes sociais, links diretos)</li>
                  <li><strong>Dados de dispositivo:</strong> Modelo do dispositivo, preferências de idioma, fuso horário</li>
                  <li><strong>Dados de formulário:</strong> Interações com formulários de contato e simulação</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-950 mb-3">2.3 Dados de Terceiros</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700 mb-3">Podemos receber dados de:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>WhatsApp Business:</strong> Dados de conversas e interações via WhatsApp</li>
                  <li><strong>Google Analytics:</strong> Dados de comportamento e navegação no site</li>
                  <li><strong>Redes sociais:</strong> Quando você interage com nossos perfis ou anúncios</li>
                  <li><strong>Parceiros comerciais:</strong> Indicações e referências de clientes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              3. Finalidades do Tratamento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos seus dados pessoais exclusivamente para as seguintes finalidades legítimas:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-blue-950 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Prestação de Serviços de Energia Solar
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Realizar simulações personalizadas de economia de energia</li>
                  <li>• Elaborar propostas comerciais e orçamentos detalhados</li>
                  <li>• Executar projetos de instalação de sistemas fotovoltaicos</li>
                  <li>• Prestar suporte técnico e manutenção</li>
                  <li>• Processar pagamentos e financiamentos</li>
                  <li>• Emitir documentos fiscais e contratuais</li>
                  <li>• Acompanhar performance dos sistemas instalados</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-blue-950 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Comunicação e Relacionamento
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Responder solicitações via WhatsApp e formulários</li>
                  <li>• Enviar informações sobre economia de energia</li>
                  <li>• Comunicar atualizações de projetos</li>
                  <li>• Marketing educativo sobre energia solar</li>
                  <li>• Pesquisas de satisfação pós-instalação</li>
                  <li>• Suporte ao cliente e pós-venda</li>
                  <li>• Notificações sobre manutenção preventiva</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-blue-950 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  Melhorias e Análises
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Analisar o desempenho do site e formulários</li>
                  <li>• Melhorar a experiência do usuário</li>
                  <li>• Desenvolver novos produtos e serviços</li>
                  <li>• Realizar estudos de mercado de energia solar</li>
                  <li>• Prevenir fraudes e garantir segurança</li>
                  <li>• Otimizar campanhas de marketing digital</li>
                  <li>• Análise de ROI dos clientes</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-blue-950 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Obrigações Legais e Regulatórias
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cumprir determinações da ANEEL</li>
                  <li>• Atender órgãos reguladores do setor elétrico</li>
                  <li>• Manter registros contábeis e fiscais</li>
                  <li>• Exercer direitos em processos judiciais</li>
                  <li>• Proteger direitos e segurança da empresa</li>
                  <li>• Compliance com normas do setor energético</li>
                  <li>• Relatórios para órgãos ambientais</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              4. Base Legal para o Tratamento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais previstas na LGPD:
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="font-semibold text-green-800 mb-2">Consentimento (Art. 7º, I)</h4>
                <p className="text-green-700 text-sm">Para comunicações de marketing, cookies não essenciais, compartilhamento com parceiros para campanhas específicas e uso de dados para desenvolvimento de novos produtos.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Execução de Contrato (Art. 7º, V)</h4>
                <p className="text-blue-700 text-sm">Para prestação dos serviços de energia solar, elaboração de propostas, instalação de sistemas, processamento de pagamentos e cumprimento de obrigações contratuais.</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Interesse Legítimo (Art. 7º, IX)</h4>
                <p className="text-purple-700 text-sm">Para melhorar nossos serviços, garantir segurança do site, realizar análises estatísticas, prevenção de fraudes e otimização de processos comerciais.</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Cumprimento de Obrigação Legal (Art. 7º, II)</h4>
                <p className="text-orange-700 text-sm">Para atender exigências da ANEEL, órgãos fiscais, ambientais, judiciais e demais regulamentações do setor de energia elétrica.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seus dados pessoais podem ser compartilhados nas seguintes situações, sempre respeitando os princípios da LGPD:
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Prestadores de Serviços Especializados</h4>
                <p className="text-yellow-700 text-sm mb-2">Compartilhamos dados com empresas parceiras essenciais para nossos serviços:</p>
                <ul className="text-yellow-700 text-sm list-disc list-inside space-y-1">
                  <li>Empresas de logística para transporte de equipamentos</li>
                  <li>Processadores de pagamento e instituições financeiras</li>
                  <li>Provedores de hospedagem e tecnologia (AWS, Google Cloud)</li>
                  <li>Empresas de marketing digital (apenas com consentimento)</li>
                  <li>Fornecedores de equipamentos fotovoltaicos</li>
                  <li>Empresas de instalação e manutenção terceirizadas</li>
                  <li>Concessionárias de energia elétrica (para conexão à rede)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Obrigações Legais e Regulatórias</h4>
                <p className="text-red-700 text-sm">Quando exigido por lei, ordem judicial, ANEEL, órgãos ambientais ou outras autoridades competentes do setor energético.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Operações Societárias</h4>
                <p className="text-blue-700 text-sm">Em caso de fusão, aquisição, venda de ativos ou reestruturação da empresa, sempre com notificação prévia aos titulares.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Consentimento Específico</h4>
                <p className="text-green-700 text-sm">Com seu consentimento explícito para finalidades específicas como participação em programas de incentivo governamentais ou pesquisas de mercado.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              6. Armazenamento e Segurança
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Período de Retenção</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-800">Dados de Clientes Ativos</h4>
                    <p className="text-sm text-gray-600">Durante a relação comercial + 5 anos (conforme Código Civil) + período de garantia dos equipamentos</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-800">Dados de Prospects</h4>
                    <p className="text-sm text-gray-600">2 anos após último contato ou até revogação do consentimento</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-800">Cookies e Logs de Navegação</h4>
                    <p className="text-sm text-gray-600">Conforme configurações do usuário (máximo 12 meses para analytics)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-800">Dados Fiscais e Contratuais</h4>
                    <p className="text-sm text-gray-600">Conforme legislação tributária e regulamentações da ANEEL (mínimo 5 anos)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-800">Dados de Performance dos Sistemas</h4>
                    <p className="text-sm text-gray-600">Durante toda a vida útil do sistema solar (25+ anos) para suporte técnico</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Medidas de Segurança</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-medium text-blue-800">Técnicas</h4>
                    <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                      <li>Criptografia SSL/TLS 256-bit</li>
                      <li>Firewalls e sistemas antivírus atualizados</li>
                      <li>Backups automáticos diários</li>
                      <li>Monitoramento de segurança 24/7</li>
                      <li>Autenticação de dois fatores</li>
                      <li>Logs de auditoria detalhados</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-medium text-green-800">Administrativas</h4>
                    <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                      <li>Controle de acesso baseado em funções</li>
                      <li>Treinamento regular da equipe em LGPD</li>
                      <li>Políticas internas de segurança</li>
                      <li>Auditoria trimestral de segurança</li>
                      <li>Plano de resposta a incidentes</li>
                      <li>Acordos de confidencialidade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              7. Seus Direitos como Titular de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conforme a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Confirmação e Acesso</h4>
                    <p className="text-sm text-gray-600">Confirmar a existência de tratamento e acessar todos os seus dados que possuímos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Correção</h4>
                    <p className="text-sm text-gray-600">Corrigir dados incompletos, inexatos ou desatualizados em nossos sistemas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Eliminação</h4>
                    <p className="text-sm text-gray-600">Excluir dados desnecessários, excessivos ou tratados em desconformidade com a LGPD</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Portabilidade</h4>
                    <p className="text-sm text-gray-600">Transferir dados para outro fornecedor de serviços de energia solar</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Anonimização/Bloqueio</h4>
                    <p className="text-sm text-gray-600">Solicitar anonimização ou bloqueio temporário de dados pessoais</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Oposição</h4>
                    <p className="text-sm text-gray-600">Opor-se ao tratamento realizado com base no interesse legítimo da empresa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Revogação do Consentimento</h4>
                    <p className="text-sm text-gray-600">Revogar consentimento para marketing e cookies a qualquer momento</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-950">Informações sobre Compartilhamento</h4>
                    <p className="text-sm text-gray-600">Obter informações detalhadas sobre entidades com quem seus dados são compartilhados</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-950 mb-3">Como Exercer Seus Direitos</h3>
              <p className="text-blue-800 mb-3">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais disponíveis na seção de contato. 
                Responderemos sua solicitação em até 15 dias corridos, podendo ser prorrogado por mais 15 dias mediante justificativa expressa.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Importante:</strong> Alguns direitos podem ter limitações legais, especialmente para dados necessários ao cumprimento de obrigações contratuais ou regulatórias do setor energético. Avaliaremos cada solicitação individualmente e informaremos sobre eventuais impossibilidades de atendimento.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              8. Cookies e Tecnologias Similares
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação e personalizar nossos serviços:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  Cookies Estritamente Necessários
                </h4>
                <p className="text-sm text-green-700 mb-2">Essenciais para o funcionamento do site. Não podem ser desabilitados.</p>
                <ul className="text-xs text-green-600 list-disc list-inside space-y-1">
                  <li>Cookies de sessão e navegação</li>
                  <li>Cookies de segurança e prevenção de fraudes</li>
                  <li>Cookies de funcionalidade dos formulários</li>
                  <li>Cookies de consentimento de privacidade</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  Cookies de Desempenho e Análise
                </h4>
                <p className="text-sm text-blue-700 mb-2">Coletam informações sobre como você usa o site (requer consentimento).</p>
                <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                  <li>Google Analytics para análise de tráfego e comportamento</li>
                  <li>Cookies de monitoramento de performance do site</li>
                  <li>Heatmaps e análise de interação com formulários</li>
                  <li>Métricas de conversão e simulações realizadas</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                  Cookies de Marketing e Publicidade
                </h4>
                <p className="text-sm text-purple-700 mb-2">Utilizados para personalizar anúncios sobre energia solar (requer consentimento).</p>
                <ul className="text-xs text-purple-600 list-disc list-inside space-y-1">
                  <li>Facebook Pixel para remarketing de energia solar</li>
                  <li>Google Ads para campanhas direcionadas</li>
                  <li>Cookies de redes sociais (Instagram, Facebook)</li>
                  <li>Pixels de conversão para WhatsApp Business</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Gerenciamento de Cookies</h3>
              <p className="text-sm text-yellow-700">
                Você pode gerenciar suas preferências de cookies através do banner de consentimento em nosso site 
                ou nas configurações do seu navegador. A desabilitação de cookies pode afetar algumas funcionalidades, 
                como simulações personalizadas e formulários de contato.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              9. Transferência Internacional de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. Quando isso ocorrer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Garantimos que o país de destino oferece grau de proteção adequado aos dados pessoais</li>
              <li>Utilizamos cláusulas contratuais padrão aprovadas pela ANPD</li>
              <li>Obtemos consentimento específico quando necessário para transferências sensíveis</li>
              <li>Implementamos salvaguardas técnicas e organizacionais apropriadas</li>
              <li>Limitamos as transferências ao mínimo necessário para prestação dos serviços</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Principais Transferências</h4>
              <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                <li>Google Analytics (Estados Unidos) - com adequação GDPR</li>
                <li>Meta/Facebook (Estados Unidos) - com cláusulas contratuais padrão</li>
                <li>Serviços de hospedagem em nuvem com certificação ISO 27001</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              10. Incidentes de Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares de dados:
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Comunicaremos à Autoridade Nacional de Proteção de Dados (ANPD) em até 72 horas</li>
                <li>Notificaremos os titulares afetados quando o incidente puder acarretar alto risco aos direitos e liberdades</li>
                <li>Implementaremos medidas imediatas para conter e remediar o incidente</li>
                <li>Documentaremos detalhadamente o ocorrido e as medidas adotadas</li>
                <li>Realizaremos análise de causa raiz para prevenir futuros incidentes</li>
                <li>Ofereceremos suporte gratuito aos titulares afetados</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              11. Contato e Exercício de Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para exercer seus direitos, esclarecer dúvidas sobre esta política ou reportar incidentes de segurança:
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-950 mb-4">Encarregado de Proteção de Dados (DPO)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-950">E-mail Principal</p>
                      <p className="text-sm text-gray-600">privacidade@mixenergysolar.com.br</p>
                      <p className="text-sm text-gray-600">dpo@mixenergysolar.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-950">WhatsApp/Telefone</p>
                      <p className="text-sm text-gray-600">(64) 99217-0512</p>
                      <p className="text-xs text-gray-500">Horário: Segunda a Sexta, 8h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-950">Endereço Físico</p>
                      <p className="text-sm text-gray-600">
                        Av. Pedro Ludovico Teixeira, 16<br />
                        lt07/08 - parte c<br />
                        Rio Verde - GO, 75906-270
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Prazo de Resposta e Processo</h4>
              <p className="text-sm text-yellow-700 mb-2">
                Responderemos suas solicitações em até 15 (quinze) dias corridos, podendo ser prorrogado por igual período 
                mediante justificativa expressa. Para solicitações complexas, informaremos sobre o prazo adicional necessário.
              </p>
              <p className="text-xs text-yellow-600">
                <strong>Documentação necessária:</strong> Para garantir a segurança, poderemos solicitar documentos que comprovem sua identidade antes de processar solicitações relacionadas aos seus dados pessoais.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              12. Alterações na Política de Privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas, 
              serviços, tecnologias ou exigências legais. Quando isso ocorrer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Publicaremos a versão atualizada em nosso site com a nova data de vigência</li>
              <li>Destacaremos as principais alterações no topo da política</li>
              <li>Para mudanças substanciais, notificaremos por e-mail, WhatsApp ou através de banner no site</li>
              <li>Manteremos versões anteriores arquivadas para consulta por período mínimo de 5 anos</li>
              <li>Solicitaremos novo consentimento quando necessário para novas finalidades</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>Recomendação:</strong> Revise periodicamente esta política para se manter informado sobre 
                como protegemos suas informações pessoais. Alterações entram em vigor imediatamente após publicação, 
                exceto quando especificado prazo diferente.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              13. Direitos Específicos do Setor de Energia Solar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como empresa do setor de energia solar, respeitamos direitos específicos relacionados aos dados de consumo energético:
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Dados de Consumo Energético</h4>
                <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                  <li>Você tem direito de acessar todos os dados de consumo que utilizamos para simulações</li>
                  <li>Pode solicitar correção de dados de consumo incorretos que afetem cálculos de economia</li>
                  <li>Tem direito à portabilidade dos dados de performance do seu sistema solar</li>
                  <li>Pode solicitar relatórios detalhados de economia gerada pelo seu sistema</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Transparência em Simulações</h4>
                <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                  <li>Direito de conhecer todos os parâmetros utilizados em simulações de economia</li>
                  <li>Acesso às metodologias de cálculo de dimensionamento do sistema</li>
                  <li>Informações sobre fontes de dados climáticos e de irradiação solar utilizados</li>
                  <li>Explicação detalhada sobre projeções de economia apresentadas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              14. Legislação Aplicável e Foro
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Privacidade é regida pelas leis brasileiras, especialmente:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)</li>
              <li>Marco Civil da Internet (Lei nº 12.965/2014)</li>
              <li>Código de Defesa do Consumidor (Lei nº 8.078/1990)</li>
              <li>Código Civil Brasileiro (Lei nº 10.406/2002)</li>
              <li>Regulamentações da ANEEL aplicáveis ao setor de energia elétrica</li>
              <li>Lei de Acesso à Informação (Lei nº 12.527/2011)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Fica eleito o foro da Comarca de Rio Verde - GO para dirimir quaisquer controvérsias 
              decorrentes desta Política de Privacidade, renunciando as partes a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              15. Disposições Finais
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Vigência</h4>
                <p className="text-sm text-gray-700">
                  Esta Política de Privacidade entra em vigor na data de sua publicação e permanece válida por prazo indeterminado, 
                  até que seja substituída por nova versão.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Interpretação</h4>
                <p className="text-sm text-gray-700">
                  Em caso de dúvidas sobre a interpretação desta política, prevalecerá sempre a interpretação mais favorável 
                  aos direitos dos titulares de dados pessoais, em conformidade com os princípios da LGPD.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Nulidade Parcial</h4>
                <p className="text-sm text-gray-700">
                  Caso qualquer disposição desta política seja considerada inválida ou inexequível, 
                  as demais disposições permanecerão em pleno vigor e efeito.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Dúvidas sobre nossa Política de Privacidade?
            </h3>
            <p className="text-lg mb-6">
              Nossa equipe especializada está pronta para esclarecer qualquer questão sobre o tratamento de seus dados pessoais 
              e como protegemos sua privacidade em todos os serviços de energia solar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5564992170512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Falar Conosco</span>
              </a>
              <a
                href="mailto:privacidade@mixenergysolar.com.br"
                className="inline-flex items-center space-x-2 bg-white/20 text-white border border-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Enviar E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;