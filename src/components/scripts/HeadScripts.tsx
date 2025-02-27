// src/components/HeadScripts.tsx
'use client';

import Script from 'next/script';

export function HeadScripts() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HNWH7B4YMX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HNWH7B4YMX');  // Google Analytics
          gtag('config', 'AW-11003501383'); // Google Ads
        `}
      </Script>
    </>
  );
}
