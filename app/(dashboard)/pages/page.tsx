'use client';

import Table from '@/app/components/Table/Table';
import { usePagesStore } from '@/app/stores/pagesStore';
import { IColumn } from '@/app/stores/table';
import { IPage } from '@/app/types/pages';
import { formatActive } from '@/app/utils/formatActive';
import { formatDate } from '@/app/utils/formatDate';

const Page = () => {
  const pages = usePagesStore(state => state.pages);

  const columns: IColumn<IPage>[] = [
    { key: 'id', label: 'ID', render: item => item.id },
    { key: 'title', label: 'Title', render: item => item.title },
    { key: 'active', label: 'Active', render: item => formatActive(item.active) },
    {
      key: 'publishedAt',
      label: 'Published At',
      render: item => formatDate(item.publishedAt),
    },
    {
      key: 'updatedAt',
      label: 'Updated At',
      render: item => formatDate(item.updatedAt),
    },
  ];

  return (
    <main className="w-1/2 mx-auto my-auto">
      <Table data={pages} columns={columns} />
    </main>
  );
};

export default Page;
