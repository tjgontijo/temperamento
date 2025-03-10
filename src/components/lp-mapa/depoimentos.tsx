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
    texto: "Tentei DE TUDO antes - desde lingerie nova até terapia. Nada funcionava. O Mapa da Conexão Emocional me mostrou que eu estava atacando o problema errado! Em 3 semanas, nossa dinâmica mudou completamente.",
    destaque: "mudou completamente nossa dinâmica"
  },
  {
    nome: "Carla Santos",
    foto: "/depoimentos/carla.jpg",
    texto: "Confesso que estava cética no início... mas já no 3º dia aplicando as técnicas, meu namorado perguntou 'o que tinha acontecido comigo'. Pela primeira vez em meses, tivemos uma conversa profunda sem brigas!",
    destaque: "mais aberto ao diálogo"
  }
];

export function Depoimentos() {
  return (
    <div className="relative bg-gradient-to-b from-[#D2A878]/20 to-white py-16 md:py-24 px-4 overflow-hidden">
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
          <div className="inline-block bg-[#C85C40] text-white px-6 py-2 rounded-lg shadow-md mb-4 transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              RESULTADOS REAIS DE MULHERES REAIS
            </h2>
          </div>
          <p className="text-xl text-[#5B7B7A]/80 max-w-2xl mx-auto">
            Veja como o Mapa da Conexão Emocional já transformou relacionamentos
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#D2A878]/30 relative overflow-hidden"
            >
              {/* Tag de verificado */}
              <div className="absolute top-4 right-4 bg-[#8BA888] text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Verificado
              </div>
              
              {/* Cabeçalho do Depoimento */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#8BA888] shadow-md">
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
              <div className="relative bg-[#F2E8DC]/50 p-4 rounded-lg mb-4">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 h-8 w-8 text-[#D2A878]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-[#5B7B7A] leading-relaxed pl-6 text-base">
                  {depoimento.texto.split(depoimento.destaque).map((parte, i, arr) => (
                    <span key={`depoimento-parte-${index}-${i}`}>
                      {i === arr.length - 1 ? parte : (
                        <>
                          {parte}
                          <span className="font-bold text-[#C85C40]">{depoimento.destaque}</span>
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Rodapé do Depoimento */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-[#C85C40] mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs font-medium text-[#5B7B7A] text-right">
                    Resultado em poucos dias
                  </p>
                </div>                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contador e Estatísticas */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-6">
            <div className="text-3xl md:text-4xl font-bold text-[#C85C40] mb-2">
              + 37.492 <span className="text-[#5B7B7A]">Mulheres Transformadas</span>
            </div>
            <p className="text-lg text-[#5B7B7A]">
              <span className="font-bold">89%</span> relatam mudanças significativas em menos de 30 dias
            </p>
          </div>
          
          {/* Grid de mini fotos - simulação */}
          <div className="grid grid-cols-10 md:grid-cols-16 gap-1 max-w-4xl mx-auto mb-8">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D2A878] to-[#8BA888] opacity-80"
                style={{ 
                  opacity: Math.random() * 0.5 + 0.5,
                  transform: `scale(${Math.random() * 0.3 + 0.7})`
                }}
              />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="#oferta" 
              className="inline-block bg-gradient-to-r from-[#C85C40] to-[#D4B483] text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              👉 JUNTE-SE A ELAS AGORA
            </a>
            <p className="mt-4 text-[#5B7B7A] font-medium">
              Sua História de Transformação Começa Hoje
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
