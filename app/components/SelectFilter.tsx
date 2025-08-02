import React, { FC } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

interface Props {
  filter: { key: string; label: string; options?: string[] };
  value: string | undefined;
  onChange: (key: string, val: string) => void;
}

export const SelectFilter: FC<Props> = ({ filter, value, onChange }) => {
  const selected = typeof value === 'string' ? value : '';

  return (
    <div key={filter.key}>
      <label className="block mb-1 text-white">{filter.label}</label>
      <Listbox value={selected} onChange={val => onChange(filter.key, val)}>
        <div className="relative">
          <ListboxButton className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left">
            {selected || '--'}
          </ListboxButton>
          <ListboxOptions className="absolute z-10 bg-[#1e1e1e] border border-[#444] mt-1 w-full rounded-md shadow-lg max-h-60 overflow-auto">
            <ListboxOption
              value=""
              className={({ active }) =>
                `cursor-pointer select-none p-2 rounded ${
                  active ? 'bg-blue-600 text-white' : 'text-white'
                }`
              }
            >
              --
            </ListboxOption>
            {(filter.options || []).map(option => (
              <ListboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none p-2 rounded ${
                    active ? 'bg-blue-600 text-white' : 'text-white'
                  }`
                }
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
