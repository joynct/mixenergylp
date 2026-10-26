// Configurações compartilhadas do site

export const WHATSAPP_PHONE = '5564992170512';

export const WHATSAPP_DEFAULT_TEXT =
  'Olá, tudo bem? Vim pelo site da Mix Energy e gostaria de fazer um orçamento.';

export const buildWhatsAppUrl = (text: string = WHATSAPP_DEFAULT_TEXT): string =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

export const WHATSAPP_URL = buildWhatsAppUrl();

export const GOOGLE_REVIEWS_URL = 'https://share.google/k1slV7ZMrF8afKDJG';
