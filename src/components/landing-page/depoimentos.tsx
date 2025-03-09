'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Depoimento {
  nome: string;
  foto: string;
  texto: string;
  destaque: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: "Ana Paula",
    foto: "/depoimentos/ana.jpg",
    texto: "Depois que comecei a aplicar as técnicas do guia, percebi uma mudança incrível no meu relacionamento. Meu marido está muito mais presente e carinhoso!",
    destaque: "muito mais presente e carinhoso"
  },
  {
    nome: "Mariana Silva",
    foto: "/depoimentos/mariana.jpg",
    texto: "Finalmente entendi por que algumas coisas não funcionavam no nosso relacionamento. O mapa da conexão emocional mudou completamente nossa dinâmica.",
    destaque: "mudou completamente nossa dinâmica"
  },
  {
    nome: "Carla Santos",
    foto: "/depoimentos/carla.jpg",
    texto: "As estratégias são práticas e fáceis de aplicar. Em menos de uma semana, já notei meu namorado mais aberto ao diálogo e mais conectado emocionalmente.",
    destaque: "mais aberto ao diálogo"
  }
];

export function Depoimentos() {
  return (
    <div className="relative bg-gradient-to-br from-[#F2E8DC] via-white to-[#D2A878]/20 py-16 md:py-24 px-4 overflow-hidden">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grade de coordenadas */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(#5B7B7A 1px, transparent 1px), linear-gradient(90deg, #5B7B7A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Elementos de mapa decorativos */}
        <div className="absolute top-20 left-12 w-32 h-32 border border-[#D2A878]/30 rounded-lg rotate-12" />
        <div className="absolute bottom-16 right-16 w-40 h-40 border border-dashed border-[#5B7B7A]/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#8BA888]/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-b-2 border-r-2 border-[#C85C40]/20 rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5B7B7A] mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-[#5B7B7A]/80 max-w-2xl mx-auto">
            Veja como o Mapa da Conexão Emocional já ajudou outras mulheres a transformarem seus relacionamentos
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#D2A878]/20"
            >
              {/* Cabeçalho do Depoimento */}
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#8BA888]">
                  <Image
                    src={depoimento.foto}
                    alt={depoimento.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#5B7B7A]">{depoimento.nome}</h3>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-[#C85C40]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corpo do Depoimento */}
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-8 w-8 text-[#D2A878]/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-[#5B7B7A] leading-relaxed mb-4 pl-6">
                  {depoimento.texto.split(depoimento.destaque).map((parte, i, arr) => (
                    <span key={`depoimento-parte-${index}-${i}`}>
                      {i === arr.length - 1 ? parte : (
                        <>
                          {parte}
                          <span className="font-semibold text-[#C85C40]">{depoimento.destaque}</span>
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Rodapé do Depoimento */}
              <div className="mt-4 pt-4 border-t border-[#D2A878]/20">
                <p className="text-sm text-[#5B7B7A]/70 italic">
                  Resultado obtido após 4 semanas de aplicação
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-[#5B7B7A] mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já transformaram seus relacionamentos com o Mapa da Conexão Emocional
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C85C40] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#AA8878] transition-colors"
          >
            Quero Transformar Meu Relacionamento
          </motion.button>
        </div>
      </div>
    </div>
  );
}
