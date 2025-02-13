'use client';

import Script from 'next/script';

export function HeadScripts() {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

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

      {/* UTMify Pixel (Inclui script dinâmico via JavaScript) */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.pixelId = "67ad2512def830eb4835837c";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `,
        }}
      />
      {/* End UTMify Pixel */}

      {/* UTMify UTMs */}
      <Script
        id="utmify-utms"
        strategy="afterInteractive"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        async
        defer
      />
      {/* End UTMify UTMs */}
    </>
  );
}
