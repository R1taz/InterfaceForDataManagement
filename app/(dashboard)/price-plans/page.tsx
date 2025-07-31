'use client';

import Table from '@/app/components/Table/Table';
import { usePricePlansStore } from '@/app/stores/pricePlansStore';
import { IColumn } from '@/app/stores/table';
import { IPricePlan } from '@/app/types/price-plans';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

const Page = () => {
  const pricePlans = usePricePlansStore(state => state.pricePlans);

  const columns: IColumn<IPricePlan>[] = [
    { key: 'id', label: 'ID', render: item => item.id },
    { key: 'description', label: 'Name', render: item => item.description },
    { key: 'active', label: 'Active', render: item => formatActive(item.active) },
    {
      key: 'createdAt',
      label: 'Created At',
      render: item => formatDate(item.createdAt),
    },
  ];

  return (
    <main className="w-1/2 mx-auto my-auto">
      <Table data={pricePlans} columns={columns} />
    </main>
  );
};

export default Page;
