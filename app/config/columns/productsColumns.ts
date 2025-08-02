import { IColumn } from '@/app/stores/table';
import { IProduct } from '@/app/types/products';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const productsColumns: IColumn<IProduct>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'name', label: 'Название', render: item => item.name },
  { key: 'size', label: 'Размер', render: item => item.options.size },
  { key: 'amount', label: 'Цена', render: item => item.options.amount },
  { key: 'active', label: 'Статус активности', render: item => formatActive(item.active) },
  {
    key: 'createdAt',
    label: 'Дата создания',
    render: item => formatDate(item.createdAt),
  },
];
