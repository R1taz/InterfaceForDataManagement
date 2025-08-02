import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import FiltersPanel from './FiltersPanel';
import { FilterConfig } from '../types/filters';
import { Button } from '@headlessui/react';

interface Props<T = unknown> {
  filters: FilterConfig<T>[];
  values: Record<string, unknown>;
  onChange: (values: Record<string, unknown>) => void;
}

const FilterToggle = <T,>({ filters, values, onChange }: Props<T>) => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-lg px-10 py-2 transition bg-blue-600 hover:bg-blue-500 cursor-pointer my-6"
        onClick={() => setFiltersOpen(true)}
      >
        Фильтры
      </Button>
      {filtersOpen && (
        <ModalWrapper onClose={() => setFiltersOpen(false)}>
          <FiltersPanel filters={filters} values={values} onChange={onChange} />
        </ModalWrapper>
      )}
    </>
  );
};

export default FilterToggle;
