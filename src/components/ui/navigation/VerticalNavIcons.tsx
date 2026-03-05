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

interface NavItemWithIcon {
    name: string
    href?: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    current?: boolean
}

interface VerticalNavIconsProps {
    /** Navigation items with optional icons */
    items?: NavItemWithIcon[]
    /** Default active item name */
    defaultActive?: string
    /** Item click callback */
    onChange?: (itemName: string) => void
}

const defaultItems: NavItemWithIcon[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavIcons({
    items = defaultItems,
    defaultActive,
    onChange,
}: VerticalNavIconsProps) {
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
                                {item.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
