
import React, { useState } from 'react';
import { getCarRecommendation } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    const result = await getCarRecommendation(prompt);
    setResponse(result || 'Ocorreu um erro ao processar sua solicitação.');
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[500]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-mg-black text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl flex items-center space-x-2 border border-white/20 hover:bg-mg-red transition-colors"
      >
        <span className="w-2 h-2 bg-mg-red rounded-full animate-pulse"></span>
        <span>AI Consultant</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 w-[320px] sm:w-[400px] bg-white border border-black/10 rounded-sm shadow-2xl overflow-hidden animate-fade-in-up z-[501]">
          <div className="bg-mg-black p-5 border-b border-white/10 flex justify-between items-center">
            <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase">Especialista Digital MG Power</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">✕</button>
          </div>
          <div className="p-8">
            <p className="text-gray-500 text-sm mb-6 font-light">Descreva seu estilo e eu indicarei a BMW que pulsa no seu ritmo.</p>
            <textarea 
              className="w-full bg-mg-bg border border-black/5 text-mg-black p-4 text-sm rounded-sm focus:outline-none focus:border-mg-red mb-6 h-32 resize-none"
              placeholder="Ex: Busco um sedã para viagens longas com a família, mas com torque de pista..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              onClick={handleConsult}
              disabled={loading}
              className="w-full bg-mg-red text-white py-4 rounded-sm font-black text-[10px] uppercase tracking-widest disabled:opacity-50 hover:bg-mg-black transition-all"
            >
              {loading ? 'ANALISANDO PERFORMANCE...' : 'CONSULTAR ESPECIALISTA'}
            </button>

            {response && (
              <div className="mt-8 p-6 bg-mg-bg rounded-sm border-l-4 border-mg-red max-h-60 overflow-y-auto">
                <p className="text-mg-black text-sm font-light italic leading-relaxed">"{response}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
