'use client';

import { FilterConfig } from '@/app/types/filters';
import BooleanFilter from './BooleanFilter';
import { DateRangeFilter } from './DateRangeFilter';
import { SelectFilter } from './SelectFilter';
import { TextOrNumberFilter } from './TextOrNumberFilter';

interface Props<T> {
  filters: FilterConfig<T>[];
  values: Record<string, unknown>;
  onChange: (newValues: Record<string, unknown>) => void;
}

const FiltersPanel = <T,>({ filters, values, onChange }: Props<T>) => {
  const handleChange = (key: string, value: unknown) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <div className="space-y-4 mb-4">
      {filters.map(filter => {
        const rawValue = values[filter.key];

        switch (filter.type) {
          case 'text':
          case 'number':
            return (
              <TextOrNumberFilter
                key={filter.key}
                filter={filter}
                value={
                  typeof rawValue === 'string' || typeof rawValue === 'number'
                    ? rawValue
                    : undefined
                }
                onChange={handleChange}
              />
            );
          case 'boolean':
            return (
              <BooleanFilter
                key={filter.key}
                label={filter.label}
                value={typeof rawValue === 'boolean' ? rawValue : undefined}
                onChange={val => handleChange(filter.key, val)}
              />
            );
          case 'select':
            return (
              <SelectFilter
                key={filter.key}
                filter={filter}
                value={typeof rawValue === 'string' ? rawValue : ''}
                onChange={handleChange}
              />
            );
          case 'date-range':
            const isDateRange = (val: unknown): val is [string, string] =>
              Array.isArray(val) &&
              val.length === 2 &&
              typeof val[0] === 'string' &&
              typeof val[1] === 'string';

            return (
              <DateRangeFilter
                key={filter.key}
                filter={filter}
                value={isDateRange(rawValue) ? rawValue : undefined}
                onChange={handleChange}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FiltersPanel;
