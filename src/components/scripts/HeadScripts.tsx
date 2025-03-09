'use client';

import Script from "next/script";
import { useEffect } from "react";

// Estendendo a interface Window para incluir o Clarity
declare global {
  interface Window {
    clarity?: {
      q?: unknown[];
      // Funções comuns do Clarity
      (method: string, ...args: unknown[]): void;
    };
  }
}

export function HeadScripts() {
  useEffect(() => {
    // Log para verificar se o script do Clarity está sendo inicializado
    console.log("Tentando inicializar o Microsoft Clarity...");
    
    // Verificamos periodicamente se o objeto clarity existe
    const clarityCheckInterval = setInterval(() => {
      if (window.clarity) {
        console.log("Microsoft Clarity inicializado com sucesso!");
        clearInterval(clarityCheckInterval);
      }
    }, 2000);
    
    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(clarityCheckInterval);
  }, []);
  
  return (
    <>
      {/* Microsoft Clarity - Implementação otimizada com alta prioridade */}
      <Script 
        id="clarity-script" 
        strategy="afterInteractive" 
        onLoad={() => console.log("Script do Clarity carregado via Next.js Script")}
        onError={(e) => console.error("Erro ao carregar o script do Clarity:", e)}
      >
        {`
          try {
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "q8wnma77xf");
            console.log("Código do Clarity executado");
          } catch (err) {
            console.error("Erro na execução do script do Clarity:", err);
          }
        `}
      </Script>
    </>
  );
}