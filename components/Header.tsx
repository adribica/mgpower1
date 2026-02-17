
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#/' },
    { name: 'Veículos', href: '#/veiculos' },
    { name: 'Sobre', href: '#/sobre' },
    { name: 'Financiamento', href: '#/financiamento' },
    { name: 'Contato', href: '#/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled || isMobileMenuOpen
        ? 'bg-mg-black/95 backdrop-blur-lg py-4 border-b border-white/5 shadow-2xl'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center space-x-2 relative z-[1005]">
          <img
            src={COMPANY_INFO.logo}
            alt={COMPANY_INFO.name}
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-mg-red ${currentHash === link.href ? 'text-mg-red' : 'text-white/80'
                }`}
            >
              {link.name}
              {currentHash === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-mg-red shadow-[0_0_10px_#D62828]"></span>
              )}
            </a>
          ))}
          <a
            href="#/veiculos"
            className="bg-mg-red hover:bg-white hover:text-mg-red text-white px-8 py-3 rounded-sm font-black text-[10px] transition-all duration-500 shadow-xl shadow-mg-red/20 uppercase tracking-[0.2em]"
          >
            Showroom
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[1005] p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-7 h-0.5 mb-1.5 transition-all duration-300 bg-current ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-7 h-0.5 mb-1.5 transition-all duration-300 bg-current ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></div>
          <div className={`w-7 h-0.5 transition-all duration-300 bg-current ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu - SOLID OVERLAY FIX */}
      <div className={`lg:hidden fixed inset-0 bg-mg-black z-[1001] transition-all duration-500 ease-in-out flex flex-col items-center justify-center space-y-12 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-3xl font-black uppercase tracking-[0.3em] transition-colors ${currentHash === link.href ? 'text-mg-red' : 'text-white'
              }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#/veiculos"
          className="bg-mg-red text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest shadow-2xl"
        >
          Ver Showroom
        </a>
      </div>
    </header>
  );
};

export default Header;
