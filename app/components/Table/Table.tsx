import { IColumn } from '@/app/stores/table';

interface Props<T> {
  data: T[];
  columns: IColumn<T>[];
}

const Table = <T,>({ data, columns }: Props<T>) => {
  return (
    <div className="w-full bg-[#333333] shadow-md overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-white font-semibold">
            {columns.map((column, index) => (
              <th
                key={column.key}
                className={`px-4 py-3 border-b border-[#444] bg-[#333333] ${index !== columns.length - 1 ? 'border-r border-[#444]' : ''}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="text-white">
              {columns.map((col, colIndex) => (
                <td
                  key={col.key}
                  className={`px-4 py-2 border-[#444] bg-[#333333]
                    ${rowIndex !== data.length - 1 ? 'border-b' : ''}
                    ${colIndex !== columns.length - 1 ? 'border-r border-[#444]' : ''}`}
                >
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
