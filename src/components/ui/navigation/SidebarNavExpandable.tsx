'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

interface NavChild {
    name: string
    href?: string
}

interface NavItemExpandable {
    name: string
    href?: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    current?: boolean
    children?: NavChild[]
}

interface SecondaryNavItem {
    name: string
    href?: string
    initial: string
    current?: boolean
}

interface SidebarNavExpandableProps {
    /** Primary navigation items with icons and optional children */
    items?: NavItemExpandable[]
    /** Secondary navigation items */
    secondaryItems?: SecondaryNavItem[]
    /** Secondary section title */
    secondaryTitle?: string
    /** Logo src URL */
    logoSrc?: string
    /** Logo alt text */
    logoAlt?: string
    /** Settings label */
    settingsLabel?: string
    /** Profile name */
    profileName?: string
    /** Profile image URL */
    profileImageUrl?: string
    /** Default active item name */
    defaultActive?: string
    /** Item click callback */
    onChange?: (itemName: string) => void
    /** Settings click callback */
    onSettingsClick?: () => void
}

const defaultItems: NavItemExpandable[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    {
        name: 'Teams',
        icon: UsersIcon,
        current: false,
        children: [
            { name: 'Engineering', href: '#' },
            { name: 'Human Resources', href: '#' },
            { name: 'Customer Success', href: '#' },
        ],
    },
    {
        name: 'Projects',
        icon: FolderIcon,
        current: false,
        children: [
            { name: 'GraphQL API', href: '#' },
            { name: 'iOS App', href: '#' },
            { name: 'Android App', href: '#' },
            { name: 'New Customer Portal', href: '#' },
        ],
    },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
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

export default function SidebarNavExpandable({
    items = defaultItems,
    secondaryItems = defaultSecondaryItems,
    secondaryTitle = 'Your teams',
    logoSrc = 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    logoAlt = 'Your Company',
    settingsLabel = 'Settings',
    profileName = 'Tom Cook',
    profileImageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    defaultActive,
    onChange,
    onSettingsClick,
}: SidebarNavExpandableProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        onChange?.(itemName)
    }

    return (
        <div className="flex h-full grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4 dark:border-gray-700 dark:bg-gray-900">
            {/* Logo */}
            <div className="flex h-16 shrink-0 items-center">
                <img
                    alt={logoAlt}
                    src={logoSrc}
                    className="h-8 w-auto"
                />
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    {/* Primary nav */}
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {items.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.name}>
                                        {!item.children ? (
                                            /* Simple link item */
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
                                        ) : (
                                            /* Expandable item with children */
                                            <Disclosure as="div">
                                                <DisclosureButton
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
                                                    <ChevronRightIcon
                                                        aria-hidden="true"
                                                        className="ml-auto size-5 shrink-0 text-gray-400 transition-transform duration-150 group-data-[open]:rotate-90 group-data-[open]:text-gray-500 dark:text-gray-500 dark:group-data-[open]:text-gray-400"
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel as="ul" className="mt-1 px-2">
                                                    {item.children.map((child) => (
                                                        <li key={child.name}>
                                                            <button
                                                                onClick={() => handleClick(child.name)}
                                                                className={classNames(
                                                                    child.name === activeItem
                                                                        ? 'bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400',
                                                                    'block w-full rounded-md py-2 pl-9 pr-2 text-left text-sm/6',
                                                                )}
                                                            >
                                                                {child.name}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </DisclosurePanel>
                                            </Disclosure>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                    {/* Secondary nav */}
                    <li>
                        <div className="text-xs/6 font-semibold text-gray-400">{secondaryTitle}</div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {secondaryItems.map((item) => (
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
                                        <span
                                            className={classNames(
                                                item.name === activeItem
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

                    {/* Settings at bottom */}
                    <li className="mt-auto">
                        <button
                            onClick={onSettingsClick}
                            className="group -mx-2 flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                        >
                            <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400"
                            />
                            {settingsLabel}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
