
import React from 'react';

const Financing: React.FC = () => {
  return (
    <section id="financiamento" className="py-24 bg-mg-bg">
      <div className="container mx-auto px-6">
        <div className="bg-white border border-black/5 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-xl">
          <div className="flex-1 p-12 lg:p-20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-1 w-12 bg-mg-red"></div>
              <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">Condições</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-mg-black font-display mb-8">FACILITAMOS SUA<br /><span className="text-mg-red">CONQUISTA</span></h2>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-mg-red/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-mg-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-mg-black mb-2">Financiamento Exclusivo</h4>
                  <p className="text-gray-500 font-light">As melhores taxas do mercado através dos principais bancos parceiros.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-mg-red/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-mg-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-mg-black mb-2">Avaliação na Troca</h4>
                  <p className="text-gray-500 font-light">Pagamos valor justo no seu veículo atual para viabilizar sua nova BMW.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5500000000000" 
              className="inline-block bg-mg-red hover:bg-mg-black text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-mg-red/20"
            >
              Simular Agora
            </a>
          </div>

          <div className="hidden lg:block lg:w-1/3 relative">
            <img 
              src="https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=1600&auto=format&fit=crop" 
              className="h-full w-full object-cover"
              alt="BMW Steering Wheel"
            />
            <div className="absolute inset-0 bg-mg-red/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
