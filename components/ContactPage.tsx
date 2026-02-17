
import React from 'react';

import { COMPANY_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-mg-bg min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-sm shadow-2xl overflow-hidden border border-black/5">
          <div className="flex-1 p-10 md:p-20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-1 w-12 bg-mg-red"></div>
              <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">Fale Conosco</span>
            </div>
            <h1 className="text-5xl font-black text-mg-black font-display uppercase mb-10">CONTATO</h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Nome Completo</label>
                  <input type="text" className="w-full bg-mg-bg border border-black/5 p-4 rounded-sm focus:outline-none focus:border-mg-red text-mg-black" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full bg-mg-bg border border-black/5 p-4 rounded-sm focus:outline-none focus:border-mg-red text-mg-black" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Veículo de Interesse</label>
                <select className="w-full bg-mg-bg border border-black/5 p-4 rounded-sm focus:outline-none focus:border-mg-red text-mg-black">
                  <option>M3 Competition</option>
                  <option>M5 Competition</option>
                  <option>X7 M60i</option>
                  <option>iX M60 Electric</option>
                  <option>M2 Coupé</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Mensagem</label>
                <textarea className="w-full bg-mg-bg border border-black/5 p-4 rounded-sm focus:outline-none focus:border-mg-red text-mg-black h-32" placeholder="Desejo saber sobre blindagem, cor, financiamento..."></textarea>
              </div>
              <button className="bg-mg-red hover:bg-mg-black text-white px-12 py-4 rounded-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-mg-red/20">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="lg:w-1/3 bg-mg-black p-10 md:p-16 text-white">
            <h4 className="text-2xl font-black uppercase font-display mb-10 tracking-tighter">NOSSOS<br />CANAIS</h4>

            <div className="space-y-12">
              <div>
                <h5 className="text-mg-red font-bold text-xs uppercase tracking-[0.3em] mb-4">Vendas / WhatsApp</h5>
                <p className="text-lg font-light">{COMPANY_INFO.contact.phone}</p>
              </div>

              <div>
                <h5 className="text-mg-red font-bold text-xs uppercase tracking-[0.3em] mb-4">E-mail</h5>
                <p className="text-gray-500 text-sm">{COMPANY_INFO.contact.email}</p>
              </div>

              <div>
                <h5 className="text-mg-red font-bold text-xs uppercase tracking-[0.3em] mb-4">Endereço</h5>
                <p className="text-lg font-light">{COMPANY_INFO.address.street}, {COMPANY_INFO.address.complement}</p>
                <p className="text-gray-500 text-sm">{COMPANY_INFO.address.neighborhood}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}</p>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5">
              <h5 className="text-mg-red font-bold text-xs uppercase tracking-[0.3em] mb-4">Horário de Funcionamento</h5>
              <p className="text-sm text-gray-400">Seg. a Sex: 09:00 - 18:00</p>
              <p className="text-sm text-gray-400">Sábados: 09:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
