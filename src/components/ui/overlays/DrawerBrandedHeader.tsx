'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerBrandedHeaderProps {
    /** Whether the drawer is open */
    open?: boolean
    /** Callback when the drawer should close */
    onClose?: () => void
    /** Title text */
    title?: string
    /** Subtitle / description text */
    subtitle?: string
    /** Children rendered in the scrollable content area */
    children?: React.ReactNode
}

export default function DrawerBrandedHeader({
    open: controlledOpen,
    onClose,
    title = 'Panel title',
    subtitle = 'Start creating by filling in the information below.',
    children,
}: DrawerBrandedHeaderProps) {
    const [internalOpen, setInternalOpen] = useState(true)
    const isOpen = controlledOpen ?? internalOpen

    function handleClose() {
        setInternalOpen(false)
        onClose?.()
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                                {/* Branded header */}
                                <div className="bg-indigo-700 px-4 py-6 sm:px-6 dark:bg-indigo-800">
                                    <div className="flex items-center justify-between">
                                        <DialogTitle className="text-base/7 font-semibold text-white">
                                            {title}
                                        </DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={handleClose}
                                                className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white dark:bg-indigo-800"
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="size-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-sm text-indigo-300 dark:text-indigo-200">
                                            {subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative flex-1 bg-white px-4 py-6 sm:px-6 dark:bg-gray-800">
                                    {children}
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
