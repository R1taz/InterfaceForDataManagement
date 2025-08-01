import React, { FC } from 'react';

interface Props {
  filter: { key: string; label: string };
  value: [string, string] | undefined;
  onChange: (key: string, val: [string, string]) => void;
}

export const DateRangeFilter: FC<Props> = ({ filter, value, onChange }) => {
  const [from, to] = Array.isArray(value) ? value : ['', ''];

  return (
    <div key={filter.key}>
      <label className="block mb-1">{filter.label}</label>
      <div className="flex items-center space-x-2">
        <input
          type="date"
          value={from}
          onChange={e => onChange(filter.key, [e.target.value, to])}
          className="border p-2 rounded"
        />
        <span>—</span>
        <input
          type="date"
          value={to}
          onChange={e => onChange(filter.key, [from, e.target.value])}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};
