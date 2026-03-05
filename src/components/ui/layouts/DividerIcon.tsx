import type { ComponentType, SVGProps } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

interface DividerIconProps {
    /** Icon component to display centered on the divider */
    icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export default function DividerIcon({ icon: Icon = PlusIcon }: DividerIconProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                    <Icon aria-hidden="true" className="size-5" />
                </span>
            </div>
        </div>
    )
}
