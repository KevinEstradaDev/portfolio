import { PlusIcon } from '@heroicons/react/20/solid'
import type { ComponentType, SVGProps } from 'react'

interface DividerButtonProps {
    /** Button label */
    label?: string
    /** Optional icon component rendered before the label */
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    /** Click handler for the button */
    onClick?: () => void
}

export default function DividerButton({
    label = 'Button text',
    icon: Icon = PlusIcon,
    onClick,
}: DividerButtonProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center">
                <button
                    type="button"
                    onClick={onClick}
                    className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-800"
                >
                    <Icon aria-hidden="true" className="-ml-1 size-5 text-gray-400 dark:text-gray-500" />
                    {label}
                </button>
            </div>
        </div>
    )
}
