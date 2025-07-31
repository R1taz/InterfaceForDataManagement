'use client';

import Table from '@/app/components/Table/Table';
import { useProductsStore } from '@/app/stores/productsStore';
import { IColumn } from '@/app/stores/table';
import { IProduct } from '@/app/types/products';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

const Page = () => {
  const products = useProductsStore(state => state.products);

  const columns: IColumn<IProduct>[] = [
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

  return (
    <main className="w-1/2 mx-auto my-auto">
      <Table data={products} columns={columns} />
    </main>
  );
};

export default Page;
