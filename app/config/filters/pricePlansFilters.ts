import { FilterConfig } from '@/app/types/filters';

export const pricePlansFilters: FilterConfig[] = [
  { key: 'description', label: 'Description', type: 'text' },
  { key: 'active', label: 'Active', type: 'boolean' },
  { key: 'createdAt', label: 'Created At', type: 'date-range' },
  { key: 'removedAt', label: 'Removed At', type: 'date-range' },
];
