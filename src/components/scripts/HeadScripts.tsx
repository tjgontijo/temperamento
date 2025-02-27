// src/components/HeadScripts.tsx
'use client';

import Script from 'next/script';

export function HeadScripts() {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          // Verifica se o dataLayer já existe antes de inicializar
          if (typeof window.dataLayer === 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          }
          (function(w,d,s,l,i){
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s);
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NW45QNJV');
        `}
      </Script>
    </>
  );
}
