export interface IColumn<T> {
  key: string;
  label: string;
  render: (item: T) => React.ReactNode;
}
