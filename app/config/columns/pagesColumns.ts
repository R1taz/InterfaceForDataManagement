import { IColumn } from '@/app/stores/table';
import { IPage } from '@/app/types/pages';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const pagesColumns: IColumn<IPage>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'title', label: 'Заголовок', render: item => item.title },
  { key: 'active', label: 'Статус активности', render: item => formatActive(item.active) },
  { key: 'publishedAt', label: 'Дата публикации', render: item => formatDate(item.publishedAt) },
  {
    key: 'updatedAt',
    label: 'Дата обновления публикации',
    render: item => formatDate(item.updatedAt),
  },
];
