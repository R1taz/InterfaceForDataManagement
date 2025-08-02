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
      <label className="block mb-1 md:text-start text-center py-3 md:my-0">{filter.label}</label>
      <div className="flex flex-col md:flex-row items-center space-x-2">
        <input
          type="date"
          value={from}
          onChange={e => onChange(filter.key, [e.target.value, to])}
          className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span>—</span>
        <input
          type="date"
          value={to}
          onChange={e => onChange(filter.key, [from, e.target.value])}
          className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
