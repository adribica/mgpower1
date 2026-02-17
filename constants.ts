
import { Car } from './types';

export const COMPANY_INFO = {
  name: 'MGPower Selection',
  description: 'Compra, venda, troca, intermediação e avaliação de veículos BMW e MINI. Carros de procedência.',
  address: {
    street: 'Rua José Rodrigues Pereira, 165',
    complement: 'Loja 110',
    neighborhood: 'Estoril',
    city: 'Belo Horizonte',
    state: 'MG',
    zip: '30455-640',
    mapsLink: 'https://maps.google.com/?q=Rua+José+Rodrigues+Pereira+165+Estoril+Belo+Horizonte'
  },
  contact: {
    phone: '(31) 97547-9536',
    whatsapp: '5531975479536',
    email: 'contato@mgpowerSelection.com.br',
    instagram: '@mgpowerselection'
  },
  logo: 'https://s3.bicalhoadslab.digital/calisten/logo%20mgpower%20.jpg'
};

export const MOCK_CARS: Car[] = [
  {
    id: 'bmw-m3-competition-2024',
    model: 'M3 Competition G80',
    series: 'M Series',
    year: 2024,
    price: 849900,
    km: 0,
    fuel: 'Gasolina',
    transmission: 'Automático 8v',
    color: 'Isle of Man Green',
    engine: '3.0 Twin-Power Turbo',
    hp: 510,
    description: 'O ícone da performance alemã em sua forma mais pura. O M3 Competition G80 combina a brutalidade do motor S58 com a sofisticação tecnológica da nova geração BMW.',
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop'
    ],
    features: [
      'Bancos em Concha de Carbono M',
      'Sistema de Som Harman Kardon',
      'M Drift Analyzer',
      'Faróis BMW Laserlight',
      'Head-up Display M',
      'Freios de Composto M',
      'Diferencial Ativo M',
      'Suspensão Adaptativa M'
    ],
    featured: true
  },
  {
    id: 'bmw-ix-m60-2024',
    model: 'iX M60 xDrive',
    series: 'i Series',
    year: 2024,
    price: 1101950,
    km: 0,
    fuel: 'Elétrico',
    transmission: 'Automático',
    color: 'Storm Bay',
    engine: 'Dual Motor E-Drive',
    hp: 619,
    description: 'A revolução elétrica encontra o DNA M. O iX M60 oferece um torque instantâneo de 1.100 Nm e uma experiência de luxo sustentável sem precedentes.',
    images: [
      'https://images.unsplash.com/photo-1655208453472-72c0c7a84ac6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1657635292482-1c2551523b03?q=80&w=1600&auto=format&fit=crop'
    ],
    features: [
      'BMW Curved Display',
      'Som Bowers & Wilkins Diamond 4D',
      'Teto Panorâmico Sky Lounge',
      'Integral Active Steering',
      'Driving Assistant Professional',
      'BMW Natural Interaction',
      'Parking Assistant Plus'
    ],
    featured: true
  },
  {
    id: 'bmw-x5-hybrid-2024',
    model: 'X5 xDrive50e M Sport',
    series: 'X Series',
    year: 2024,
    price: 759900,
    km: 0,
    fuel: 'Híbrido Plug-in',
    transmission: 'Automático 8v',
    color: 'Carbon Black',
    engine: '3.0 Turbo + Electric',
    hp: 489,
    description: 'O SUV premium mais desejado, agora com 110km de autonomia puramente elétrica. O equilíbrio perfeito entre potência e eficiência.',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop'
    ],
    features: [
      'Suspensão a Ar Adaptativa',
      'Pacote M Sport Pro',
      'Ar-condicionado de 4 zonas',
      'Soft Close (fechamento suave de portas)',
      'Rodas M de 22 polegadas',
      'Travel & Comfort System'
    ],
    featured: true
  },
  {
    id: 'bmw-m4-competition-2023',
    model: 'M4 Competition Coupé',
    series: 'M Series',
    year: 2023,
    price: 785000,
    km: 4200,
    fuel: 'Gasolina',
    transmission: 'Automático 8v',
    color: 'Toronto Red',
    engine: '3.0 Twin-Power Turbo',
    hp: 510,
    description: 'Performance focada em pista com usabilidade diária. Este M4 Competition em Toronto Red é uma afirmação de estilo e poder.',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop'
    ],
    features: [
      'Escapamento Esportivo M',
      'Acabamento interno em Fibra de Carbono',
      'M Drive Professional',
      'Surround View 360',
      'Bancos M Sport com Ajuste Lombar'
    ],
    featured: false
  },
  {
    id: 'bmw-z4-m40i-2022',
    model: 'Z4 M40i Roadster',
    series: 'Z Series',
    year: 2022,
    price: 489000,
    km: 12000,
    fuel: 'Gasolina',
    transmission: 'Automático 8v',
    color: 'San Francisco Red',
    engine: '3.0 Turbo B58',
    hp: 340,
    description: 'O prazer de dirigir com capota aberta. Equipado com o lendário motor B58, este roadster oferece uma dinâmica impecável.',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop'
    ],
    features: [
      'Capota Marítima com isolamento acústico',
      'Defletor de vento',
      'Acesso Conforto',
      'Apple CarPlay Wireless',
      'Carregamento por Indução'
    ],
    featured: false
  }
];
