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
          <ListboxButton className="border p-2 w-full rounded text-left">
            {value === undefined ? '--' : value ? 'Yes' : 'No'}
          </ListboxButton>
          <ListboxOptions className="absolute z-10 bg-white border mt-1 w-full rounded shadow">
            <ListboxOption value="unset" className="p-2 hover:bg-gray-100 cursor-pointer">
              --
            </ListboxOption>
            <ListboxOption value="true" className="p-2 hover:bg-gray-100 cursor-pointer">
              Yes
            </ListboxOption>
            <ListboxOption value="false" className="p-2 hover:bg-gray-100 cursor-pointer">
              No
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default BooleanFilter;
