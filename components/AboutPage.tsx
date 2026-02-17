
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-mg-bg min-h-screen">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" 
          alt="BMW Heritage" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mg-bg to-transparent"></div>
        <div className="relative z-10 text-center container mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-1 w-12 bg-mg-red"></div>
            <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">História e Legado</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-mg-black font-display uppercase">MG POWER</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-mg-black font-display">NOSSOS VALORES</h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Fundada em São Paulo, a MG Power nasceu da paixão visceral por engenharia de precisão. O que começou como uma garagem de colecionador evoluiu para a principal boutique BMW do Brasil.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Transparência Radial', desc: 'Cada veículo passa por 280 pontos de inspeção com laudo assinado.' },
                { title: 'Excelência Técnica', desc: 'Equipe especializada treinada diretamente nos padrões alemães.' },
                { title: 'Curadoria Exclusiva', desc: 'Não buscamos apenas carros, buscamos configurações únicas.' }
              ].map((val, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="text-mg-red font-black text-xl">0{i+1}.</div>
                  <div>
                    <h4 className="text-mg-black font-bold uppercase tracking-widest text-sm">{val.title}</h4>
                    <p className="text-gray-500 text-sm font-light mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1616422285623-13ff0167c95c?q=80&w=800&auto=format&fit=crop" className="rounded-sm shadow-xl" alt="BMW detail" />
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" className="rounded-sm shadow-xl mt-12" alt="BMW road" />
          </div>
        </div>

        <div className="bg-white border border-black/5 p-12 md:p-20 rounded-sm mb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-black text-mg-black mb-8 uppercase font-display">O CENTRO TÉCNICO</h3>
            <p className="text-gray-500 font-light text-lg mb-10">
              Contamos com o mais avançado laboratório técnico para veículos BMW do estado. Nossa estrutura permite desde diagnósticos eletrônicos complexos até manutenções preventivas em motores M-Series de altíssima performance.
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <span className="block text-4xl font-black text-mg-red mb-2">12</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Box de Atendimento</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-black text-mg-red mb-2">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Peças Originais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
