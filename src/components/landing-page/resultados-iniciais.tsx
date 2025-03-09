'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLock, FaUnlock, FaHeart } from 'react-icons/fa';
import { realizarAnalise } from '@/services/couple-analysis/couple-analysis';
import { obterDadosContexto } from '@/utils/storage';

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
  analise?: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
    mensagem?: string;
    provedor?: 'groq' | 'openai';
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
            <span>Análise Enviada</span>
          </>
        ) : (
          <>
            <FaLock className="w-5 h-5" />
            <span>Desbloquear Análise no WhatsApp</span>
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
  const [analiseGerada, setAnaliseGerada] = useState(analise);

  useEffect(() => {
    const resultadosQuestionario = localStorage.getItem('resultados_questionario');
    if (resultadosQuestionario) {
      const dados = JSON.parse(resultadosQuestionario);
      setDadosResultado(dados);
      if (dados.analise) {
        setAnaliseGerada(dados.analise);
        setAnaliseUnlocked(true);
      }
    }
  }, [analise]);

  const handleUnlock = async () => {
    if (!analiseUnlocked) {
      setIsHeartAnimationActive(true);
      
      // Tempo total sincronizado com a animação dos corações
      setTimeout(async () => {
        try {
          const contexto = obterDadosContexto();
          if (!contexto || !dadosResultado) {
            throw new Error('Dados necessários não encontrados');
          }

          const resultado = await realizarAnalise({
            nomeAutor: contexto.nome_autor,
            nomeParceiro: contexto.nome_parceiro,
            temperamentoParceiro: dadosResultado.temperamento.principal,
            linguagemParceiro: dadosResultado.linguagem.principal,
            temperamentoAutor: dadosResultado.temperamentoAutor.principal,
            linguagemAutor: dadosResultado.linguagemAutor.principal,
            statusRelacionamento: contexto.status_relacionamento,
            filhos: contexto.filhos
          });

          if (resultado.sucesso && resultado.resultado) {
            const novaAnalise = {
              ...resultado.resultado,
              mensagem: resultado.mensagem,
              provedor: resultado.provedor
            };

            // Atualizar localStorage
            const resultadosAtualizados = {
              ...dadosResultado,
              analise: novaAnalise
            };
            localStorage.setItem('resultados_questionario', JSON.stringify(resultadosAtualizados));
            
            setAnaliseGerada(novaAnalise);
            setAnaliseUnlocked(true);
          } else {
            throw new Error('Falha ao gerar análise');
          }
        } catch (error) {
          console.error('Erro ao gerar análise:', error);
          // Mantem a análise inicial em caso de erro
          setAnaliseGerada(analise);
          setAnaliseUnlocked(true);
        } finally {
          setIsHeartAnimationActive(false);
        }
      }, 8000); // 8 segundos, igual à duração da animação
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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F2E8DC] to-white">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('/img/texture-paper.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#8BA888]/20 to-[#5B7B7A]/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D2A878]/20 to-[#C85C40]/10 blur-3xl"></div>
      
      {/* Elemento de transição visual */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F2E8DC] to-transparent -mt-16"></div>
      
      {/* Animação de corações */}
      <HeartAnimation isActive={isHeartAnimationActive} />
      
      <div className="container relative mx-auto px-4 z-10">
        {/* Cabeçalho com destaque visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-0.5 w-12 bg-[#C85C40]"></div>
              <span className="mx-4 px-4 py-1 rounded-full bg-[#C85C40]/20 text-[#C85C40] text-sm font-medium">
                Análise Exclusiva
              </span>
              <div className="h-0.5 w-12 bg-[#C85C40]"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5B7B7A] mb-6 leading-tight">
              Revelamos o Código Emocional de <span className="text-[#C85C40]">{nome_parceiro}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#AA8878] max-w-2xl mx-auto">
              Agora você vai entender por que ele age de formas que antes pareciam inexplicáveis
            </p>
          </div>
        </div>

        {/* Seção principal com cards */}
        <div className="max-w-5xl mx-auto">
          {/* Título da seção de perfil do parceiro */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D2A878]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-[#F2E8DC] via-white to-[#F2E8DC] px-6 text-xl text-[#5B7B7A] font-serif">
                Perfil Emocional de {nome_parceiro}
              </span>
            </div>
          </div>

          {/* Cards com efeito de vidro */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card do Temperamento */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D2A878]/20">
                <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-4">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-white text-center">
                    Temperamento de {nome_parceiro}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-row justify-center items-center gap-8 py-4">
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
                  <div className="mt-4 p-3 bg-[#F2E8DC]/50 rounded-lg">
                    <p className="text-sm text-[#5B7B7A] italic text-center">
                      Este é o perfil emocional interno que define como {nome_parceiro} processa sentimentos e situações
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card da Linguagem do Amor */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C85C40] to-[#D2A878] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D2A878]/20">
                <div className="bg-gradient-to-r from-[#C85C40] to-[#D2A878] p-4">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-white text-center">
                    Linguagem do Amor de {nome_parceiro}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-row justify-center items-center gap-8 py-4">
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
                  <div className="mt-4 p-3 bg-[#F2E8DC]/50 rounded-lg">
                    <p className="text-sm text-[#5B7B7A] italic text-center">
                      Esta é a forma como {nome_parceiro} prefere receber e expressar amor e afeto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Título da seção do seu perfil */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D2A878]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-[#F2E8DC] via-white to-[#F2E8DC] px-6 text-xl text-[#5B7B7A] font-serif">
                Seu Perfil Emocional
              </span>
            </div>
          </div>

          {/* Cards com efeito de vidro para o perfil do autor */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card do Temperamento do Autor */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D2A878]/20">
                <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-4">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-white text-center">
                    Seu Temperamento
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-row justify-center items-center gap-8 py-4">
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
                  <div className="mt-4 p-3 bg-[#F2E8DC]/50 rounded-lg">
                    <p className="text-sm text-[#5B7B7A] italic text-center">
                      Este é o seu perfil emocional interno que define como você processa sentimentos e situações
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card da Linguagem do Amor do Autor */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C85C40] to-[#D2A878] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D2A878]/20">
                <div className="bg-gradient-to-r from-[#C85C40] to-[#D2A878] p-4">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-white text-center">
                    Sua Linguagem do Amor
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-row justify-center items-center gap-8 py-4">
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
                  <div className="mt-4 p-3 bg-[#F2E8DC]/50 rounded-lg">
                    <p className="text-sm text-[#5B7B7A] italic text-center">
                      Esta é a forma como você prefere receber e expressar amor e afeto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de CTA com design impactante */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#5B7B7A]/20 via-[#8BA888]/20 to-[#5B7B7A]/20 rounded-3xl blur-lg opacity-75"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D2A878]/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mb-4">
                  Descoberta Importante
                </h2>
                <p className="text-lg md:text-xl text-[#5B7B7A] font-medium leading-relaxed mb-2">
                  Existe um padrão crucial entre seus perfis que explica exatamente por que algumas de suas tentativas de conexão não funcionaram como esperado.</p>
                <p className="text-lg md:text-xl text-[#5B7B7A] font-medium leading-relaxed mb-8">
                  Estamos disponibilizando algo único para você hoje: uma análise aprofundada sobre como essas informações estão impactando seu relacionamento com Thiago.
                </p>
                <div className="mb-2">
                  <UnlockButton 
                    isUnlocked={analiseUnlocked}
                    onUnlock={handleUnlock}
                    isHeartAnimationActive={isHeartAnimationActive}
                  />
                </div>
                <p className="text-xs italic text-[#5B7B7A] text-center mt-2">
                  Análise personalizada disponível por tempo limitado
                </p>
              </div>
            </div>

            {/* Análise desbloqueada com animação */}
            <AnimatePresence>
              {analiseUnlocked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative mt-12">
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#D2A878]/20 via-[#C85C40]/10 to-[#D2A878]/20 rounded-3xl blur-lg opacity-75"></div>
                    <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border-2 border-[#D2A878]/20">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mb-4 text-center">
                        {analiseGerada.titulo}
                      </h2>
                      <h3 className="text-xl md:text-2xl font-serif text-[#C85C40] mb-8 text-center">
                        {analiseGerada.subtitulo}
                      </h3>
                      <div className="space-y-6">
                        {analiseGerada.paragrafos.map((paragrafo, index) => (
                          <p key={index} className="text-base md:text-lg text-[#5B7B7A] leading-relaxed">
                            {paragrafo}
                          </p>
                        ))}
                      </div>
                      {analiseGerada.mensagem && (
                        <div className="mt-8 p-4 bg-[#F2E8DC] rounded-lg">
                          <p className="text-sm text-[#AA8878] italic text-center">
                            {analiseGerada.mensagem}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
