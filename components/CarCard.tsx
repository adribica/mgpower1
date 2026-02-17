
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(car.price);

  return (
    <div className="group relative bg-mg-section overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 border border-black/5">
      {/* Badge Year */}
      <div className="absolute top-4 left-4 z-10 bg-mg-red text-white font-black px-3 py-1 text-xs rounded-sm skew-x-[-10deg]">
        {car.year}
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.images[0]} 
          alt={car.model} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mg-section/80 via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Info Container */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1 block">{car.series}</span>
            <h3 className="text-2xl font-black text-mg-black group-hover:text-mg-red transition-colors leading-tight font-display">{car.model}</h3>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6 text-gray-600 text-sm font-medium">
          <span>{car.km.toLocaleString()} km</span>
          <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
          <span>{car.transmission}</span>
        </div>

        <div className="flex items-center justify-between border-t border-black/5 pt-4">
          <div className="text-2xl font-black text-mg-red">{formattedPrice}</div>
          <a 
            href={`#/veiculo/${car.id}`} 
            className="text-xs font-black uppercase tracking-widest text-mg-black hover:text-mg-red transition-colors flex items-center group/btn"
          >
            Detalhes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
