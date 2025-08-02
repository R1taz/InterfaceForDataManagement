import { IColumn } from '@/app/stores/table';
import { IPricePlan } from '@/app/types/price-plans';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

export const pricePlansColumns: IColumn<IPricePlan>[] = [
  { key: 'id', label: 'ID', render: item => item.id },
  { key: 'description', label: 'Описание', render: item => item.description },
  { key: 'active', label: 'Статус активности', render: item => formatActive(item.active) },
  {
    key: 'createdAt',
    label: 'Дата создания',
    render: item => formatDate(item.createdAt),
  },
];
