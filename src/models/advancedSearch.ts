export interface Category {
  id: string;
  name: string;
  value: string;
}

export interface SelectOption {
  id: string;
  value: string | number;
  label: string;
}

export interface IFormSearch {
  name?: string;
  prices?: number[];
  tier?: string;
  theme?: string;
  time?: string;
  price?: number | string;
}
