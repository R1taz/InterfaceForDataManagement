import { FilterConfig } from '@/app/types/filters';

export const pagesFilters: FilterConfig[] = [
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'active', label: 'Active', type: 'boolean' },
  { key: 'publishedAt', label: 'Published At', type: 'date-range' },
  { key: 'updatedAt', label: 'Updated At', type: 'date-range' },
];
