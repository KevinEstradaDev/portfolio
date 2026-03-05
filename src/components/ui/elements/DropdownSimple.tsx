'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

interface DropdownItem {
    /** Display label */
    name: string
    /** Optional link URL */
    href?: string
}

interface DropdownSimpleProps {
    /** Trigger button label */
    buttonLabel?: string
    /** Menu items */
    items?: DropdownItem[]
    /** Item click callback */
    onSelect?: (item: DropdownItem) => void
}

const defaultItems: DropdownItem[] = [
    { name: 'Account settings', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'License', href: '#' },
    { name: 'Sign out', href: '#' },
]

export default function DropdownSimple({
    buttonLabel = 'Options',
    items = defaultItems,
    onSelect,
}: DropdownSimpleProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700">
                    {buttonLabel}
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400 dark:text-gray-500"
                    />
                </MenuButton>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-white/10">
                    <div className="py-1">
                        {items.map((item) => (
                            <MenuItem key={item.name}>
                                {({ focus }) => (
                                    <a
                                        href={item.href ?? '#'}
                                        onClick={(e) => {
                                            if (onSelect) {
                                                e.preventDefault()
                                                onSelect(item)
                                            }
                                        }}
                                        className={`block px-4 py-2 text-sm ${focus
                                                ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                                : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    )
}
