'use client'

import { useState } from 'react'

interface RadioOption {
    id: string
    title: string
}

interface RadioGroupSimpleListProps {
    /** Label displayed as the fieldset legend */
    label: string
    /** Array of radio options */
    options: RadioOption[]
    /** Initially selected option id */
    defaultValue?: string
    /** Callback when selection changes */
    onChange?: (id: string) => void
}

export default function RadioGroupSimpleList({
    label,
    options,
    defaultValue,
    onChange,
}: RadioGroupSimpleListProps) {
    const [selected, setSelected] = useState(defaultValue ?? options[0]?.id ?? '')

    function handleChange(id: string) {
        setSelected(id)
        onChange?.(id)
    }

    return (
        <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {label}
            </legend>
            <div className="mt-4 space-y-4">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center">
                        <input
                            id={option.id}
                            name={label.replace(/\s+/g, '-').toLowerCase()}
                            type="radio"
                            checked={selected === option.id}
                            onChange={() => handleChange(option.id)}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-600 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 before:absolute before:inset-0 before:m-auto before:size-1.5 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
                        />
                        <label
                            htmlFor={option.id}
                            className="ml-3 block text-sm/6 font-medium text-gray-900 dark:text-white cursor-pointer"
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}
