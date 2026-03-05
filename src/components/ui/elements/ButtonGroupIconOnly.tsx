'use client'

import type { ComponentType, SVGProps } from 'react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/20/solid'

interface ButtonGroupIconItem {
    /** Screen-reader label */
    srLabel: string
    /** Icon component */
    icon: ComponentType<SVGProps<SVGSVGElement>>
    /** Click callback */
    onClick?: () => void
}

interface ButtonGroupIconOnlyProps {
    /** Buttons in the group */
    buttons?: ButtonGroupIconItem[]
}

const defaultButtons: ButtonGroupIconItem[] = [
    { srLabel: 'Previous', icon: ChevronLeftIcon },
    { srLabel: 'Next', icon: ChevronRightIcon },
]

export default function ButtonGroupIconOnly({
    buttons = defaultButtons,
}: ButtonGroupIconOnlyProps) {
    return (
        <span className="isolate inline-flex rounded-md shadow-xs">
            {buttons.map((btn, idx) => {
                const isFirst = idx === 0
                const isLast = idx === buttons.length - 1
                const Icon = btn.icon

                return (
                    <button
                        key={btn.srLabel}
                        type="button"
                        onClick={btn.onClick}
                        className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:text-gray-500 dark:ring-gray-600 dark:hover:bg-gray-700 ${isFirst
                                ? 'rounded-l-md bg-white dark:bg-gray-800'
                                : isLast
                                    ? '-ml-px rounded-r-md bg-white dark:bg-gray-800'
                                    : '-ml-px bg-white dark:bg-gray-800'
                            }`}
                    >
                        <span className="sr-only">{btn.srLabel}</span>
                        <Icon aria-hidden="true" className="size-5" />
                    </button>
                )
            })}
        </span>
    )
}
