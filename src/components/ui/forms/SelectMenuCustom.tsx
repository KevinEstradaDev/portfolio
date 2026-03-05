'use client';

import { useState } from 'react';
import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export interface SelectOption {
    id: string | number;
    name: string;
}

interface SelectMenuCustomProps {
    /** Label displayed above the select */
    label: string;
    /** List of selectable options */
    options: SelectOption[];
    /** Default selected option (first option if omitted) */
    defaultValue?: SelectOption;
    /** Change callback */
    onChange?: (option: SelectOption) => void;
}

export default function SelectMenuCustom({
    label,
    options,
    defaultValue,
    onChange,
}: SelectMenuCustomProps) {
    const [selected, setSelected] = useState<SelectOption>(
        defaultValue ?? options[0],
    );

    function handleChange(option: SelectOption) {
        setSelected(option);
        onChange?.(option);
    }

    return (
        <Listbox value={selected} onChange={handleChange}>
            <Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                {label}
            </Label>
            <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white dark:bg-white/5 py-1.5 pr-2 pl-3 text-left text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 truncate pr-6">
                        {selected.name}
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 dark:text-gray-400 sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:opacity-0 sm:text-sm"
                >
                    {options.map((option) => (
                        <ListboxOption
                            key={option.id}
                            value={option}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 dark:text-white select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-none"
                        >
                            <span className="block truncate font-normal group-data-selected:font-semibold">
                                {option.name}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 dark:text-indigo-400 group-data-focus:text-white group-not-data-selected:hidden">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}
