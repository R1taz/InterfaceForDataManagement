import React from 'react';

interface IColumn<T> {
  key: string
  label: string
  render: (item: T) => React.ReactNode
}

interface Props<T> {
  data: T[]
  columns: IColumn<T>[]
}

const Table = <T,>({data, columns}: Props<T>) => {
  return (
    <table className="w-full border-separate border-spacing-y-2 text-left">
      <thead>
        {columns.map(column => (
          <tr key={column.key} className="text-sm text-gray-400">
            <th className="px-4 py-2"> { column.label }</th>
          </tr>
        ))}
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{columns.map(col => (
            <td key={col.key}>{col.render(item)}</td>
          ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
