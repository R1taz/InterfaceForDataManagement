'use client';

import { IColumn } from '@/app/stores/table';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import EditModal from './EditModal';
import { FilterConfig } from '../types/filters';
import ModalWrapper from './ModalWrapper';

interface WithId {
  id: number;
}

interface Props<T extends WithId> {
  data: T[];
  columns: IColumn<T>[];
  onUpdate: (record: T) => void;
  filters: FilterConfig<T>[];
}

const Table = <T extends WithId>({ data, columns, filters, onUpdate }: Props<T>) => {
  const [editingRecord, setEditingRecord] = useState<T | null>(null);

  const handleSave = (updated: T) => {
    onUpdate(updated);
    setEditingRecord(null);
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-[#333333] shadow-md">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-center text-[#a0a0a0] font-semibold whitespace-nowrap">
            {columns.map(column => (
              <th
                key={column.key}
                className="px-4 py-5 border-b border-r border-[#444] bg-[#333333]"
              >
                {column.label}
              </th>
            ))}
            <th className="px-4 py-5 border-b border-[#444] bg-[#333333]">Действия</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="text-white whitespace-nowrap">
              {columns.map(col => (
                <td
                  key={col.key}
                  className={`px-6 py-3 border-r border-[#444] bg-[#333333] ${
                    rowIndex !== data.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {col.render(item)}
                </td>
              ))}
              <td
                className={`text-center px-6 py-3 border-[#444] bg-[#333333] ${
                  rowIndex !== data.length - 1 ? 'border-b' : ''
                }`}
              >
                <Button
                  className="cursor-pointer transition hover:text-blue-500"
                  onClick={() => setEditingRecord(item)}
                >
                  Редактировать
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRecord && (
        <ModalWrapper onClose={() => setEditingRecord(null)}>
          <EditModal
            record={editingRecord}
            filters={filters}
            onSave={handleSave}
            onClose={() => setEditingRecord(null)}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Table;
