'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

interface DropdownItem {
    /** Display label */
    name: string
    /** Optional link URL */
    href?: string
}

interface DropdownMinimalProps {
    /** Menu items */
    items?: DropdownItem[]
    /** Item click callback */
    onSelect?: (item: DropdownItem) => void
    /** Screen-reader label for the button */
    srLabel?: string
}

const defaultItems: DropdownItem[] = [
    { name: 'Account settings', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'License', href: '#' },
    { name: 'Sign out', href: '#' },
]

export default function DropdownMinimal({
    items = defaultItems,
    onSelect,
    srLabel = 'Open options',
}: DropdownMinimalProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:focus:ring-offset-gray-900">
                    <span className="sr-only">{srLabel}</span>
                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
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
