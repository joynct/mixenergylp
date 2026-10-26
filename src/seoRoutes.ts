// Páginas legais: título e descrição usados no navegador e no HTML gerado no build
// (cada página sai do build com canonical e título próprios, para o Google indexar certo).

export const SITE_URL = 'https://mixenergysolar.com.br';

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
}

export const SEO_ROUTES: SeoRoute[] = [
  {
    path: '/politica-privacidade',
    title: 'Política de Privacidade | Mix Energy Solar',
    description:
      'Saiba como a Mix Energy Solar coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.',
  },
  {
    path: '/termos-uso',
    title: 'Termos de Uso | Mix Energy Solar',
    description:
      'Termos de uso do site da Mix Energy Solar, empresa de energia solar de Rio Verde - GO.',
  },
  {
    path: '/politica-cookies',
    title: 'Política de Cookies | Mix Energy Solar',
    description:
      'Entenda quais cookies o site da Mix Energy Solar utiliza e como gerenciar suas preferências.',
  },
];
