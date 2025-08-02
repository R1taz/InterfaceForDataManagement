'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FilterConfig } from '../types/filters';
import { setValueByPath } from '../utils/setValueByPath';
import { getValueByPath } from '../utils/getValueByPath';

interface Props<T> {
  record: T;
  filters: FilterConfig<T>[];
  onSave: (updated: T) => void;
  onClose: () => void;
}

const EditModal = <T,>({ record, filters, onSave, onClose }: Props<T>) => {
  const [form, setForm] = useState<T>(record);

  const handleChange = (key: string, value: unknown) => {
    setForm(prev => {
      const updated = { ...prev };
      setValueByPath(updated as Record<string, unknown>, key, value);
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">Редактирование</h2>
      <form className="space-y-4">
        {filters.map(filter => {
          const value = getValueByPath(form as Record<string, unknown>, filter.key);

          const isEditable =
            typeof filter.editable === 'function'
              ? filter.editable(record)
              : (filter.editable ?? true);

          if (!isEditable) return null;

          switch (filter.type) {
            case 'text':
            case 'number':
              return (
                <div key={filter.key} className="flex flex-col gap-1">
                  <label className="text-sm text-white">{filter.label}</label>
                  <input
                    type={filter.type}
                    className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={
                      typeof value === 'string' ||
                      typeof value === 'number' ||
                      typeof value === 'undefined'
                        ? (value ?? '')
                        : value === null
                          ? ''
                          : String(value)
                    }
                    onChange={e => {
                      const val = e.target.value;
                      handleChange(
                        filter.key,
                        filter.type === 'number' ? (val === '' ? null : Number(val)) : val,
                      );
                    }}
                  />
                </div>
              );
            case 'boolean':
              return (
                <div key={filter.key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!value}
                    onChange={e => handleChange(filter.key, e.target.checked)}
                    className="cursor-pointer w-4 h-4"
                  />
                  <label className="text-sm text-white">{filter.label}</label>
                </div>
              );
            case 'select':
              const selected = typeof value === 'string' ? value : '';
              return (
                <div key={filter.key} className="flex flex-col gap-1">
                  <label className="text-sm text-white">{filter.label}</label>
                  <Listbox value={selected} onChange={val => handleChange(filter.key, val)}>
                    <div className="relative">
                      <ListboxButton className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {selected || 'Выберите...'}
                      </ListboxButton>
                      <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#1e1e1e] border border-[#444] text-white shadow-lg">
                        <ListboxOption
                          key="__none__"
                          value=""
                          className="px-3 py-2 cursor-pointer hover:bg-[#2e2e2e]"
                        >
                          --
                        </ListboxOption>
                        {(filter.options || []).map(option => (
                          <ListboxOption
                            key={option}
                            value={option}
                            className="px-3 py-2 cursor-pointer hover:bg-[#2e2e2e]"
                          >
                            {option}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>
              );
            case 'date-range':
              return (
                <div key={filter.key} className="flex flex-col gap-1">
                  <label className="text-sm text-white">{filter.label}</label>
                  <input
                    type="date"
                    className="bg-[#1e1e1e] border border-[#444] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={value ? String(value).slice(0, 10) : ''}
                    onChange={e => handleChange(filter.key, e.target.value)}
                  />
                </div>
              );
            default:
              return null;
          }
        })}

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-500 transition"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={() => onSave(form)}
            className="cursor-pointer px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
