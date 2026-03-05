'use client'

import { useState } from 'react'

interface NavItem {
    name: string
    href?: string
    current?: boolean
}

interface VerticalNavSimpleProps {
    /** Navigation items */
    items?: NavItem[]
    /** Default active item name */
    defaultActive?: string
    /** Item click callback */
    onChange?: (itemName: string) => void
}

const defaultItems: NavItem[] = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavSimple({
    items = defaultItems,
    defaultActive,
    onChange,
}: VerticalNavSimpleProps) {
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
                                'group flex w-full gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold',
                            )}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
