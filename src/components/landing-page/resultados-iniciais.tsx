'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLock, FaUnlock, FaHeart } from 'react-icons/fa';

type PercentageCircleProps = {
  percentage: number;
  label: string;
  color: string;
  isDominant?: 'dominant' | 'secondary' | 'equal';
};

const PercentageCircle = ({ 
  percentage, 
  label, 
  color, 
  isDominant 
}: PercentageCircleProps) => (
  <div className="flex flex-col items-center group">
    <div 
      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105"
      style={{
        background: `conic-gradient(${color} ${percentage * 360}deg, #e0e0e0 ${percentage * 360}deg)`
      }}
    >
      <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
        <span className="text-2xl md:text-3xl font-bold text-[#5B7B7A]">
          {Math.round(percentage * 100)}%
        </span>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p className="text-sm md:text-base font-semibold text-[#5B7B7A] group-hover:text-[#C85C40] transition">
        {label}
      </p>
      <p className="text-xs md:text-sm text-[#5B7B7A]/80 italic font-light group-hover:text-[#C85C40]/80 transition">
        {isDominant === 'dominant' 
          ? 'Característica Dominante' 
          : isDominant === 'secondary' 
            ? 'Influência Secundária' 
            : 'Equilíbrio Emocional'}
      </p>
    </div>
  </div>
);

type ResultadosIniciaisProps = {
  nome_parceiro: string;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
    mensagem?: string;
    provedor?: 'groq' | 'openai';
  };
};

type DadosResultadoType = {
  temperamento: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagem: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  temperamentoAutor: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagemAutor: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
};

const HeartAnimation = ({ isActive }: { isActive: boolean }) => {
  const hearts = Array(300).fill(0).map((_, index) => ({  
    id: index,
    x: Math.random() * 300 - 150,  
    initialY: window.innerHeight,  
    targetY: -window.innerHeight,  
    delay: Math.random() * 5,  
    scale: Math.random() * 0.7 + 0.3,  
    rotate: Math.random() * 360,
    opacity: Math.random() * 0.5 + 0.5,  
    size: Math.random() * 30 + 10  
  }));

  return isActive ? (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ 
            opacity: 0, 
            x: heart.x, 
            y: heart.initialY,  
            scale: 0,
            rotate: heart.rotate
          }}
          animate={{ 
            opacity: [0, heart.opacity, 1, 0.5, 0],  
            x: [heart.x, heart.x + Math.random() * 200 - 100],  
            y: [heart.initialY, heart.targetY],  
            scale: [0, heart.scale, 0],  
            rotate: heart.rotate + 360  
          }}
          transition={{
            duration: 8,  
            delay: heart.delay,
            repeat: 1,
            repeatType: 'loop',
            ease: "easeInOut"  
          }}
          className="absolute"
          style={{ 
            left: `${80 + heart.x / 2}%`,  
          }}
        >
          <FaHeart 
            className="drop-shadow-lg"  
            style={{ 
              width: `${heart.size}px`,  
              height: `${heart.size}px`,
              color: `rgba(255, 105, 180, ${heart.opacity})`,  
            }} 
          />
        </motion.div>
      ))}
    </div>
  ) : null;
};

const UnlockButton = ({ 
  isUnlocked, 
  onUnlock,
  isHeartAnimationActive
}: { 
  isUnlocked: boolean, 
  onUnlock: () => void,
  isHeartAnimationActive: boolean
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onUnlock}
      disabled={isUnlocked}
      className={`
        relative overflow-hidden rounded-full px-6 py-3 text-white font-bold 
        transition-all duration-300 ease-in-out
        ${isUnlocked 
          ? 'bg-[#8BA888] cursor-not-allowed' 
          : 'bg-[#C85C40] hover:bg-[#AA8878]'}
      `}
    >
      {/* Background de loading */}
      {!isUnlocked && (
        <motion.div
          className="absolute inset-0 bg-[#AA8878] z-0"
          initial={{ width: '0%' }}
          animate={{ 
            width: isHeartAnimationActive ? '100%' : '0%'
          }}
          transition={{ 
            duration: 8,  
            ease: 'linear'
          }}
        />
      )}

      {/* Conteúdo do botão */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {isUnlocked ? (
          <>
            <FaUnlock className="w-5 h-5" />
            <span>Análise Desbloqueada</span>
          </>
        ) : (
          <>
            <FaLock className="w-5 h-5" />
            <span>Desbloquear Análise do Casal</span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export function ResultadosIniciais({
  nome_parceiro,
  analise
}: ResultadosIniciaisProps) {
  const [dadosResultado, setDadosResultado] = useState<DadosResultadoType | null>(null);
  const [analiseUnlocked, setAnaliseUnlocked] = useState(false);
  const [isHeartAnimationActive, setIsHeartAnimationActive] = useState(false);

  useEffect(() => {
    const resultadosQuestionario = localStorage.getItem('resultados_questionario');
    if (resultadosQuestionario) {
      setDadosResultado(JSON.parse(resultadosQuestionario));
    }
  }, []);

  const handleUnlock = () => {
    if (!analiseUnlocked) {
      setIsHeartAnimationActive(true);
      
      // Tempo total sincronizado com a animação dos corações
      setTimeout(() => {
        setIsHeartAnimationActive(false);
        setAnaliseUnlocked(true);
      }, 8000);  // 8 segundos, igual à duração da animação
    }
  };

  if (!dadosResultado) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-[#5B7B7A]">Carregando resultados...</p>
      </div>
    );
  }

  const {      
    temperamento, 
    linguagem,
    temperamentoAutor,
    linguagemAutor
  } = dadosResultado;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"
    >
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-12 w-32 h-32 border border-[#D2A878]/30 rounded-lg rotate-12" />
        <div className="absolute bottom-16 right-16 w-40 h-40 border border-dashed border-[#5B7B7A]/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#8BA888]/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-b-2 border-r-2 border-[#C85C40]/20 rotate-45" />
      </div>

      {/* Animação de corações */}
      <HeartAnimation isActive={isHeartAnimationActive} />

      <div className="relative bg-gradient-to-b from-white via-[#F2E8DC] to-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Título Persuasivo */}
        <div className="text-center bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-6 rounded-2xl mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/texture-paper.png')] opacity-5"></div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            O Código Secreto do Amor de {nome_parceiro}
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto text-center">
            Com base em suas respostas conseguimos revelar com profundidade como {nome_parceiro} se conecta emocionalmente.
          </p>
        </div>

        {/* Temperamento Parceiro */}
        <div className="bg-[#F2E8DC]/30 rounded-2xl shadow-lg p-6 mb-8 text-center border border-[#D2A878]/20">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#5B7B7A] mb-6 border-b-2 border-[#D2A878]/20 pb-4">
            Mapa Emocional de {nome_parceiro}
          </h2>
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center">
              <PercentageCircle 
                percentage={temperamento.percentualPrincipal} 
                label={temperamento.principal}
                color="#5B7B7A"
                isDominant={temperamento.percentualPrincipal > temperamento.percentualSecundario ? 'dominant' : temperamento.percentualPrincipal < temperamento.percentualSecundario ? 'secondary' : 'equal'}
              />
            </div>
            <div className="text-center">
              <PercentageCircle 
                percentage={temperamento.percentualSecundario} 
                label={temperamento.secundario}
                color="#8BA888"
                isDominant={temperamento.percentualSecundario > temperamento.percentualPrincipal ? 'dominant' : temperamento.percentualSecundario < temperamento.percentualPrincipal ? 'secondary' : 'equal'}
              />
            </div>
          </div>
        </div>

        {/* Linguagem do Amor Parceiro */}
        <div className="bg-[#F2E8DC]/30 rounded-2xl shadow-lg p-6 mb-8 text-center border border-[#D2A878]/20">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#C85C40] mb-6 border-b-2 border-[#D2A878]/20 pb-4">
            Como {nome_parceiro} Recebe Amor
          </h2>
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center">
              <PercentageCircle 
                percentage={linguagem.percentualPrincipal} 
                label={linguagem.principal}
                color="#C85C40"
                isDominant={linguagem.percentualPrincipal > linguagem.percentualSecundario ? 'dominant' : linguagem.percentualPrincipal < linguagem.percentualSecundario ? 'secondary' : 'equal'}
              />
            </div>
            <div className="text-center">
              <PercentageCircle 
                percentage={linguagem.percentualSecundario} 
                label={linguagem.secundario}
                color="#AA8878"
                isDominant={linguagem.percentualSecundario > linguagem.percentualPrincipal ? 'dominant' : linguagem.percentualSecundario < linguagem.percentualPrincipal ? 'secondary' : 'equal'}
              />
            </div>
          </div>
        </div>

        {/* Bônus: Perfil do Autor */}
        <div className="bg-gradient-to-r from-[#F2E8DC] to-[#8BA888]/10 rounded-2xl p-6 mb-8 border-2 border-[#D2A878]/20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mb-4 text-center">
            Tomamos a Liberdade e também mapeamos o seu perfil 😉
          </h2>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6 text-center">
            O amor não é uma via de mão única. Por isso, além de desvendar como {nome_parceiro} sente e se conecta, revelamos também o que torna você única na forma de amar. Saber como você ama e se conecta pode mudar completamente a forma como essa relação se desenvolve.
          </p>
          
          {/* Temperamento Autor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center border border-[#D2A878]/20">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#5B7B7A] mb-6 border-b-2 border-[#D2A878]/20 pb-4">
              Seu Universo Interno
            </h3>
            <div className="flex justify-center space-x-8 md:space-x-12">
              <div className="text-center">
                <PercentageCircle 
                  percentage={temperamentoAutor.percentualPrincipal} 
                  label={temperamentoAutor.principal}
                  color="#5B7B7A"
                  isDominant={temperamentoAutor.percentualPrincipal > temperamentoAutor.percentualSecundario ? 'dominant' : temperamentoAutor.percentualPrincipal < temperamentoAutor.percentualSecundario ? 'secondary' : 'equal'}
                />
              </div>
              <div className="text-center">
                <PercentageCircle 
                  percentage={temperamentoAutor.percentualSecundario} 
                  label={temperamentoAutor.secundario}
                  color="#8BA888"
                  isDominant={temperamentoAutor.percentualSecundario > temperamentoAutor.percentualPrincipal ? 'dominant' : temperamentoAutor.percentualSecundario < temperamentoAutor.percentualPrincipal ? 'secondary' : 'equal'}
                />
              </div>
            </div>
          </div>

          {/* Linguagem do Amor Autor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-[#D2A878]/20">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#C85C40] mb-6 border-b-2 border-[#D2A878]/20 pb-4">
              Como Você Expressa Amor
            </h3>
            <div className="flex justify-center space-x-8 md:space-x-12">
              <div className="text-center">
                <PercentageCircle 
                  percentage={linguagemAutor.percentualPrincipal} 
                  label={linguagemAutor.principal}
                  color="#C85C40"
                  isDominant={linguagemAutor.percentualPrincipal > linguagemAutor.percentualSecundario ? 'dominant' : linguagemAutor.percentualPrincipal < linguagemAutor.percentualSecundario ? 'secondary' : 'equal'}
                />
              </div>
              <div className="text-center">
                <PercentageCircle 
                  percentage={linguagemAutor.percentualSecundario} 
                  label={linguagemAutor.secundario}
                  color="#AA8878"
                  isDominant={linguagemAutor.percentualSecundario > linguagemAutor.percentualPrincipal ? 'dominant' : linguagemAutor.percentualSecundario < linguagemAutor.percentualPrincipal ? 'secondary' : 'equal'}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Desbloquear */}
        <div className="flex justify-center mt-8">
          <UnlockButton 
            isUnlocked={analiseUnlocked}
            onUnlock={handleUnlock}
            isHeartAnimationActive={isHeartAnimationActive}
          />
        </div>

        {/* Análise desbloqueada com animação */}
        <AnimatePresence>
          {analiseUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-[#F2E8DC]/30 rounded-2xl p-6 border border-[#D2A878]/20"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mb-4">
                {analise.titulo}
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-[#C85C40] mb-6">
                {analise.subtitulo}
              </h3>
              <div className="space-y-4">
                {analise.paragrafos.map((paragrafo, index) => (
                  <p key={index} className="text-[#5B7B7A] leading-relaxed">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
