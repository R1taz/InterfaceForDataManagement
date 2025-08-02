import React, { FC } from 'react';

interface Props {
  filter: { key: string; label: string; type: 'text' | 'number' };
  value: string | number | undefined;
  onChange: (key: string, val: string | number) => void;
}

export const TextOrNumberFilter: FC<Props> = ({ filter, value, onChange }) => {
  const stringValue = value !== undefined && value !== null ? String(value) : '';

  return (
    <div key={filter.key}>
      <label className="block mb-1">{filter.label}</label>
      <input
        type={filter.type}
        value={stringValue}
        onChange={e =>
          onChange(filter.key, filter.type === 'number' ? Number(e.target.value) : e.target.value)
        }
        className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
};
