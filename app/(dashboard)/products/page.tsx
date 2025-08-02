'use client';

import FilterToggle from '@/app/components/FilterToggle';
import Header from '@/app/components/Header';
import Table from '@/app/components/Table';
import { productsColumns } from '@/app/config/columns/productsColumns';
import { productFilters } from '@/app/config/filters/productFilters';
import { useProductsStore } from '@/app/stores/productsStore';
import { applyFilters } from '@/app/utils/applyFilters';
import { useMemo, useState } from 'react';

const Page = () => {
  const products = useProductsStore(state => state.products);
  const updateProduct = useProductsStore(state => state.updateProduct);

  const [filterValues, setFilterValues] = useState<Record<string, unknown>>({});

  const filteredData = useMemo(
    () => applyFilters(products, productFilters, filterValues),
    [products, filterValues],
  );

  return (
    <>
      <Header />
      <main className="w-[85%] mx-auto my-auto">
        <FilterToggle filters={productFilters} values={filterValues} onChange={setFilterValues} />
        <Table
          data={filteredData}
          onUpdate={updateProduct}
          filters={productFilters}
          columns={productsColumns}
        />
      </main>
    </>
  );
};

export default Page;
