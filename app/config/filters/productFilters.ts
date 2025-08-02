import { FilterConfig } from '@/app/types/filters';
import { IProduct } from '@/app/types/products';

export const productFilters: FilterConfig<IProduct>[] = [
  { key: 'name', label: 'Название', type: 'text', editable: true },
  {
    key: 'options.size',
    label: 'Размер',
    type: 'select',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    editable: true,
  },
  { key: 'options.amount', label: 'Цена', type: 'number', editable: true },
  {
    key: 'active',
    label: 'Статус активности',
    type: 'boolean',
    editable: record => record.options.amount > 0,
  },
  { key: 'createdAt', label: 'Дата создания', type: 'date-range', editable: false },
];
