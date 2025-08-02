import { FilterConfig } from '@/app/types/filters';
import { IPricePlan } from '@/app/types/price-plans';

export const pricePlansFilters: FilterConfig<IPricePlan>[] = [
  { key: 'description', label: 'Описание', type: 'text', editable: true },
  { key: 'active', label: 'Статус активности', type: 'boolean', editable: true },
  { key: 'createdAt', label: 'Дата создания', type: 'date-range', editable: false },
];
