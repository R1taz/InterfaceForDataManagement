'use client';

import FiltersPanel from '@/app/components/FiltersPanel';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { productsColumns } from '@/app/config/columns/productsColumns';
import { productFilters } from '@/app/config/filters/productFilters';
import { useProductsStore } from '@/app/stores/productsStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useState } from 'react';

const Page = () => {
  const products = useProductsStore(state => state.products);
  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});
  const filteredData = applyFilters(products, productFilters, filterValues);

  return (
    <>
      <Header />
      <main className="w-1/2 mx-auto my-auto">
        <FiltersPanel filters={productFilters} values={filterValues} onChange={setFilterValues} />
        <Table data={filteredData} columns={productsColumns} />
      </main>
    </>
  );
};

export default Page;
