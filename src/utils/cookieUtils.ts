// Cookie utility functions for GDPR compliance

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    return consent ? JSON.parse(consent) : null;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: CookieConsent): void => {
  localStorage.setItem('cookie-consent', JSON.stringify(consent));
};

export const hasValidConsent = (): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  
  // Check if consent is less than 1 year old
  const consentDate = new Date(consent.timestamp);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  return consentDate > oneYearAgo;
};

export const canUseAnalytics = (): boolean => {
  const consent = getCookieConsent();
  return consent?.analytics === true && hasValidConsent();
};

export const canUseMarketing = (): boolean => {
  const consent = getCookieConsent();
  return consent?.marketing === true && hasValidConsent();
};

// Function to clear all non-essential cookies
export const clearNonEssentialCookies = (): void => {
  const consent = getCookieConsent();
  if (!consent?.analytics) {
    // Clear analytics cookies (Google Analytics, etc.)
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.slice(0, eqPos).trim() : cookie.trim();
      if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    });
  }
  
  if (!consent?.marketing) {
    // Clear marketing cookies (Facebook Pixel, etc.)
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.slice(0, eqPos).trim() : cookie.trim();
      if (name.startsWith('_fb') || name.startsWith('fr')) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    });
  }
};

// Initialize cookie consent on page load
export const initializeCookieConsent = (): void => {
  const consent = getCookieConsent();
  if (consent && hasValidConsent()) {
    clearNonEssentialCookies();
    applyConsent(consent);
  }
};

// Atualiza o consentimento das tags (Google Consent Mode v2 e Meta Pixel).
// O estado inicial (negado/concedido) é definido no <head> do index.html,
// antes de qualquer tag carregar.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const applyConsent = (consent: Pick<CookieConsent, 'analytics' | 'marketing'>): void => {
  const analytics = consent.analytics ? 'granted' : 'denied';
  const marketing = consent.marketing ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
  window.fbq?.('consent', consent.marketing ? 'grant' : 'revoke');
};
