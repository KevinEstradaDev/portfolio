'use client'

import {
    ChatBubbleBottomCenterTextIcon,
    HeartIcon,
    PencilSquareIcon,
} from '@heroicons/react/20/solid'
import type { ComponentType, SVGProps } from 'react'

interface ToolbarButton {
    /** Screen-reader label */
    srLabel: string
    /** Icon component */
    icon: ComponentType<SVGProps<SVGSVGElement>>
    /** Click handler */
    onClick?: () => void
}

interface DividerToolbarProps {
    /** Toolbar buttons to display */
    buttons?: ToolbarButton[]
}

const defaultButtons: ToolbarButton[] = [
    { srLabel: 'Edit', icon: PencilSquareIcon },
    { srLabel: 'Comment', icon: ChatBubbleBottomCenterTextIcon },
    { srLabel: 'Like', icon: HeartIcon },
]

export default function DividerToolbar({ buttons = defaultButtons }: DividerToolbarProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center">
                <span className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                    {buttons.map((button, index) => {
                        const Icon = button.icon
                        const isFirst = index === 0
                        const isLast = index === buttons.length - 1
                        return (
                            <button
                                key={button.srLabel}
                                type="button"
                                onClick={button.onClick}
                                className={`relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-gray-900 dark:text-gray-500 dark:ring-gray-600 dark:hover:bg-gray-800 ${isFirst ? 'rounded-l-md' : ''} ${isLast ? 'rounded-r-md' : ''}`}
                            >
                                <span className="sr-only">{button.srLabel}</span>
                                <Icon aria-hidden="true" className="size-5" />
                            </button>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}
