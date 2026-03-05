'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline'

interface NavItemWithIcon {
    name: string
    href?: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    current?: boolean
}

interface SecondaryNavItem {
    name: string
    href?: string
    initial: string
    current?: boolean
}

interface SidebarNavLightProps {
    /** Primary navigation items with icons */
    items?: NavItemWithIcon[]
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

const defaultItems: NavItemWithIcon[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
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

export default function SidebarNavLight({
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
}: SidebarNavLightProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        onChange?.(itemName)
    }

    return (
        <div className="flex h-full grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 dark:border-gray-700 dark:bg-gray-900">
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

                    {/* Settings + profile at bottom */}
                    <li className="-mx-6 mt-auto">
                        <button
                            onClick={onSettingsClick}
                            className="group -mx-2 mb-2 flex w-full items-center gap-x-3 rounded-md p-2 px-8 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                        >
                            <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400"
                            />
                            {settingsLabel}
                        </button>
                        <div className="flex items-center gap-x-4 border-t border-gray-200 px-6 py-3 dark:border-gray-700">
                            <img
                                alt={profileName}
                                src={profileImageUrl}
                                className="size-8 rounded-full bg-gray-50 dark:bg-gray-800"
                            />
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                {profileName}
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
