
import React, { useState } from 'react';

const FinancingPage: React.FC = () => {
  const [value, setValue] = useState(300000);

  return (
    <div className="bg-mg-bg min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-1 w-12 bg-mg-red"></div>
            <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">Soluções Financeiras</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-mg-black font-display uppercase mb-6">CONQUISTE O ÍCONE</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg italic">Oferecemos as melhores condições de financiamento premium do mercado.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-xl border border-black/5">
            <h3 className="text-2xl font-black text-mg-black mb-8 uppercase font-display">SIMULADOR EXPRESSO</h3>
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest">Valor do Veículo (R$)</label>
                <input 
                  type="range" 
                  min="200000" 
                  max="1500000" 
                  step="10000"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-mg-red"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-mg-black font-black text-2xl">R$ {value.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-mg-bg rounded-sm border border-black/5">
                  <span className="block text-gray-400 text-[10px] font-bold uppercase mb-2">Entrada 40%</span>
                  <span className="text-xl font-bold text-mg-black">R$ {(value * 0.4).toLocaleString()}</span>
                </div>
                <div className="p-6 bg-mg-bg rounded-sm border border-black/5">
                  <span className="block text-gray-400 text-[10px] font-bold uppercase mb-2">48x Fixas</span>
                  <span className="text-xl font-bold text-mg-red">R$ {(value * 0.025).toLocaleString()}*</span>
                </div>
              </div>

              <div className="bg-mg-red/5 p-4 rounded-sm">
                <p className="text-[10px] text-mg-red font-bold uppercase leading-tight">* Taxas sujeitas a análise de crédito. Trabalhamos com BMW Finance e os principais bancos de luxo.</p>
              </div>

              <a 
                href="https://wa.me/5500000000000" 
                className="block w-full bg-mg-red hover:bg-mg-black text-white text-center py-5 rounded-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-mg-red/20"
              >
                Falar com Consultor Financeiro
              </a>
            </div>
          </div>

          <div className="space-y-12 py-8">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-mg-red text-white flex items-center justify-center font-black rounded-sm">1</div>
              <h4 className="text-xl font-black text-mg-black uppercase mb-3">Aprovação em Minutos</h4>
              <p className="text-gray-500 font-light leading-relaxed">Utilizamos integração direta com mesas de crédito especializadas em alta renda, garantindo agilidade no processo.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-mg-red text-white flex items-center justify-center font-black rounded-sm">2</div>
              <h4 className="text-xl font-black text-mg-black uppercase mb-3">BMW Select</h4>
              <p className="text-gray-500 font-light leading-relaxed">Plano com parcelas reduzidas e recompra garantida do seu veículo após o período de financiamento.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-mg-red text-white flex items-center justify-center font-black rounded-sm">3</div>
              <h4 className="text-xl font-black text-mg-black uppercase mb-3">Aceitamos Trocas Premium</h4>
              <p className="text-gray-400 font-light leading-relaxed">Avaliamos seu veículo atual (inclusive outras marcas de luxo) com a melhor cotação da tabela de mercado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingPage;
