'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ModalWhatsApp from './modal-whatsapp';

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
};

export type DadosResultadoType = {
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

const WhatsAppButton = ({ 
  onClick,
  isDisabled,
  text
}: { 
  onClick: () => void,
  isDisabled: boolean,
  text: string
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`relative flex items-center justify-center h-12 px-6 font-semibold text-white transition-colors duration-200 transform rounded-lg focus:outline-none ${isDisabled ? 'bg-gray-400' : 'bg-[#247742]'} hover:bg-[#128C7E]`}
    >
      <div className="relative z-10 flex items-center justify-center space-x-2">
        <FaWhatsapp className="w-5 h-5" />
        <span>{text}</span>
      </div>
    </button>
  );
};

export function ResultadosIniciais({
  nome_parceiro,
}: ResultadosIniciaisProps) {
  const [dadosResultado, setDadosResultado] = useState<DadosResultadoType | null>(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Receber Análise no WhatsApp');

  useEffect(() => {
    const resultadosQuestionario = localStorage.getItem('resultados_questionario');
    if (resultadosQuestionario) {
      const dados = JSON.parse(resultadosQuestionario);
      setDadosResultado(dados);
    }
  }, []);

  const handleOpenWhatsAppModal = () => {
    setShowWhatsAppModal(true);
  };

  const handleWhatsAppValidated = async () => {
    setShowWhatsAppModal(false);
    setIsButtonDisabled(true); 
    setButtonText('Análise Enviada'); 
  };

  const handleCloseWhatsAppModal = () => {
    setShowWhatsAppModal(false);
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
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('/img/texture-paper.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#8BA888]/20 to-[#5B7B7A]/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D2A878]/20 to-[#C85C40]/10 blur-3xl"></div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F2E8DC] to-transparent -mt-16"></div>
      
      <div className="container relative mx-auto px-4 z-10">
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

        <div className="max-w-5xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#5B7B7A]/20 via-[#8BA888]/20 to-[#5B7B7A]/20 rounded-3xl blur-lg opacity-75"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#D2A878]/20 text-center p-8">
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
                <div className="flex justify-center mb-4">
                  <WhatsAppButton 
                    onClick={handleOpenWhatsAppModal} 
                    isDisabled={isButtonDisabled} 
                    text={buttonText} 
                  />
                </div>
                <p className="text-xs italic text-[#5B7B7A] text-center mt-2">
                  Análise personalizada disponível por tempo limitado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ModalWhatsApp 
            onValidated={handleWhatsAppValidated} 
            onClose={handleCloseWhatsAppModal}            
          />
        </div>
      )}
    </section>
  );
}
