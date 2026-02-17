
export interface Car {
  id: string;
  model: string;
  series: string;
  year: number;
  price: number;
  km: number;
  fuel: string;
  transmission: string;
  color: string;
  engine: string;
  hp: number;
  description: string;
  images: string[];
  features: string[];
  featured?: boolean;
}

export type SortOption = 'price-asc' | 'price-desc' | 'year-desc' | 'km-asc';
