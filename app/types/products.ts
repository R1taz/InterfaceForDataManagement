export interface IProductOptions {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
  amount: number;
}

export interface IProduct {
  id: number;
  name: string;
  options: IProductOptions;
  active: boolean;
  createdAt: string;
}
