// src/components/HeadScripts.tsx
'use client';

import Script from 'next/script';

export function HeadScripts() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11003501383"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11003501383');
        `}
      </Script>
    </>
  );
}
