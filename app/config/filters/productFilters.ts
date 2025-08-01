import { FilterConfig } from '@/app/types/filters';

export const productFilters: FilterConfig[] = [
  { key: 'name', label: 'Name', type: 'text' },
  {
    key: 'options.size',
    label: 'Size',
    type: 'select',
    options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  { key: 'options.amount', label: 'Amount', type: 'number' },
  { key: 'active', label: 'Active', type: 'boolean' },
  { key: 'createdAt', label: 'Created At', type: 'date-range' },
];
