import React from 'react';
import { Cookie, Mail, Phone, MapPin, Settings, Eye, Shield, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
          <Cookie className="h-16 w-16 text-blue-950 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-gray-600">
            Mix Energy Solar - Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Cookie className="h-6 w-6 mr-2" />
              1. O que são Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) 
              quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação, lembrar suas preferências 
              e fornecer funcionalidades personalizadas.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-blue-950 mb-3">Como Funcionam os Cookies</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Armazenamento</h4>
                  <p className="text-blue-700">Os cookies são salvos localmente no seu navegador e contêm informações específicas sobre sua visita ao nosso site.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Recuperação</h4>
                  <p className="text-blue-700">Quando você retorna ao site, os cookies permitem que reconheçamos seu dispositivo e suas preferências.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Expiração</h4>
                  <p className="text-blue-700">Cada cookie tem um prazo de validade específico, após o qual é automaticamente removido.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Controle</h4>
                  <p className="text-blue-700">Você pode gerenciar ou excluir cookies através das configurações do seu navegador.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Settings className="h-6 w-6 mr-2" />
              2. Tipos de Cookies que Utilizamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Utilizamos diferentes tipos de cookies em nosso site, cada um com finalidades específicas 
              para melhorar sua experiência e nossos serviços de energia solar:
            </p>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  Cookies Estritamente Necessários
                </h3>
                <p className="text-green-700 mb-4 text-sm">
                  Estes cookies são essenciais para o funcionamento básico do site e não podem ser desabilitados. 
                  Eles não armazenam informações pessoais identificáveis.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies de Sessão</h4>
                    <ul className="text-xs text-green-600 list-disc list-inside space-y-1">
                      <li>Manter você logado durante a navegação</li>
                      <li>Preservar dados de formulários em andamento</li>
                      <li>Garantir segurança da sessão</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies de Segurança</h4>
                    <ul className="text-xs text-green-600 list-disc list-inside space-y-1">
                      <li>Prevenir ataques de segurança</li>
                      <li>Detectar atividades suspeitas</li>
                      <li>Proteger formulários contra spam</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies de Funcionalidade</h4>
                    <ul className="text-xs text-green-600 list-disc list-inside space-y-1">
                      <li>Lembrar preferências de idioma</li>
                      <li>Manter configurações de acessibilidade</li>
                      <li>Preservar dados de simulações</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies de Consentimento</h4>
                    <ul className="text-xs text-green-600 list-disc list-inside space-y-1">
                      <li>Armazenar suas preferências de cookies</li>
                      <li>Lembrar consentimentos dados</li>
                      <li>Evitar exibir banners repetidamente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                  Cookies de Performance e Análise
                </h3>
                <p className="text-blue-700 mb-4 text-sm">
                  Estes cookies coletam informações sobre como você usa nosso site, ajudando-nos a melhorar 
                  a experiência do usuário e otimizar nossos serviços. <strong>Requerem seu consentimento.</strong>
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Google Analytics</h4>
                    <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                      <li>Analisar tráfego e comportamento dos usuários</li>
                      <li>Identificar páginas mais visitadas</li>
                      <li>Medir tempo de permanência no site</li>
                      <li>Entender jornada do usuário</li>
                    </ul>
                    <p className="text-xs text-blue-500 mt-2"><strong>Duração:</strong> Até 24 meses</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Hotjar (Heatmaps)</h4>
                    <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                      <li>Mapas de calor de interação</li>
                      <li>Gravações de sessões (anônimas)</li>
                      <li>Análise de formulários</li>
                      <li>Feedback de usuários</li>
                    </ul>
                    <p className="text-xs text-blue-500 mt-2"><strong>Duração:</strong> Até 12 meses</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Cookies de Performance</h4>
                    <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                      <li>Monitorar velocidade de carregamento</li>
                      <li>Detectar erros técnicos</li>
                      <li>Otimizar performance do site</li>
                      <li>Melhorar experiência mobile</li>
                    </ul>
                    <p className="text-xs text-blue-500 mt-2"><strong>Duração:</strong> Até 6 meses</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Análise de Conversões</h4>
                    <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
                      <li>Medir eficácia de simulações</li>
                      <li>Analisar formulários de contato</li>
                      <li>Otimizar processo de orçamento</li>
                      <li>Melhorar taxa de conversão</li>
                    </ul>
                    <p className="text-xs text-blue-500 mt-2"><strong>Duração:</strong> Até 12 meses</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mr-3"></div>
                  Cookies de Marketing e Publicidade
                </h3>
                <p className="text-purple-700 mb-4 text-sm">
                  Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias sobre energia solar. 
                  <strong>Requerem seu consentimento explícito.</strong>
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Facebook Pixel</h4>
                    <ul className="text-xs text-purple-600 list-disc list-inside space-y-1">
                      <li>Remarketing para visitantes do site</li>
                      <li>Criação de audiências similares</li>
                      <li>Otimização de campanhas no Facebook/Instagram</li>
                      <li>Medição de conversões</li>
                    </ul>
                    <p className="text-xs text-purple-500 mt-2"><strong>Duração:</strong> Até 180 dias</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Google Ads</h4>
                    <ul className="text-xs text-purple-600 list-disc list-inside space-y-1">
                      <li>Remarketing no Google e parceiros</li>
                      <li>Anúncios personalizados sobre energia solar</li>
                      <li>Otimização de campanhas de busca</li>
                      <li>Medição de ROI publicitário</li>
                    </ul>
                    <p className="text-xs text-purple-500 mt-2"><strong>Duração:</strong> Até 540 dias</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">WhatsApp Business</h4>
                    <ul className="text-xs text-purple-600 list-disc list-inside space-y-1">
                      <li>Rastreamento de cliques no botão WhatsApp</li>
                      <li>Otimização de campanhas de WhatsApp</li>
                      <li>Análise de conversões via WhatsApp</li>
                      <li>Personalização de mensagens</li>
                    </ul>
                    <p className="text-xs text-purple-500 mt-2"><strong>Duração:</strong> Até 90 dias</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Redes Sociais</h4>
                    <ul className="text-xs text-purple-600 list-disc list-inside space-y-1">
                      <li>Botões de compartilhamento social</li>
                      <li>Integração com Instagram</li>
                      <li>Widgets de redes sociais</li>
                      <li>Análise de engajamento social</li>
                    </ul>
                    <p className="text-xs text-purple-500 mt-2"><strong>Duração:</strong> Até 365 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2" />
              3. Finalidades Específicas dos Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cada categoria de cookie tem finalidades específicas para melhorar sua experiência com energia solar:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-3">Melhorar Simulações</h3>
                  <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                    <li>Lembrar dados inseridos em simulações anteriores</li>
                    <li>Personalizar cálculos baseados na sua região</li>
                    <li>Otimizar formulários de orçamento</li>
                    <li>Sugerir produtos adequados ao seu perfil</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-3">Análise de Comportamento</h3>
                  <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                    <li>Entender quais informações são mais relevantes</li>
                    <li>Identificar dúvidas frequentes sobre energia solar</li>
                    <li>Melhorar navegação e usabilidade</li>
                    <li>Otimizar conteúdo educativo</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-3">Marketing Personalizado</h3>
                  <ul className="text-sm text-purple-700 list-disc list-inside space-y-1">
                    <li>Mostrar anúncios relevantes sobre energia solar</li>
                    <li>Evitar anúncios repetitivos ou irrelevantes</li>
                    <li>Segmentar campanhas por interesse e região</li>
                    <li>Medir eficácia de campanhas educativas</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-3">Suporte ao Cliente</h3>
                  <ul className="text-sm text-orange-700 list-disc list-inside space-y-1">
                    <li>Facilitar contato via WhatsApp</li>
                    <li>Personalizar atendimento baseado no histórico</li>
                    <li>Agilizar processo de orçamento</li>
                    <li>Melhorar experiência pós-venda</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Settings className="h-6 w-6 mr-2" />
              4. Como Gerenciar seus Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você tem controle total sobre os cookies utilizados em nosso site. Pode aceitar, recusar ou gerenciar 
              suas preferências a qualquer momento:
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Banner de Consentimento</h3>
                <p className="text-blue-700 mb-4 text-sm">
                  Quando você visita nosso site pela primeira vez, exibimos um banner de consentimento onde você pode:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-medium text-blue-800 mb-2">Aceitar Todos</h4>
                    <p className="text-xs text-blue-600">Permite todos os tipos de cookies para experiência completa</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-medium text-blue-800 mb-2">Apenas Necessários</h4>
                    <p className="text-xs text-blue-600">Aceita apenas cookies essenciais para funcionamento básico</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-medium text-blue-800 mb-2">Personalizar</h4>
                    <p className="text-xs text-blue-600">Escolhe especificamente quais categorias aceitar</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Configurações do Navegador</h3>
                <p className="text-green-700 mb-4 text-sm">
                  Você também pode gerenciar cookies diretamente nas configurações do seu navegador:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-1">Google Chrome</h4>
                      <p className="text-xs text-green-600">Configurações → Privacidade e segurança → Cookies</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-1">Mozilla Firefox</h4>
                      <p className="text-xs text-green-600">Opções → Privacidade e Segurança → Cookies</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-1">Safari</h4>
                      <p className="text-xs text-green-600">Preferências → Privacidade → Cookies</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-1">Microsoft Edge</h4>
                      <p className="text-xs text-green-600">Configurações → Privacidade → Cookies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Impacto da Desabilitação</h3>
                <p className="text-yellow-700 mb-4 text-sm">
                  A desabilitação de cookies pode afetar algumas funcionalidades do site:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Cookies Necessários</h4>
                    <ul className="text-xs text-yellow-600 list-disc list-inside space-y-1">
                      <li>Não podem ser desabilitados</li>
                      <li>Essenciais para funcionamento básico</li>
                      <li>Não afetam privacidade</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Outros Cookies</h4>
                    <ul className="text-xs text-yellow-600 list-disc list-inside space-y-1">
                      <li>Simulações podem não salvar dados</li>
                      <li>Experiência menos personalizada</li>
                      <li>Anúncios menos relevantes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              5. Cookies de Terceiros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Alguns cookies em nosso site são definidos por serviços de terceiros que utilizamos para melhorar 
              nossos serviços de energia solar:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-950 mb-4">Principais Terceiros</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-800">Google (Analytics, Ads)</h4>
                      <p className="text-sm text-gray-600 mb-2">Análise de tráfego e publicidade direcionada</p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                        Ver Política de Privacidade do Google
                      </a>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-800">Meta (Facebook, Instagram)</h4>
                      <p className="text-sm text-gray-600 mb-2">Remarketing e análise de campanhas sociais</p>
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline">
                        Ver Política de Privacidade do Meta
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-800">Hotjar</h4>
                      <p className="text-sm text-gray-600 mb-2">Análise de comportamento e heatmaps</p>
                      <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline">
                        Ver Política de Privacidade do Hotjar
                      </a>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">WhatsApp Business</h4>
                      <p className="text-sm text-gray-600 mb-2">Integração e análise de conversas</p>
                      <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">
                        Ver Política de Privacidade do WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Importante sobre Terceiros</h4>
                <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
                  <li>Cada terceiro tem sua própria política de privacidade</li>
                  <li>Recomendamos revisar as políticas dos serviços que você utiliza</li>
                  <li>Você pode optar por não participar de alguns serviços diretamente com o terceiro</li>
                  <li>Nosso controle sobre cookies de terceiros é limitado</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              6. Transferência Internacional de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alguns dos serviços de terceiros que utilizamos podem transferir dados para fora do Brasil:
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Salvaguardas Implementadas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Medidas Técnicas</h4>
                  <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                    <li>Criptografia de dados em trânsito</li>
                    <li>Anonimização quando possível</li>
                    <li>Controles de acesso rigorosos</li>
                    <li>Monitoramento de segurança</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Medidas Legais</h4>
                  <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                    <li>Cláusulas contratuais padrão</li>
                    <li>Adequação GDPR dos fornecedores</li>
                    <li>Acordos de proteção de dados</li>
                    <li>Auditoria regular de conformidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              7. Atualizações desta Política
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças em nossas práticas 
              ou exigências legais:
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Processo de Atualização</h4>
                <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                  <li>Publicação da nova versão no site com data de vigência</li>
                  <li>Notificação através do banner de cookies</li>
                  <li>Comunicação por e-mail para usuários cadastrados</li>
                  <li>Solicitação de novo consentimento quando necessário</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Sua Responsabilidade</h4>
                <p className="text-sm text-blue-700">
                  Recomendamos que revise periodicamente esta política para se manter informado sobre 
                  como utilizamos cookies e como isso pode afetar sua privacidade.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              8. Contato sobre Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para dúvidas específicas sobre nossa política de cookies ou para exercer seus direitos:
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-950">E-mail</p>
                    <p className="text-sm text-gray-600">privacidade@mixenergysolar.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-950">WhatsApp</p>
                    <p className="text-sm text-gray-600">(64) 99217-0512</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-950">Endereço</p>
                    <p className="text-sm text-gray-600">
                      Av. Pedro Ludovico Teixeira, 16<br />
                      Rio Verde - GO, 75906-270
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              9. Legislação Aplicável
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Cookies está em conformidade com:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Legislação Nacional</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Lei Geral de Proteção de Dados (LGPD)</li>
                  <li>• Marco Civil da Internet</li>
                  <li>• Código de Defesa do Consumidor</li>
                  <li>• Regulamentações da ANPD</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Padrões Internacionais</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GDPR (Regulamento Europeu)</li>
                  <li>• Diretrizes do IAB Brasil</li>
                  <li>• Boas práticas de privacidade</li>
                  <li>• Padrões de transparência</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Tem Dúvidas sobre Cookies?
            </h3>
            <p className="text-lg mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre como utilizamos cookies 
              para melhorar sua experiência com energia solar.
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
              <Link
                to="/privacy-policy"
                className="inline-flex items-center space-x-2 bg-white/20 text-white border border-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
              >
                <Shield className="h-5 w-5" />
                <span>Ver Política de Privacidade</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;