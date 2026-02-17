
import React from 'react';

import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mg-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <span className="text-3xl font-black text-white leading-none tracking-tighter font-display">
              MG<span className="text-mg-red">SELECTION</span>
            </span>
            <p className="text-gray-400 font-light text-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              {['Instagram'].map(social => (
                <a key={social} href="https://instagram.com/mgpowerselection" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white hover:bg-mg-red hover:border-mg-red transition-all">
                  <span className="text-[10px] uppercase font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#/" className="hover:text-mg-red transition-colors">Início</a></li>
              <li><a href="#/veiculos" className="hover:text-mg-red transition-colors">Nossos Veículos</a></li>
              <li><a href="#/sobre" className="hover:text-mg-red transition-colors">Sobre</a></li>
              <li><a href="#/financiamento" className="hover:text-mg-red transition-colors">Financiamento</a></li>
              <li><a href="#/contato" className="hover:text-mg-red transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="text-mg-red mr-3 font-bold">A.</span>
                <a href={COMPANY_INFO.address.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.complement}<br />
                  {COMPANY_INFO.address.neighborhood}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-mg-red mr-3 font-bold">T.</span>
                <a href={`tel:${COMPANY_INFO.contact.whatsapp}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-mg-red mr-3 font-bold">E.</span>
                {COMPANY_INFO.contact.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-4">Receba ofertas exclusivas e lançamentos em primeira mão.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-zinc-800 border border-white/5 text-white px-4 py-2 rounded-l-sm w-full focus:outline-none focus:border-mg-red transition-colors text-sm"
              />
              <button className="bg-mg-red text-white px-4 py-2 rounded-r-sm font-bold text-sm hover:bg-white hover:text-mg-red transition-all uppercase">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2024 {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Carros de procedência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
