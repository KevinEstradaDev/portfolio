'use client'

import { useState } from 'react'

interface CheckboxOption {
    id: string
    /** Display title */
    title: string
    /** Description shown below the title */
    description: string
}

interface CheckboxListDescriptionProps {
    /** Fieldset legend text */
    label: string
    /** Array of checkbox options */
    options: CheckboxOption[]
    /** Initially checked option ids */
    defaultChecked?: string[]
    /** Callback when any checkbox changes */
    onChange?: (checkedIds: string[]) => void
}

export default function CheckboxListDescription({
    label,
    options,
    defaultChecked = [],
    onChange,
}: CheckboxListDescriptionProps) {
    const [checked, setChecked] = useState<Set<string>>(new Set(defaultChecked))

    function handleToggle(id: string) {
        setChecked((prev) => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            onChange?.(Array.from(next))
            return next
        })
    }

    return (
        <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {label}
            </legend>
            <div className="mt-4 space-y-5">
                {options.map((option) => (
                    <div key={option.id} className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-[1fr] place-items-center">
                                <input
                                    id={option.id}
                                    name={option.id}
                                    type="checkbox"
                                    checked={checked.has(option.id)}
                                    onChange={() => handleToggle(option.id)}
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-gray-600 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label
                                htmlFor={option.id}
                                className="font-medium text-gray-900 dark:text-white cursor-pointer"
                            >
                                {option.title}
                            </label>
                            <p className="text-gray-500 dark:text-gray-400">
                                {option.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}
