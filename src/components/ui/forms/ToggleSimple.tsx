'use client'

import { useState } from 'react'

interface ToggleSimpleProps {
    /** Label for the toggle (screen-reader only by default) */
    label?: string
    /** Whether the toggle starts enabled */
    defaultEnabled?: boolean
    /** Callback when toggled */
    onChange?: (enabled: boolean) => void
}

export default function ToggleSimple({
    label = 'Toggle',
    defaultEnabled = false,
    onChange,
}: ToggleSimpleProps) {
    const [enabled, setEnabled] = useState(defaultEnabled)

    function handleToggle() {
        const next = !enabled
        setEnabled(next)
        onChange?.(next)
    }

    return (
        <button
            type="button"
            role="switch"
            aria-checked={enabled}
            aria-label={label}
            onClick={handleToggle}
            className={`${enabled ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-gray-700'
                } relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500`}
        >
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
        </button>
    )
}
