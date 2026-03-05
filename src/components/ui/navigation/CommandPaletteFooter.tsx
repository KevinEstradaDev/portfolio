'use client'

import { useState, useMemo } from 'react'
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    DialogBackdrop,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

interface CommandItem {
    id: number | string
    name: string
    category?: string
    url?: string
}

interface CommandPaletteFooterProps {
    /** Whether the palette is open */
    open?: boolean
    /** Callback when the palette should close */
    onClose?: () => void
    /** Items to display / search */
    items?: CommandItem[]
    /** Callback when an item is selected */
    onSelect?: (item: CommandItem) => void
    /** Placeholder text for the search input */
    placeholder?: string
}

const defaultItems: CommandItem[] = [
    { id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#' },
    { id: 2, name: 'Proposal review meeting', category: 'Events', url: '#' },
    { id: 3, name: 'Quarterly planning', category: 'Events', url: '#' },
    { id: 4, name: 'Multi-layered proposal.pdf', category: 'Files', url: '#' },
    { id: 5, name: 'Profit sharing plan.pdf', category: 'Files', url: '#' },
]

export default function CommandPaletteFooter({
    open = true,
    onClose,
    items = defaultItems,
    onSelect,
    placeholder = 'Search...',
}: CommandPaletteFooterProps) {
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        if (query === '') return items
        return items.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, items])

    function handleSelect(item: CommandItem | null) {
        if (item) {
            onSelect?.(item)
            onClose?.()
        }
    }

    function handleClose() {
        setQuery('')
        onClose?.()
    }

    return (
        <Dialog open={open} onClose={handleClose} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
            />

            <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <DialogPanel
                    transition
                    className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:divide-gray-700 dark:bg-gray-800 dark:ring-white/10"
                >
                    <Combobox onChange={handleSelect}>
                        <div className="grid grid-cols-1">
                            <MagnifyingGlassIcon
                                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400 dark:text-gray-500"
                                aria-hidden="true"
                            />
                            <ComboboxInput
                                autoFocus
                                className="col-start-1 row-start-1 h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm dark:text-white dark:placeholder:text-gray-500"
                                placeholder={placeholder}
                                onChange={(e) => setQuery(e.target.value)}
                                onBlur={() => setQuery('')}
                            />
                        </div>

                        {filtered.length > 0 && (
                            <ComboboxOptions
                                static
                                className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 dark:text-gray-200"
                            >
                                {filtered.map((item) => (
                                    <ComboboxOption
                                        key={item.id}
                                        value={item}
                                        className="cursor-default select-none px-4 py-2 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                                    >
                                        <span>{item.name}</span>
                                        {item.category && (
                                            <span className="ml-2 text-gray-400 data-[focus]:text-indigo-200 dark:text-gray-500">
                                                in {item.category}
                                            </span>
                                        )}
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        )}

                        {query !== '' && filtered.length === 0 && (
                            <p className="p-4 text-sm text-gray-500 dark:text-gray-400">
                                No results found.
                            </p>
                        )}

                        {/* Footer with keyboard hints */}
                        <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700 dark:bg-gray-700/50 dark:text-gray-400">
                            Type{' '}
                            <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white font-semibold text-gray-900 sm:mx-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                #
                            </kbd>{' '}
                            for projects,{' '}
                            <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white font-semibold text-gray-900 sm:mx-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                &gt;
                            </kbd>{' '}
                            for commands, and{' '}
                            <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white font-semibold text-gray-900 sm:mx-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                ?
                            </kbd>{' '}
                            for help.
                        </div>
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
