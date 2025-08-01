'use client';

import FiltersPanel from '@/app/components/FiltersPanel';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { pagesColumns } from '@/app/config/columns/pagesColumns';
import { pagesFilters } from '@/app/config/filters/pagesFilters';
import { usePagesStore } from '@/app/stores/pagesStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useState } from 'react';

const Page = () => {
  const pages = usePagesStore(state => state.pages);
  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});
  const filteredData = applyFilters(pages, pagesFilters, filterValues);

  return (
    <>
      <Header />
      <main className="w-1/2 mx-auto my-auto">
        <FiltersPanel filters={pagesFilters} values={filterValues} onChange={setFilterValues} />
        <Table data={filteredData} columns={pagesColumns} />
      </main>
    </>
  );
};

export default Page;
