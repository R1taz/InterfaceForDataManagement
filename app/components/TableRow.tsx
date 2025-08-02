import { Button } from '@headlessui/react';
import { memo } from 'react';
import { IColumn } from '../stores/table';

interface WithId {
  id: number;
}

interface Props<T extends WithId> {
  item: T;
  columns: IColumn<T>[];
  isLastRow: boolean;
  onEdit: (item: T) => void;
}

const TableRow = <T extends WithId>({ item, columns, isLastRow, onEdit }: Props<T>) => {
  return (
    <tr className="text-white whitespace-nowrap">
      {columns.map(col => (
        <td
          key={col.key}
          className={`px-6 py-3 border-r border-[#444] bg-[#333333] ${
            !isLastRow ? 'border-b' : ''
          }`}
        >
          {col.render(item)}
        </td>
      ))}

      <td
        className={`text-center px-6 py-3 border-[#444] bg-[#333333] ${
          !isLastRow ? 'border-b' : ''
        }`}
      >
        <Button
          className="cursor-pointer transition hover:text-blue-500"
          onClick={() => onEdit(item)}
        >
          Редактировать
        </Button>
      </td>
    </tr>
  );
};

const TableRowWrapper = memo(TableRow) as <T extends WithId>(props: Props<T>) => React.JSX.Element;

export default TableRowWrapper;
