'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerEmptyProps {
    /** Whether the drawer is open */
    open?: boolean
    /** Callback when the drawer should close */
    onClose?: () => void
    /** Title text */
    title?: string
    /** Children rendered in the content area */
    children?: React.ReactNode
}

export default function DrawerEmpty({
    open: controlledOpen,
    onClose,
    title = 'Panel title',
    children,
}: DrawerEmptyProps) {
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
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-gray-800">
                                {/* Header */}
                                <div className="px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-base/7 font-semibold text-gray-900 dark:text-white">
                                            {title}
                                        </DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={handleClose}
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="size-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative flex-1 px-4 sm:px-6">
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
