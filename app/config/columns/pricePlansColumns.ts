import { IColumn } from '@/app/stores/table';
import { IPricePlan } from '@/app/types/price-plans';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const pricePlansColumns: IColumn<IPricePlan>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'description', label: 'Name', render: item => item.description },
  { key: 'active', label: 'Active', render: item => formatActive(item.active) },
  {
    key: 'createdAt',
    label: 'Created At',
    render: item => formatDate(item.createdAt),
  },
];
