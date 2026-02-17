
import React, { useState, useMemo } from 'react';
import { MOCK_CARS } from '../constants';
import CarCard from './CarCard';
import { SortOption } from '../types';

const CATEGORIES = ['Todos', 'M Series', 'X Series', 'i Series', 'Z Series'];

const Inventory: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState<SortOption>('price-desc');

  const filteredCars = useMemo(() => {
    let result = MOCK_CARS.filter(car => {
      const matchesSearch = car.model.toLowerCase().includes(filter.toLowerCase()) ||
                          car.series.toLowerCase().includes(filter.toLowerCase());
      const matchesCategory = category === 'Todos' || car.series === category;
      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      switch (sort) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'year-desc': return b.year - a.year;
        case 'km-asc': return a.km - b.km;
        default: return 0;
      }
    });

    return result;
  }, [filter, category, sort]);

  return (
    <section id="nossos-veiculos" className="py-24 bg-mg-bg min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0 border-b border-black/5 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-1 w-12 bg-mg-red"></div>
              <span className="text-mg-red font-bold tracking-[0.3em] text-xs uppercase">Showroom VIP</span>
            </div>
            <h2 className="text-5xl font-black text-mg-black font-display uppercase tracking-tight">NOSSOS VEÍCULOS</h2>
            <p className="text-gray-500 mt-4 max-w-md font-light text-lg">A mais refinada curadoria de BMWs do Brasil. Performance, luxo e transparência.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm border ${category === cat ? 'bg-mg-red text-white border-mg-red shadow-lg' : 'bg-white text-gray-400 border-black/5 hover:text-mg-black hover:border-black/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="PESQUISAR MODELO (EX: M3, iX...)" 
              className="bg-white border border-black/10 text-mg-black pl-12 pr-6 py-4 rounded-sm w-full focus:outline-none focus:border-mg-red transition-colors placeholder-gray-400 text-xs font-bold tracking-widest"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <select 
              className="bg-white border border-black/10 text-mg-black px-6 py-4 rounded-sm w-full focus:outline-none focus:border-mg-red transition-colors text-xs font-bold tracking-widest uppercase"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
            >
              <option value="price-desc">MAIOR VALOR</option>
              <option value="price-asc">MENOR VALOR</option>
              <option value="year-desc">MAIS RECENTES</option>
              <option value="km-asc">MENOR QUILOMETRAGEM</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-32 bg-white rounded-sm border border-dashed border-black/10 shadow-inner">
            <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">Nenhum veículo corresponde à sua busca.</h3>
            <button 
              onClick={() => {setFilter(''); setCategory('Todos'); setSort('price-desc');}}
              className="text-mg-red mt-6 font-black uppercase text-xs tracking-[0.2em] hover:text-mg-black transition-colors"
            >
              LIMPAR TODOS OS FILTROS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Inventory;
