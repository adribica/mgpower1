
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import CarDetail from './components/CarDetail';
import AboutPage from './components/AboutPage';
import FinancingPage from './components/FinancingPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentPath.startsWith('#/veiculo/')) {
      const id = currentPath.split('#/veiculo/')[1];
      return <div className="pt-24"><CarDetail id={id} /></div>;
    }

    const path = currentPath.split('?')[0];

    switch (path) {
      case '#/veiculos':
        return <div className="pt-24"><Inventory /></div>;
      case '#/sobre':
        return <div className="pt-24"><AboutPage /></div>;
      case '#/financiamento':
        return <div className="pt-24"><FinancingPage /></div>;
      case '#/contato':
        return <div className="pt-24"><ContactPage /></div>;
      case '#/':
      case '':
        return (
          <main className="animate-fade-in relative z-0">
            <Hero />
            
            {/* Value Proposition */}
            <div className="bg-white py-32 border-y border-black/5 relative z-10">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="h-px w-12 bg-mg-red"></div>
                      <span className="text-mg-red font-black tracking-[0.4em] text-[10px] uppercase">Padrão MG Power</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-mg-black font-display mb-10 tracking-tighter uppercase leading-tight">
                      ENGENHARIA QUE<br/>
                      <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #D62828' }}>PULSA NO ASFALTO</span>
                    </h2>
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="p-8 bg-mg-bg rounded-sm border-l-4 border-mg-red shadow-sm">
                        <h4 className="font-black text-mg-black uppercase tracking-widest text-xs mb-3">Curadoria Elite</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">BMWs selecionadas sob rigoroso critério de estado e configuração única.</p>
                     </div>
                     <div className="p-8 bg-mg-bg rounded-sm border-l-4 border-mg-black shadow-sm">
                        <h4 className="font-black text-mg-black uppercase tracking-widest text-xs mb-3">Suporte M</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">Especialistas focados em performance e preservação do DNA M-Series.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <Inventory />
          </main>
        );
      default:
        return (
          <div className="pt-48 text-center h-screen bg-mg-bg flex flex-col items-center justify-center px-6">
            <h2 className="text-4xl font-black text-mg-black font-display mb-4 uppercase tracking-tighter">FORA DO TRAÇADO</h2>
            <p className="text-gray-500 mb-12">Essa página não existe em nosso showroom.</p>
            <a href="#/" className="bg-mg-red text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest shadow-2xl hover:bg-mg-black transition-colors">Voltar ao Início</a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-mg-red selection:text-white bg-mg-bg overflow-x-hidden">
      <Header />
      <div className="relative z-0">
        {renderContent()}
      </div>
      <Footer />
      <FloatingWhatsApp />
      <AIAdvisor />
      <style>{`
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default App;
