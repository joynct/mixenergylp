import React from 'react';
import { FileText, Mail, Phone, MapPin, Calendar, Shield, Users, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          <FileText className="h-16 w-16 text-blue-950 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-gray-600">
            Mix Energy Solar - Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao acessar e utilizar o site da Mix Energy Solar (www.mixenergysolar.com.br), você concorda em cumprir 
              e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte 
              destes termos, não deve utilizar nosso site.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>Importante:</strong> Estes termos constituem um acordo legal entre você e a Mix Energy Solar. 
                Recomendamos que leia atentamente antes de utilizar nossos serviços.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              2. Sobre a Mix Energy Solar
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-4">
              <p className="text-gray-700 mb-3">
                A Mix Energy Solar é uma empresa especializada em soluções de energia solar fotovoltaica, 
                com sede na Av. Pedro Ludovico Teixeira, 16 - lt07/08 - parte c, Rio Verde - GO, CEP 75906-270.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-950 mb-2">Nossos Serviços</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Simulações gratuitas de economia</li>
                    <li>Projetos personalizados de energia solar</li>
                    <li>Instalação de sistemas fotovoltaicos</li>
                    <li>Manutenção e suporte técnico</li>
                    <li>Financiamento especializado</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950 mb-2">Área de Atuação</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Todo o estado de Goiás</li>
                    <li>Atendimento nacional para grandes projetos</li>
                    <li>Foco em Rio Verde e região</li>
                    <li>Parcerias em outros estados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              3. Uso do Site
            </h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Usos Permitidos
                </h3>
                <ul className="list-disc list-inside space-y-2 text-green-700 text-sm">
                  <li>Navegar e visualizar o conteúdo do site para fins informativos</li>
                  <li>Solicitar simulações gratuitas de economia de energia</li>
                  <li>Entrar em contato conosco através dos formulários disponíveis</li>
                  <li>Compartilhar nosso conteúdo em redes sociais</li>
                  <li>Baixar materiais educativos disponibilizados</li>
                  <li>Acessar informações sobre nossos serviços e produtos</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Usos Proibidos
                </h3>
                <ul className="list-disc list-inside space-y-2 text-red-700 text-sm">
                  <li>Usar o site para qualquer finalidade ilegal ou não autorizada</li>
                  <li>Tentar acessar áreas restritas ou sistemas internos</li>
                  <li>Enviar spam, vírus ou códigos maliciosos</li>
                  <li>Copiar, reproduzir ou distribuir nosso conteúdo sem autorização</li>
                  <li>Interferir no funcionamento normal do site</li>
                  <li>Usar informações do site para concorrência desleal</li>
                  <li>Fornecer informações falsas nos formulários</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              4. Simulações e Orçamentos
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Simulações Gratuitas</h3>
                <ul className="list-disc list-inside space-y-2 text-yellow-700 text-sm">
                  <li>As simulações são gratuitas e não geram compromisso de compra</li>
                  <li>Os valores apresentados são estimativas baseadas em dados fornecidos</li>
                  <li>Resultados podem variar conforme condições específicas do local</li>
                  <li>Simulações têm validade de 30 dias</li>
                  <li>Para projetos definitivos, é necessária visita técnica</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Orçamentos e Propostas</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-700 text-sm">
                  <li>Orçamentos detalhados requerem análise técnica presencial</li>
                  <li>Propostas comerciais têm validade específica informada no documento</li>
                  <li>Preços podem variar conforme disponibilidade de equipamentos</li>
                  <li>Condições de financiamento sujeitas à aprovação de crédito</li>
                  <li>Prazos de instalação dependem de fatores externos (clima, licenças)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              5. Propriedade Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo o conteúdo do site, incluindo textos, imagens, logotipos, gráficos, vídeos e software, 
              é propriedade da Mix Energy Solar ou de seus licenciadores e está protegido por leis de direitos autorais.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Direitos Reservados</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Marca "Mix Energy Solar" e logotipos</li>
                  <li>• Conteúdo educativo sobre energia solar</li>
                  <li>• Metodologias de cálculo e simulação</li>
                  <li>• Design e layout do site</li>
                  <li>• Fotografias e materiais visuais</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Uso Autorizado</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Visualização pessoal e não comercial</li>
                  <li>• Compartilhamento em redes sociais com créditos</li>
                  <li>• Citação para fins educativos com fonte</li>
                  <li>• Download de materiais disponibilizados</li>
                  <li>• Impressão para uso pessoal</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              6. Responsabilidades e Limitações
            </h2>
            
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Responsabilidades da Mix Energy</h3>
                <ul className="list-disc list-inside space-y-2 text-orange-700 text-sm">
                  <li>Manter o site funcionando adequadamente</li>
                  <li>Proteger dados pessoais conforme LGPD</li>
                  <li>Fornecer informações precisas sobre nossos serviços</li>
                  <li>Responder solicitações em prazo razoável</li>
                  <li>Cumprir compromissos assumidos em contratos</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsabilidades do Usuário</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Fornecer informações verdadeiras nos formulários</li>
                  <li>Usar o site de forma responsável e legal</li>
                  <li>Manter confidencialidade de dados de acesso</li>
                  <li>Respeitar direitos de propriedade intelectual</li>
                  <li>Comunicar problemas técnicos identificados</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Limitações de Responsabilidade</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700 text-sm">
                  <li>Não garantimos disponibilidade ininterrupta do site</li>
                  <li>Simulações são estimativas, não garantias contratuais</li>
                  <li>Não nos responsabilizamos por decisões baseadas apenas em simulações</li>
                  <li>Links externos são de responsabilidade de terceiros</li>
                  <li>Condições climáticas podem afetar prazos de instalação</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              7. Privacidade e Proteção de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O tratamento de dados pessoais coletados através do site é regido por nossa 
              <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline"> Política de Privacidade</Link>, 
              que faz parte integrante destes Termos de Uso.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Principais Compromissos</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-700 text-sm">
                <li>Coleta de dados apenas para finalidades específicas</li>
                <li>Uso de dados exclusivamente para prestação de serviços</li>
                <li>Implementação de medidas de segurança adequadas</li>
                <li>Respeito aos direitos dos titulares de dados</li>
                <li>Transparência sobre práticas de tratamento de dados</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              8. Modificações dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              Alterações significativas serão comunicadas através do site ou por e-mail.
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Processo de Alteração</h4>
                <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                  <li>Publicação da nova versão no site com data de vigência</li>
                  <li>Notificação por e-mail para usuários cadastrados</li>
                  <li>Período de 30 dias para manifestação de discordância</li>
                  <li>Manutenção de versões anteriores para consulta</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Sua Responsabilidade</h4>
                <p className="text-sm text-yellow-700">
                  É sua responsabilidade revisar periodicamente estes termos. 
                  O uso continuado do site após alterações constitui aceitação dos novos termos.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              9. Resolução de Conflitos
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Mediação e Conciliação</h3>
                <p className="text-sm text-blue-700 mb-2">
                  Encorajamos a resolução amigável de conflitos através de:
                </p>
                <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                  <li>Contato direto com nossa equipe de atendimento</li>
                  <li>Mediação através de órgãos de defesa do consumidor</li>
                  <li>Plataformas online de resolução de conflitos</li>
                  <li>Câmaras de mediação e arbitragem</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Foro Competente</h3>
                <p className="text-sm text-gray-700">
                  Para questões que não puderem ser resolvidas amigavelmente, 
                  fica eleito o foro da Comarca de Rio Verde - GO, renunciando as partes 
                  a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              10. Legislação Aplicável
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estes Termos de Uso são regidos pela legislação brasileira, incluindo:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Leis Principais</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Código Civil (Lei 10.406/2002)</li>
                  <li>• Código de Defesa do Consumidor (Lei 8.078/1990)</li>
                  <li>• Marco Civil da Internet (Lei 12.965/2014)</li>
                  <li>• LGPD (Lei 13.709/2018)</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-950 mb-3">Regulamentações Setoriais</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Resoluções da ANEEL</li>
                  <li>• Normas técnicas da ABNT</li>
                  <li>• Regulamentações ambientais</li>
                  <li>• Normas de segurança elétrica</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              11. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para dúvidas sobre estes Termos de Uso ou questões relacionadas ao site:
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-950">E-mail</p>
                    <p className="text-sm text-gray-600">contato@mixenergysolar.com.br</p>
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
              12. Disposições Finais
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Vigência</h4>
                <p className="text-sm text-green-700">
                  Estes Termos de Uso entram em vigor na data de sua publicação e permanecem válidos 
                  por prazo indeterminado, até que sejam substituídos por nova versão.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Integralidade</h4>
                <p className="text-sm text-blue-700">
                  Estes termos, juntamente com a Política de Privacidade, constituem o acordo completo 
                  entre você e a Mix Energy Solar sobre o uso do site.
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Nulidade Parcial</h4>
                <p className="text-sm text-yellow-700">
                  Se qualquer disposição destes termos for considerada inválida, as demais disposições 
                  permanecerão em pleno vigor e efeito.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Economizar com Energia Solar?
            </h3>
            <p className="text-lg mb-6">
              Agora que você conhece nossos termos, que tal fazer uma simulação gratuita 
              e descobrir quanto pode economizar na sua conta de luz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5564992170512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Fazer Simulação Grátis</span>
              </a>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-white/20 text-white border border-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
              >
                <span>Voltar ao Site</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;