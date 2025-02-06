export function JsonLdScript() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Decifrando Corações",
    "url": "https://decifrandocoracoes.com",
    "description": "Descubra o temperamento e a linguagem do amor do seu pretendente para criar uma conexão verdadeira e duradoura.",
    "applicationCategory": "Psychological Assessment",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "about": {
      "@type": "Thing",
      "name": "Teste de Temperamento e Linguagem do Amor"
    },
    "keywords": [
      "temperamento",
      "linguagem do amor",
      "relacionamento",
      "psicologia",
      "teste de personalidade"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
