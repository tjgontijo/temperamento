'use client';

import { useRouter } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

export default function Suporte() {
  const router = useRouter();
  const whatsappNumber = "556131421919";
  const message = "Olá! Gostaria de tirar algumas dúvidas";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2E8DC] via-[#F2E8DC]/50 to-[#D2A878]/20 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-lg w-full border-2 border-[#D2A878]/20 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#5B7B7A] mb-6">
          Precisa de Ajuda?
        </h1>
        
        <p className="text-[#AA8878] mb-4 text-lg">
          Entendemos que você pode ter dúvidas sobre seus resultados. Nossa equipe está pronta para te ajudar!
        </p>

        <p className="text-[#AA8878] mb-8 text-lg">
          Clique no botão abaixo para falar diretamente conosco no WhatsApp e tirar todas as suas dúvidas.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] hover:from-[#8BA888] hover:to-[#8BA888] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
          Falar no WhatsApp
        </a>

        <button
          onClick={() => router.push('/resultado')}
          className="mt-8 text-[#5B7B7A] hover:text-[#C85C40] transition-colors font-semibold"
        >
          Voltar para a página com os meus resultados
        </button>
      </div>
    </div>
  );
}
