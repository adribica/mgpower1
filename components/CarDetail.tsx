
import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { MOCK_CARS } from '../constants';

interface CarDetailProps {
  id: string;
}

const CarDetail: React.FC<CarDetailProps> = ({ id }) => {
  const [car, setCar] = useState<Car | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const found = MOCK_CARS.find(c => c.id === id);
    if (found) {
      setCar(found);
      setActiveImg(0);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!car) return (
    <div className="h-screen flex flex-col items-center justify-center bg-mg-bg">
      <div className="w-12 h-12 border-4 border-mg-red border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-mg-black font-black uppercase tracking-widest text-xs">Acelerando motores...</p>
    </div>
  );

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(car.price);

  const whatsappLink = `https://wa.me/5500000000000?text=Olá, gostaria de receber mais fotos e informações técnicas sobre o BMW ${car.model} de R$ ${car.price.toLocaleString()}`;

  return (
    <div className="pt-24 pb-20 bg-mg-bg">
      <div className="container mx-auto px-6">
        <nav className="flex mb-12 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <a href="#/" className="hover:text-mg-red transition-colors">MG POWER</a>
          <span className="mx-3">/</span>
          <a href="#/veiculos" className="hover:text-mg-red transition-colors">VEÍCULOS</a>
          <span className="mx-3">/</span>
          <span className="text-mg-black">{car.model}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Gallery - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-white shadow-2xl border border-black/5">
              <img 
                src={car.images[activeImg]} 
                alt={car.model} 
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute top-6 left-6 flex items-center space-x-2">
                <span className="bg-mg-red text-white font-black px-4 py-2 text-xs rounded-sm skew-x-[-12deg] shadow-lg">
                  {car.year}
                </span>
                <span className="bg-mg-black text-white font-black px-4 py-2 text-xs rounded-sm skew-x-[-12deg] shadow-lg">
                  100% ORIGINAL
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImg(idx)}
                  className={`aspect-video rounded-sm overflow-hidden border-2 transition-all ${activeImg === idx ? 'border-mg-red shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`view ${idx}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Core Info - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white p-10 rounded-sm shadow-xl border border-black/5 relative overflow-hidden">
               {/* Background Watermark */}
              <div className="absolute top-0 right-0 text-gray-50 text-8xl font-black font-display translate-x-1/4 -translate-y-1/4 pointer-events-none">
                {car.series.split(' ')[0]}
              </div>

              <div className="relative z-10">
                <span className="text-mg-red font-bold tracking-[0.4em] text-xs uppercase mb-3 block">{car.series}</span>
                <h1 className="text-4xl md:text-5xl font-black text-mg-black mb-6 font-display uppercase tracking-tighter leading-none">
                  {car.model}
                </h1>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-4xl font-black text-mg-red">{formattedPrice}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-mg-bg p-4 rounded-sm border-l-4 border-mg-red">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">KM</p>
                    <p className="text-lg font-black text-mg-black">{car.km === 0 ? '0 KM' : car.km.toLocaleString() + ' KM'}</p>
                  </div>
                  <div className="bg-mg-bg p-4 rounded-sm border-l-4 border-mg-black">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Motor</p>
                    <p className="text-lg font-black text-mg-black">{car.engine}</p>
                  </div>
                  <div className="bg-mg-bg p-4 rounded-sm border-l-4 border-mg-black">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Transmissão</p>
                    <p className="text-lg font-black text-mg-black">{car.transmission.split(' ')[0]}</p>
                  </div>
                  <div className="bg-mg-bg p-4 rounded-sm border-l-4 border-mg-red">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Potência</p>
                    <p className="text-lg font-black text-mg-black">{car.hp} CV</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed font-light text-lg mb-10 border-l-2 border-gray-100 pl-6">
                  {car.description}
                </p>

                <div className="flex flex-col gap-4">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-mg-red hover:bg-mg-black text-white px-8 py-5 rounded-sm font-black text-center uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-mg-red/30 flex items-center justify-center space-x-3"
                  >
                    <span>AGENDAR TEST DRIVE</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-mg-black hover:bg-white border border-mg-black text-white hover:text-mg-black px-4 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all duration-300">
                      SOLICITAR BLINDAGEM
                    </button>
                    <button className="flex-1 bg-white hover:bg-mg-bg border border-black/10 text-mg-black px-4 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all duration-300">
                      FICHA TÉCNICA PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Detail Tabs - 100% Filled */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-black/5 pt-20">
          <div>
            <h3 className="text-2xl font-black text-mg-black mb-8 flex items-center">
              <span className="w-12 h-1 bg-mg-red mr-4"></span>
              TECNOLOGIA M
            </h3>
            <ul className="space-y-6">
              {car.features.map((feature, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mt-1 w-5 h-5 rounded-full border border-mg-red flex items-center justify-center mr-4 group-hover:bg-mg-red transition-colors">
                    <svg className="w-3 h-3 text-mg-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-600 font-bold uppercase tracking-wider text-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
             <h3 className="text-2xl font-black text-mg-black mb-8 flex items-center">
              <span className="w-12 h-1 bg-mg-red mr-4"></span>
              GARANTIA DE PROCEDÊNCIA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Laudo Cautelar Full', icon: 'M', desc: 'Certificação completa de estrutura, originalidade e histórico. Sem apontamentos.' },
                { title: 'BSI (BMW Service)', icon: 'B', desc: 'Plano de manutenção BMW inclusive em alguns modelos. Consultar disponibilidade.' },
                { title: 'Pneus Run-Flat', icon: 'R', desc: 'Conjunto de pneus novos ou com mais de 80% de vida útil.' },
                { title: 'Pintura Original', icon: 'P', desc: 'Verificação de micragem de pintura garantindo que nunca houve repintura.' },
                { title: 'Higienização VIP', desc: 'Processo de detalhamento interno com ozônio e hidratação de couros nobre.' },
                { title: 'Documentação OK', desc: 'IPVA do ano integralmente pago e documentação livre de ônus.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-sm border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-mg-red font-black text-sm uppercase mb-3 tracking-widest">{item.title}</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 pt-10 border-t border-black/5">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
            Informações técnicas baseadas nos catálogos oficiais BMW. Os preços e disponibilidade podem ser alterados sem aviso prévio. Reservamo-nos o direito de corrigir erros de digitação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
