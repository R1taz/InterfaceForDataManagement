export type FilterType = 'text' | 'number' | 'boolean' | 'date-range' | 'select';

export interface BaseFilter {
  key: string;
  label: string;
  type: FilterType;
}

export interface TextFilter extends BaseFilter {
  type: 'text';
}

export interface NumberFilter extends BaseFilter {
  type: 'number';
}

export interface BooleanFilter extends BaseFilter {
  type: 'boolean';
}

export interface DateRangeFilter extends BaseFilter {
  type: 'date-range';
}

export interface SelectFilter extends BaseFilter {
  type: 'select';
  options: string[];
}

export type FilterConfig =
  | TextFilter
  | NumberFilter
  | BooleanFilter
  | DateRangeFilter
  | SelectFilter;
