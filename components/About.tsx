
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-mg-red/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1616422285623-13ff0167c95c?q=80&w=1600&auto=format&fit=crop" 
              alt="BMW Detail" 
              className="relative z-10 rounded-sm shadow-2xl border border-black/5"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-mg-red p-8 hidden md:block shadow-2xl">
              <span className="text-white font-black text-5xl font-display">10+</span>
              <p className="text-white font-bold text-xs uppercase tracking-widest mt-2">Anos de Mercado</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-1 w-12 bg-mg-red"></div>
                <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">Sobre Nós</span>
              </div>
              <h2 className="text-5xl font-black text-mg-black font-display mb-6">A EXCELÊNCIA<br />COMO PADRÃO</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                A MG Power nasceu com o propósito de oferecer BMWs selecionadas, com padrão elevado, transparência e performance. 
              </p>
              <p className="text-gray-500 font-light text-lg leading-relaxed mt-4">
                Nossa curadoria foca em veículos únicos, com baixa quilometragem e histórico impecável. Não vendemos apenas carros, entregamos a realização do sonho da engenharia alemã perfeita.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-mg-black font-bold text-lg mb-2">Procedência</h4>
                <p className="text-gray-400 text-sm font-light">Laudo cautelar 100% aprovado em todos os veículos.</p>
              </div>
              <div>
                <h4 className="text-mg-black font-bold text-lg mb-2">Performance</h4>
                <p className="text-gray-400 text-sm font-light">Especialistas técnicos em modelos M Series.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
