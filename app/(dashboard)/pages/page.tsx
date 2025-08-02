'use client';

import FilterToggle from '@/app/components/FilterToggle';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { pagesColumns } from '@/app/config/columns/pagesColumns';
import { pagesFilters } from '@/app/config/filters/pagesFilters';
import { usePagesStore } from '@/app/stores/pagesStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useMemo, useState } from 'react';

const Page = () => {
  const pages = usePagesStore(state => state.pages);
  const updateProduct = usePagesStore(state => state.updateProduct);

  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});

  const filteredData = useMemo(
    () => applyFilters(pages, pagesFilters, filterValues),
    [pages, filterValues],
  );

  return (
    <>
      <Header />
      <main className="w-[85%] mx-auto my-auto">
        <FilterToggle filters={pagesFilters} values={filterValues} onChange={setFilterValues} />
        <Table
          data={filteredData}
          onUpdate={updateProduct}
          filters={pagesFilters}
          columns={pagesColumns}
        />
      </main>
    </>
  );
};

export default Page;
