import { FC } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

interface BooleanFilterProps {
  label: string;
  value: boolean | undefined;
  onChange: (val: boolean | undefined) => void;
}

const BooleanFilter: FC<BooleanFilterProps> = ({ label, value, onChange }) => {
  const listboxValue = value === undefined ? 'unset' : value ? 'true' : 'false';

  const handleChange = (val: string) => {
    if (val === 'unset') onChange(undefined);
    else if (val === 'true') onChange(true);
    else onChange(false);
  };

  return (
    <div>
      <label className="block mb-1">{label}</label>
      <Listbox value={listboxValue} onChange={handleChange}>
        <div className="relative">
          <ListboxButton className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left">
            {value === undefined ? '--' : value ? 'Активен' : 'Не активен'}
          </ListboxButton>
          <ListboxOptions className="absolute z-10 bg-[#1e1e1e] border border-[#444] mt-1 w-full rounded-md shadow-lg max-h-60 overflow-auto">
            <ListboxOption
              value="unset"
              className={({ active }) =>
                `cursor-pointer select-none p-2 rounded ${
                  active ? 'bg-blue-600 text-white' : 'text-white'
                }`
              }
            >
              --
            </ListboxOption>
            <ListboxOption
              value="true"
              className={({ active }) =>
                `cursor-pointer select-none p-2 rounded ${
                  active ? 'bg-blue-600 text-white' : 'text-white'
                }`
              }
            >
              Активен
            </ListboxOption>
            <ListboxOption
              value="false"
              className={({ active }) =>
                `cursor-pointer select-none p-2 rounded ${
                  active ? 'bg-blue-600 text-white' : 'text-white'
                }`
              }
            >
              Не активен
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default BooleanFilter;
