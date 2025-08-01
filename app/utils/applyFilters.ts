import { FilterConfig } from '@/app/types/filters';
import { getValueByPath } from './getValueByPath';

export function applyFilters<T>(
  data: T[],
  filters: FilterConfig[],
  values: Record<string, unknown>,
): T[] {
  return data.filter(item => {
    return filters.every(filter => {
      const value = getValueByPath(item as Record<string, unknown>, filter.key);
      const filterValue = values[filter.key];

      if (filterValue === undefined || filterValue === '') return true;

      switch (filter.type) {
        case 'text':
          return typeof value === 'string'
            ? value.toLowerCase().includes(String(filterValue).toLowerCase())
            : false;

        case 'number':
          return typeof value === 'number' || typeof value === 'string'
            ? Number(value) === Number(filterValue)
            : false;

        case 'boolean':
          return typeof value === 'boolean'
            ? value === Boolean(filterValue)
            : Boolean(value) === Boolean(filterValue);

        case 'select':
          return value === filterValue;

        case 'date-range': {
          if (!Array.isArray(filterValue)) return true;
          const [from, to] = filterValue as [string?, string?];
          const date = new Date(String(value)).getTime();
          const fromDate = from ? new Date(from).getTime() : null;
          const toDate = to ? new Date(to).getTime() : null;
          return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
        }

        default:
          return true;
      }
    });
  });
}
