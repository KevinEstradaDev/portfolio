'use client'

import { useState } from 'react'

interface PlanDetail {
    label: string
    value: string
}

interface Plan {
    id: string
    name: string
    details: PlanDetail[]
}

interface RadioGroupSimpleTableProps {
    /** Label displayed as the fieldset legend */
    label: string
    /** Array of plan options with detail columns */
    plans: Plan[]
    /** Initially selected plan id */
    defaultValue?: string
    /** Callback when selection changes */
    onChange?: (id: string) => void
}

export default function RadioGroupSimpleTable({
    label,
    plans,
    defaultValue,
    onChange,
}: RadioGroupSimpleTableProps) {
    const [selected, setSelected] = useState(defaultValue ?? plans[0]?.id ?? '')

    function handleChange(id: string) {
        setSelected(id)
        onChange?.(id)
    }

    // Extract detail column headers from first plan
    const columnHeaders = plans[0]?.details.map((d) => d.label) ?? []

    return (
        <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {label}
            </legend>

            {/* ── Desktop table ── */}
            <div className="mt-4 hidden sm:block">
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
                                >
                                    Plan
                                </th>
                                {columnHeaders.map((header) => (
                                    <th
                                        key={header}
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                                    >
                                        {header}
                                    </th>
                                ))}
                                <th
                                    scope="col"
                                    className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                >
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                            {plans.map((plan) => (
                                <tr
                                    key={plan.id}
                                    className={`cursor-pointer transition-colors ${selected === plan.id
                                            ? 'bg-indigo-50 dark:bg-indigo-950/40'
                                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                    onClick={() => handleChange(plan.id)}
                                >
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                                        {plan.name}
                                    </td>
                                    {plan.details.map((detail) => (
                                        <td
                                            key={detail.label}
                                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            {detail.value}
                                        </td>
                                    ))}
                                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-6">
                                        <input
                                            type="radio"
                                            name={label.replace(/\s+/g, '-').toLowerCase()}
                                            checked={selected === plan.id}
                                            onChange={() => handleChange(plan.id)}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-600 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 before:absolute before:inset-0 before:m-auto before:size-1.5 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Mobile stacked cards ── */}
            <div className="mt-4 space-y-4 sm:hidden">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative cursor-pointer rounded-lg border p-4 transition-colors ${selected === plan.id
                                ? 'border-indigo-600 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950/40'
                                : 'border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800'
                            }`}
                        onClick={() => handleChange(plan.id)}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {plan.name}
                            </span>
                            <input
                                type="radio"
                                name={`${label.replace(/\s+/g, '-').toLowerCase()}-mobile`}
                                checked={selected === plan.id}
                                onChange={() => handleChange(plan.id)}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-600 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:outline-indigo-500 before:absolute before:inset-0 before:m-auto before:size-1.5 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
                            />
                        </div>
                        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                            {plan.details.map((detail) => (
                                <div key={detail.label} className="flex justify-between col-span-1">
                                    <dt className="text-gray-500 dark:text-gray-400">
                                        {detail.label}
                                    </dt>
                                    <dd className="font-medium text-gray-900 dark:text-white">
                                        {detail.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}
