'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Corrige o erro de TypeScript declarando a propriedade pixelId no window
declare global {
  interface Window {
    pixelId?: string;
  }
}

export function HeadScripts() {
  useEffect(() => {
    // Garante que o script do UTMify Pixel só seja inserido uma vez
    if (!window.pixelId && !document.getElementById('utmify-pixel-script')) {
      window.pixelId = "67ad2512def830eb4835837c";

      const script = document.createElement("script");
      script.id = "utmify-pixel-script";
      script.async = true;
      script.defer = true;
      script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NW45QNJV');
          `,
        }}
      />
      {/* End Google Tag Manager */}

      {/* UTMify UTMs */}
      <Script
        id="utmify-utms"
        strategy="afterInteractive"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
      />
      {/* End UTMify UTMs */}
    </>
  );
}
