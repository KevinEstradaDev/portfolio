import { PlusIcon } from '@heroicons/react/20/solid'
import type { ComponentType, SVGProps } from 'react'

interface DividerTitleButtonProps {
    /** Title text displayed on the left */
    title?: string
    /** Button label */
    buttonLabel?: string
    /** Optional icon component rendered before the button label */
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    /** Click handler for the button */
    onClick?: () => void
}

export default function DividerTitleButton({
    title = 'Projects',
    buttonLabel = 'Button text',
    icon: Icon = PlusIcon,
    onClick,
}: DividerTitleButtonProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                    {title}
                </span>
                <button
                    type="button"
                    onClick={onClick}
                    className="inline-flex items-center gap-x-1.5 rounded-full bg-white pl-3 pr-3 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-800"
                >
                    <Icon aria-hidden="true" className="-ml-1 size-5 text-gray-400 dark:text-gray-500" />
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}
