// Avaliações do Google exibidas no site (cadastro manual).
//
// Para ADICIONAR uma avaliação: copie o perfil no Google, e acrescente um novo
// bloco { name, text } ao FINAL da lista abaixo. A inicial e a cor do avatar
// são automáticas, e o card entra sozinho na grade.
//
// Dicas:
// - No celular aparecem as 5 primeiras; do tablet para cima aparecem todas.
// - Para a grade ficar completa (sem card sozinho na última linha), mantenha
//   o total de avaliações em múltiplo de 6 (6, 12, 18...).
// - Todas são exibidas com 5 estrelas, como no perfil da Mix Energy.

export interface Review {
  name: string;
  text: string;
}

export const GOOGLE_REVIEWS: Review[] = [
  {
    name: 'Bruna Ptaniskas',
    text: 'Excelente experiência com a Mix Energy! A equipe foi super atenciosa e profissional. O sistema de energia solar instalado é de alta qualidade e já estou economizando na conta de luz. Funcionários educados , prazo de entrega rápido e serviço de qualidade . Recomendo muito!💡',
  },
  {
    name: 'Matheus Freitas',
    text: 'Ótimo atendimento, entrega no prazo combinado, preço bem acessível 🔝',
  },
  {
    name: 'talison rogerio',
    text: 'Serviço de procedência! Recomendo Mix Energy solar..',
  },
  {
    name: 'Maria Oliveira',
    text: 'Bom atendimento ótimo trabalho profissional excelente',
  },
  {
    name: 'Maria Eduarda Oliveira',
    text: 'Ótimo atendimento, uma empresa que entrega o nosso pedido no prazo certo e um sistema de qualidade, ótima equipe de instalação, recomendo muito porque agora o sol gera minha energia graças a mix energy😉Ótima experiência !',
  },
  {
    name: 'Helio Henrrique Francisco da Silva',
    text: 'A Mix Energy superou minhas expectativas! Atendimento rápido, produtos de qualidade e um ótimo custo-benefício. Recomendo de olhos fechados!',
  },
];
