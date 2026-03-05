'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ModalDialogDismissProps {
    /** Whether the dialog is open */
    open?: boolean
    /** Callback when the dialog should close */
    onClose?: () => void
    /** Icon component rendered to the left of the content */
    icon?: React.ReactNode
    /** Title text */
    title?: string
    /** Description / body text */
    description?: string
    /** Primary action button label */
    primaryLabel?: string
    /** Cancel button label */
    cancelLabel?: string
    /** Callback when the primary action fires */
    onPrimary?: () => void
    /** Callback when cancel fires */
    onCancel?: () => void
}

export default function ModalDialogDismiss({
    open: controlledOpen,
    onClose,
    icon,
    title = 'Order completed',
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
    primaryLabel = 'Deactivate',
    cancelLabel = 'Cancel',
    onPrimary,
    onCancel,
}: ModalDialogDismissProps) {
    const [internalOpen, setInternalOpen] = useState(true)
    const isOpen = controlledOpen ?? internalOpen

    function handleClose() {
        setInternalOpen(false)
        onClose?.()
    }

    function handlePrimary() {
        onPrimary?.()
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

            <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-gray-800"
                    >
                        {/* Dismiss button */}
                        <div className="absolute right-0 top-0 pr-4 pt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-offset-gray-800"
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="size-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10 dark:bg-green-900/20">
                                {icon ?? (
                                    <CheckCircleIcon
                                        className="size-6 text-green-600 dark:text-green-400"
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle
                                    as="h3"
                                    className="text-base/7 font-semibold text-gray-900 dark:text-white"
                                >
                                    {title}
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={handlePrimary}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto dark:bg-red-500 dark:hover:bg-red-400"
                            >
                                {primaryLabel}
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
                            >
                                {cancelLabel}
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
