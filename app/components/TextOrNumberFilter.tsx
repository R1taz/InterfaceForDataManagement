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
        className="border p-2 w-full rounded"
      />
    </div>
  );
};
