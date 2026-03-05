'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerStickyFooterProps {
    /** Whether the drawer is open */
    open?: boolean
    /** Callback when the drawer should close */
    onClose?: () => void
    /** Title text */
    title?: string
    /** Children rendered in the scrollable content area */
    children?: React.ReactNode
    /** Save button label */
    saveLabel?: string
    /** Cancel button label */
    cancelLabel?: string
    /** Callback when save fires */
    onSave?: () => void
    /** Callback when cancel fires */
    onCancel?: () => void
}

export default function DrawerStickyFooter({
    open: controlledOpen,
    onClose,
    title = 'Panel title',
    children,
    saveLabel = 'Save',
    cancelLabel = 'Cancel',
    onSave,
    onCancel,
}: DrawerStickyFooterProps) {
    const [internalOpen, setInternalOpen] = useState(true)
    const isOpen = controlledOpen ?? internalOpen

    function handleClose() {
        setInternalOpen(false)
        onClose?.()
    }

    function handleSave() {
        onSave?.()
        handleClose()
    }

    function handleCancel() {
        onCancel?.()
        handleClose()
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
                            <div className="flex h-full flex-col bg-white shadow-xl dark:bg-gray-800">
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

                                {/* Scrollable content */}
                                <div className="relative flex-1 overflow-y-auto px-4 sm:px-6">
                                    {children}
                                </div>

                                {/* Sticky footer */}
                                <div className="flex shrink-0 justify-end gap-x-3 border-t border-gray-200 px-4 py-4 dark:border-gray-700">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
                                    >
                                        {cancelLabel}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                    >
                                        {saveLabel}
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
