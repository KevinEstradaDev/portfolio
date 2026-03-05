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

interface ButtonGroupCheckboxDropdownProps {
    /** Whether the checkbox is checked */
    checked?: boolean
    /** Checkbox change callback */
    onCheckChange?: (checked: boolean) => void
    /** Dropdown items */
    items?: DropdownItem[]
    /** Dropdown item click callback */
    onSelect?: (item: DropdownItem) => void
    /** Screen-reader label for checkbox */
    srLabel?: string
}

const defaultItems: DropdownItem[] = [
    { name: 'Select all', href: '#' },
    { name: 'Select none', href: '#' },
    { name: 'Select starred', href: '#' },
    { name: 'Select unstarred', href: '#' },
]

export default function ButtonGroupCheckboxDropdown({
    checked = false,
    onCheckChange,
    items = defaultItems,
    onSelect,
    srLabel = 'Select all',
}: ButtonGroupCheckboxDropdownProps) {
    return (
        <div className="inline-flex rounded-md shadow-xs">
            <div className="relative flex items-center rounded-l-md bg-white px-3 py-2 ring-1 ring-inset ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onCheckChange?.(e.target.checked)}
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-500 dark:bg-gray-700"
                    aria-label={srLabel}
                />
            </div>
            <Menu as="div" className="relative -ml-px block">
                <MenuButton className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:text-gray-500 dark:ring-gray-600 dark:hover:bg-gray-700">
                    <span className="sr-only">Open options</span>
                    <ChevronDownIcon aria-hidden="true" className="size-5" />
                </MenuButton>

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
        </div>
    )
}
