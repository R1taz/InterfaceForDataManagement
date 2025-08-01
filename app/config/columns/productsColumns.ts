import { IColumn } from '@/app/stores/table';
import { IProduct } from '@/app/types/products';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const productsColumns: IColumn<IProduct>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'name', label: 'Name', render: item => item.name },
  { key: 'size', label: 'Size', render: item => item.options.size },
  { key: 'amount', label: 'Amount', render: item => item.options.amount },
  { key: 'active', label: 'Active', render: item => formatActive(item.active) },
  {
    key: 'createdAt',
    label: 'Created At',
    render: item => formatDate(item.createdAt),
  },
];
