'use client';

import Script from 'next/script';

export function HeadScripts() {
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

      {/* UTMify Pixel - Carregado de forma segura */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        onLoad={() => {
          console.log("UTMify Pixel carregado!");
        }}
        onError={() => {
          console.error("Erro ao carregar o script do UTMify Pixel.");
        }}
      />
      {/* End UTMify Pixel */}

      {/* UTMify UTMs */}
      <Script
        id="utmify-utms"
        strategy="afterInteractive"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        onLoad={() => console.log("UTMify UTMs carregado!")}
        onError={() => console.error("Erro ao carregar UTMify UTMs.")}
      />
      {/* End UTMify UTMs */}
    </>
  );
}
