'use client'

import { useState } from 'react'

interface ToggleWithIconProps {
    /** Label for the toggle (screen-reader only by default) */
    label?: string
    /** Whether the toggle starts enabled */
    defaultEnabled?: boolean
    /** Callback when toggled */
    onChange?: (enabled: boolean) => void
}

export default function ToggleWithIcon({
    label = 'Toggle',
    defaultEnabled = false,
    onChange,
}: ToggleWithIconProps) {
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
                    } pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            >
                {/* X icon (off state) */}
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'
                        } absolute inset-0 flex items-center justify-center transition-opacity`}
                >
                    <svg className="size-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                {/* Check icon (on state) */}
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'
                        } absolute inset-0 flex items-center justify-center transition-opacity`}
                >
                    <svg className="size-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                </span>
            </span>
        </button>
    )
}
