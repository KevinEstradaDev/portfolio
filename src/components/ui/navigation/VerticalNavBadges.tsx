'use client'

import { useState } from 'react'

interface NavItemWithBadge {
    name: string
    href?: string
    count?: number
    current?: boolean
}

interface VerticalNavBadgesProps {
    /** Navigation items with optional badge counts */
    items?: NavItemWithBadge[]
    /** Default active item name */
    defaultActive?: string
    /** Item click callback */
    onChange?: (itemName: string) => void
}

const defaultItems: NavItemWithBadge[] = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', count: 12, current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', count: 20, current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavBadges({
    items = defaultItems,
    defaultActive,
    onChange,
}: VerticalNavBadgesProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        onChange?.(itemName)
    }

    return (
        <nav aria-label="Sidebar" className="flex flex-1 flex-col">
            <ul role="list" className="-mx-2 space-y-1">
                {items.map((item) => (
                    <li key={item.name}>
                        <button
                            onClick={() => handleClick(item.name)}
                            className={classNames(
                                item.name === activeItem
                                    ? 'bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400',
                                'group flex w-full items-center justify-between gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
                            )}
                        >
                            <span>{item.name}</span>
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
                ))}
            </ul>
        </nav>
    )
}
