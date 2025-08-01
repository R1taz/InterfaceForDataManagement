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
      <label className="block mb-1">{filter.label}</label>
      <Listbox value={selected} onChange={val => onChange(filter.key, val)}>
        <div className="relative">
          <ListboxButton className="border p-2 w-full rounded text-left">
            {selected || '--'}
          </ListboxButton>
          <ListboxOptions className="absolute z-10 bg-white border mt-1 w-full rounded shadow">
            <ListboxOption value="" className="p-2 hover:bg-gray-100 cursor-pointer">
              --
            </ListboxOption>
            {(filter.options || []).map(option => (
              <ListboxOption
                key={option}
                value={option}
                className="p-2 hover:bg-gray-100 cursor-pointer"
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
