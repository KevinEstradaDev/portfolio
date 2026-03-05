'use client'

import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface NotificationActionsProps {
    /** Whether the notification is shown */
    show?: boolean
    /** Callback when dismissed */
    onDismiss?: () => void
    /** Icon component rendered in the notification */
    icon?: React.ReactNode
    /** Title text */
    title?: string
    /** Description / body text */
    description?: string
    /** Primary action button label */
    primaryLabel?: string
    /** Secondary action button label */
    secondaryLabel?: string
    /** Primary action callback */
    onPrimary?: () => void
    /** Secondary action callback */
    onSecondary?: () => void
    /** Auto-dismiss after this many milliseconds (0 to disable) */
    autoDismissMs?: number
}

export default function NotificationActions({
    show: controlledShow,
    onDismiss,
    icon,
    title = 'Discussion moved',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
    primaryLabel = 'Undo',
    secondaryLabel = 'Dismiss',
    onPrimary,
    onSecondary,
    autoDismissMs = 5000,
}: NotificationActionsProps) {
    const [internalShow, setInternalShow] = useState(true)
    const isShown = controlledShow ?? internalShow

    function handleDismiss() {
        setInternalShow(false)
        onDismiss?.()
    }

    useEffect(() => {
        if (!isShown || autoDismissMs === 0) return
        const timer = setTimeout(handleDismiss, autoDismissMs)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShown, autoDismissMs])

    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition show={isShown}>
                    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-100 data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0 dark:bg-gray-800 dark:ring-white/10">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    {icon ?? (
                                        <CheckCircleIcon
                                            className="size-6 text-green-400 dark:text-green-300"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        {description}
                                    </p>
                                    <div className="mt-3 flex gap-x-3">
                                        <button
                                            type="button"
                                            onClick={onPrimary}
                                            className="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-indigo-400 dark:hover:text-indigo-300 dark:focus:ring-offset-gray-800"
                                        >
                                            {primaryLabel}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                onSecondary?.()
                                                handleDismiss()
                                            }}
                                            className="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
                                        >
                                            {secondaryLabel}
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-4 flex shrink-0">
                                    <button
                                        type="button"
                                        onClick={handleDismiss}
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="size-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}
