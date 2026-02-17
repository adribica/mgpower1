
import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center overflow-hidden bg-mg-black"
    >
      {/* Background Video - BMW em Movimento (Rodas Girando) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          {/* Link para um vídeo cinematográfico de alta performance */}
          <source src="https://s3.bicalhoadslab.digital/calisten/videocarro.mp4" type="video/mp4" />
        </video>

        {/* Camadas de Contraste para Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-mg-black via-mg-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mg-black via-transparent to-mg-black/20"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className="max-w-4xl transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -5}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[2px] w-20 bg-mg-red shadow-[0_0_20px_#D62828]"></div>
            <span className="text-white font-black tracking-[0.5em] text-[11px] uppercase drop-shadow-lg">
              BMW Luxury Performance Specialists
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none font-display tracking-tighter">
            MG POWER<br />
            <span
              className="text-transparent italic"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.9)',
                textShadow: '0 0 30px rgba(214, 40, 40, 0.4)'
              }}
            >
              LEGACY
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-xl">
            Sinta a pulsação da engenharia alemã em sua forma mais pura.
            Curadoria exclusiva de veículos BMW com performance certificada.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="#/veiculos"
              className="group relative bg-mg-red text-white px-12 py-5 rounded-sm font-black text-center uppercase tracking-widest transition-all duration-500 shadow-[0_10px_40px_rgba(214,40,40,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Ver Showroom</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-mg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
              <span className="absolute inset-0 flex items-center justify-center text-mg-red font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 z-20">
                EXPLORAR
              </span>
            </a>

            <a
              href="#/contato"
              className="group border border-white/20 hover:border-mg-red bg-white/5 backdrop-blur-md text-white px-12 py-5 rounded-sm font-black text-center uppercase tracking-widest transition-all duration-300"
            >
              Consultoria VIP
            </a>
          </div>
        </div>
      </div>

      {/* Side HUD decorativo */}
      <div className="absolute right-10 bottom-24 z-20 hidden xl:flex flex-col items-end space-y-4 text-white/30 text-[9px] font-black uppercase tracking-[0.4em] border-r-2 border-mg-red pr-6 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 bg-mg-red rounded-full animate-pulse"></div>
          <span>Engine Status: Optimal</span>
        </div>
        <span>Performance Mode Active</span>
      </div>
    </section>
  );
};

export default Hero;
