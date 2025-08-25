import React from 'react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5564992170512"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      title="Fale conosco no WhatsApp"
    >
      <dotlottie-wc 
        src="https://lottie.host/41b3326f-64f5-47c3-875a-9d877a274565/ueFoEjD7pI.lottie" 
        style={{width: '80px', height: '80px'}} 
        speed="1" 
        autoplay 
        loop
      />
    </a>
  );
};

export default WhatsAppFloat;