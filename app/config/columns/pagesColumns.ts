import { IColumn } from '@/app/stores/table';
import { IPage } from '@/app/types/pages';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const pagesColumns: IColumn<IPage>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'title', label: 'Title', render: item => item.title },
  { key: 'active', label: 'Active', render: item => formatActive(item.active) },
  { key: 'publishedAt', label: 'Published At', render: item => formatDate(item.publishedAt) },
  { key: 'updatedAt', label: 'Updated At', render: item => formatDate(item.updatedAt) },
];
