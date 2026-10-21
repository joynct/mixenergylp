import { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';
import { WHATSAPP_URL } from '../config';

const WhatsAppFloat = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // A animação roda localmente (sem serviços externos) e é carregada sob demanda
  useEffect(() => {
    let animation: AnimationItem | undefined;
    let cancelled = false;

    import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
      if (cancelled || !containerRef.current) return;
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/whatsapp-animation.json',
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      title="Fale conosco no WhatsApp"
      aria-label="Fale conosco no WhatsApp"
    >
      <div ref={containerRef} style={{ width: '80px', height: '80px' }} />
    </a>
  );
};

export default WhatsAppFloat;
