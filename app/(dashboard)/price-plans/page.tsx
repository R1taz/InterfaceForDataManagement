'use client';

import FiltersPanel from '@/app/components/FiltersPanel';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { pricePlansColumns } from '@/app/config/columns/pricePlansColumns';
import { pricePlansFilters } from '@/app/config/filters/pricePlansFilters';
import { usePricePlansStore } from '@/app/stores/pricePlansStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useState } from 'react';

const Page = () => {
  const pricePlans = usePricePlansStore(state => state.pricePlans);
  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});
  const filteredData = applyFilters(pricePlans, pricePlansFilters, filterValues);

  return (
    <>
      <Header />
      <main className="w-1/2 mx-auto my-auto">
        <FiltersPanel
          filters={pricePlansFilters}
          values={filterValues}
          onChange={setFilterValues}
        />
        <Table data={filteredData} columns={pricePlansColumns} />
      </main>
    </>
  );
};

export default Page;
