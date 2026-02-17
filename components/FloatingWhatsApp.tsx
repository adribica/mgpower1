
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[500] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
      style={{ animationDuration: '4s' }}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.222-3.61c1.551.92 3.123 1.399 4.78 1.401 5.438 0 9.863-4.425 9.866-9.865.001-2.636-1.026-5.115-2.892-6.983-1.865-1.868-4.341-2.895-6.977-2.896-5.441 0-9.866 4.425-9.869 9.865-.001 1.902.502 3.758 1.455 5.378l-1.02 3.722 3.824-.997z"/></svg>
    </a>
  );
};

export default FloatingWhatsApp;
