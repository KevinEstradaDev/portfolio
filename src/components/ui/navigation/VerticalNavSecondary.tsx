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
    count?: number
    current?: boolean
}

interface SecondaryNavItem {
    name: string
    href?: string
    initial: string
    current?: boolean
}

interface VerticalNavSecondaryProps {
    /** Primary navigation items with icons */
    items?: NavItemWithIcon[]
    /** Secondary navigation items */
    secondaryItems?: SecondaryNavItem[]
    /** Secondary section title */
    secondaryTitle?: string
    /** Default active primary item name */
    defaultActive?: string
    /** Default active secondary item name */
    defaultSecondaryActive?: string
    /** Primary item click callback */
    onChange?: (itemName: string) => void
    /** Secondary item click callback */
    onSecondaryChange?: (itemName: string) => void
}

const defaultItems: NavItemWithIcon[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: 5, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: 12, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: 20, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

const defaultSecondaryItems: SecondaryNavItem[] = [
    { name: 'Heroicons', href: '#', initial: 'H', current: false },
    { name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavSecondary({
    items = defaultItems,
    secondaryItems = defaultSecondaryItems,
    secondaryTitle = 'Your teams',
    defaultActive,
    defaultSecondaryActive,
    onChange,
    onSecondaryChange,
}: VerticalNavSecondaryProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const initialSecActive = defaultSecondaryActive || secondaryItems.find(i => i.current)?.name || ''
    const [activeSecondary, setActiveSecondary] = useState(initialSecActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        setActiveSecondary('')
        onChange?.(itemName)
    }

    const handleSecondaryClick = (itemName: string) => {
        setActiveSecondary(itemName)
        setActiveItem('')
        onSecondaryChange?.(itemName)
    }

    return (
        <nav aria-label="Sidebar" className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                {/* Primary navigation */}
                <li>
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
                </li>

                {/* Secondary navigation */}
                <li>
                    <div className="text-xs/6 font-semibold text-gray-400">{secondaryTitle}</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {secondaryItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => handleSecondaryClick(item.name)}
                                    className={classNames(
                                        item.name === activeSecondary
                                            ? 'bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400',
                                        'group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                    )}
                                >
                                    <span
                                        className={classNames(
                                            item.name === activeSecondary
                                                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-gray-700 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-400',
                                            'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-gray-900',
                                        )}
                                    >
                                        {item.initial}
                                    </span>
                                    <span className="truncate">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
