'use client';

import FilterToggle from '@/app/components/FilterToggle';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { pricePlansColumns } from '@/app/config/columns/pricePlansColumns';
import { pricePlansFilters } from '@/app/config/filters/pricePlansFilters';
import { usePricePlansStore } from '@/app/stores/pricePlansStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useState } from 'react';

const Page = () => {
  const pricePlans = usePricePlansStore(state => state.pricePlans);
  const updateProduct = usePricePlansStore(state => state.updateProduct);

  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});

  const filteredData = Array.isArray(pricePlans)
    ? applyFilters(pricePlans, pricePlansFilters, filterValues)
    : [];

  return (
    <>
      <Header />
      <main className="w-[85%] mx-auto my-auto">
        <FilterToggle
          filters={pricePlansFilters}
          values={filterValues}
          onChange={setFilterValues}
        />
        <Table
          data={filteredData}
          onUpdate={updateProduct}
          filters={pricePlansFilters}
          columns={pricePlansColumns}
        />
      </main>
    </>
  );
};

export default Page;
