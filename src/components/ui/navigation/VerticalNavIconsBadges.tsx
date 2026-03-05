'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
} from '@heroicons/react/24/outline'

interface NavItemWithIconBadge {
    name: string
    href?: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    count?: number
    current?: boolean
}

interface VerticalNavIconsBadgesProps {
    /** Navigation items with optional icons and badge counts */
    items?: NavItemWithIconBadge[]
    /** Default active item name */
    defaultActive?: string
    /** Item click callback */
    onChange?: (itemName: string) => void
}

const defaultItems: NavItemWithIconBadge[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, count: 12, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: 20, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavIconsBadges({
    items = defaultItems,
    defaultActive,
    onChange,
}: VerticalNavIconsBadgesProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        onChange?.(itemName)
    }

    return (
        <nav aria-label="Sidebar" className="flex flex-1 flex-col">
            <ul role="list" className="-mx-2 space-y-1">
                {items.map((item) => {
                    const Icon = item.icon
                    return (
                        <li key={item.name}>
                            <button
                                onClick={() => handleClick(item.name)}
                                className={classNames(
                                    item.name === activeItem
                                        ? 'bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400',
                                    'group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                )}
                            >
                                {Icon && (
                                    <Icon
                                        aria-hidden="true"
                                        className={classNames(
                                            item.name === activeItem
                                                ? 'text-indigo-600 dark:text-indigo-400'
                                                : 'text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400',
                                            'size-6 shrink-0',
                                        )}
                                    />
                                )}
                                <span className="flex-1 text-left">{item.name}</span>
                                {item.count !== undefined && (
                                    <span
                                        className={classNames(
                                            item.name === activeItem
                                                ? 'bg-white text-indigo-600 ring-indigo-600/10 dark:bg-gray-900 dark:text-indigo-400 dark:ring-indigo-400/20'
                                                : 'bg-white text-gray-600 ring-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-700',
                                            'min-w-[1.5rem] rounded-full px-2 py-0.5 text-center text-xs font-medium ring-1 ring-inset',
                                        )}
                                    >
                                        {item.count}
                                    </span>
                                )}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
