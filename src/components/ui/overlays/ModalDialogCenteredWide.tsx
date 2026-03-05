'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

interface ModalDialogCenteredWideProps {
    /** Whether the dialog is open */
    open?: boolean
    /** Callback when the dialog should close */
    onClose?: () => void
    /** Icon component rendered above the title */
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

export default function ModalDialogCenteredWide({
    open: controlledOpen,
    onClose,
    icon,
    title = 'Payment successful',
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
    primaryLabel = 'Deactivate',
    cancelLabel = 'Cancel',
    onPrimary,
    onCancel,
}: ModalDialogCenteredWideProps) {
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
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-gray-800"
                    >
                        <div>
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                                {icon ?? (
                                    <CheckIcon
                                        className="size-6 text-green-600 dark:text-green-400"
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <DialogTitle
                                    as="h3"
                                    className="text-base/6 font-semibold text-gray-900 dark:text-white"
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
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={handlePrimary}
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                            >
                                {primaryLabel}
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
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
