'use client'

import { useState, useMemo } from 'react'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Label,
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface ComboboxOption {
    id: number | string
    name: string
}

interface ComboboxSimpleProps {
    /** Label text above the combobox */
    label: string
    /** Array of options */
    options: ComboboxOption[]
    /** Initially selected option */
    defaultValue?: ComboboxOption | null
    /** Callback when selection changes */
    onChange?: (option: ComboboxOption | null) => void
}

export default function ComboboxSimple({
    label,
    options,
    defaultValue = null,
    onChange,
}: ComboboxSimpleProps) {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState<ComboboxOption | null>(defaultValue)

    const filtered = useMemo(() => {
        if (query === '') return options
        return options.filter((opt) =>
            opt.name.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, options])

    function handleChange(value: ComboboxOption | null) {
        setSelected(value)
        setQuery('')
        onChange?.(value)
    }

    return (
        <Combobox as="div" value={selected} onChange={handleChange}>
            <Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                {label}
            </Label>
            <div className="relative mt-2">
                <ComboboxInput
                    className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    displayValue={(opt: ComboboxOption | null) => opt?.name ?? ''}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="size-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                </ComboboxButton>

                <ComboboxOptions
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm dark:bg-gray-800 dark:ring-white/10"
                >
                    {filtered.length === 0 && query !== '' ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-500 dark:text-gray-400">
                            Nothing found.
                        </div>
                    ) : (
                        filtered.map((opt) => (
                            <ComboboxOption
                                key={opt.id}
                                value={opt}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none dark:text-white"
                            >
                                <span className="block truncate group-data-[selected]:font-semibold">
                                    {opt.name}
                                </span>
                                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white dark:text-indigo-400">
                                    <CheckIcon className="size-5" aria-hidden="true" />
                                </span>
                            </ComboboxOption>
                        ))
                    )}
                </ComboboxOptions>
            </div>
        </Combobox>
    )
}
