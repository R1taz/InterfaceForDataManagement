export type FilterType = 'text' | 'number' | 'boolean' | 'date-range' | 'select';

export interface BaseFilter<T = unknown> {
  key: string;
  label: string;
  type: FilterType;
  options?: string[];
  editable?: boolean | ((record: T) => boolean);
}

export interface TextFilter<T> extends BaseFilter<T> {
  type: 'text';
}

export interface NumberFilter<T> extends BaseFilter<T> {
  type: 'number';
}

export interface BooleanFilter<T> extends BaseFilter<T> {
  type: 'boolean';
}

export interface DateRangeFilter<T> extends BaseFilter<T> {
  type: 'date-range';
}

export interface SelectFilter<T> extends BaseFilter<T> {
  type: 'select';
  options: string[];
}

export type FilterConfig<T> =
  | TextFilter<T>
  | NumberFilter<T>
  | BooleanFilter<T>
  | DateRangeFilter<T>
  | SelectFilter<T>;
