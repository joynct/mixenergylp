import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': any;
    }
  }
}

const WhatsAppFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5564992170512&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+pelo+site+da+Mix+Energy+e+gostaria+de+fazer+um+or%C3%A7amento.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      title="Fale conosco no WhatsApp"
    >
      <dotlottie-wc 
        src="https://lottie.host/41b3326f-64f5-47c3-875a-9d877a274565/ueFoEjD7pI.lottie" 
        renderer="svg"
        style={{width: '80px', height: '80px'}} 
        speed="1" 
        autoplay 
        loop
      />
    </a>
  );
};

export default WhatsAppFloat;