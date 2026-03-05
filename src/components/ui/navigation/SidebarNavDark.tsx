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

interface SidebarNavDarkProps {
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

export default function SidebarNavDark({
    items = defaultItems,
    secondaryItems = defaultSecondaryItems,
    secondaryTitle = 'Your teams',
    logoSrc = 'https://tailwindui.com/plus/img/logos/mark.svg?color=white',
    logoAlt = 'Your Company',
    settingsLabel = 'Settings',
    profileName = 'Tom Cook',
    profileImageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    defaultActive,
    onChange,
    onSettingsClick,
}: SidebarNavDarkProps) {
    const initialActive = defaultActive || items.find(i => i.current)?.name || items[0]?.name || ''
    const [activeItem, setActiveItem] = useState(initialActive)

    const handleClick = (itemName: string) => {
        setActiveItem(itemName)
        onChange?.(itemName)
    }

    return (
        <div className="flex h-full grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
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
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                'group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                            )}
                                        >
                                            {Icon && (
                                                <Icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.name === activeItem
                                                            ? 'text-white'
                                                            : 'text-gray-400 group-hover:text-white',
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
                                                ? 'bg-gray-800 text-white'
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                            'group flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                item.name === activeItem
                                                    ? 'border-indigo-400 text-indigo-400'
                                                    : 'border-gray-700 text-gray-400 group-hover:border-indigo-400 group-hover:text-indigo-400',
                                                'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-gray-800 text-[0.625rem] font-medium',
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
                            className="group -mx-2 flex w-full items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400 group-hover:text-white"
                            />
                            {settingsLabel}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
