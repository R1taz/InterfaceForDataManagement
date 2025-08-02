import { FilterConfig } from '@/app/types/filters';
import { IPage } from '@/app/types/pages';

export const pagesFilters: FilterConfig<IPage>[] = [
  { key: 'title', label: 'Заголовок', type: 'text', editable: true },
  { key: 'active', label: 'Статус активности', type: 'boolean', editable: true },
  {
    key: 'publishedAt',
    label: 'Дата публикации',
    type: 'date-range',
    editable: record => record.active,
  },
  { key: 'updatedAt', label: 'Дата обновления публикации', type: 'date-range', editable: false },
];
