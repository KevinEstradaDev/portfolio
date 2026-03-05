'use client'

import { useState } from 'react'
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
    XMarkIcon,
} from '@heroicons/react/20/solid'

const typeConfig = {
    success: {
        icon: CheckCircleIcon,
        bg: 'bg-green-50 dark:bg-green-900/20',
        iconColor: 'text-green-400 dark:text-green-300',
        titleColor: 'text-green-800 dark:text-green-200',
        bodyColor: 'text-green-700 dark:text-green-300',
        dismissColor: 'text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40',
        dismissFocus: 'focus-visible:outline-green-600 dark:focus-visible:outline-green-400',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        iconColor: 'text-yellow-400 dark:text-yellow-300',
        titleColor: 'text-yellow-800 dark:text-yellow-200',
        bodyColor: 'text-yellow-700 dark:text-yellow-300',
        dismissColor: 'text-yellow-500 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/40',
        dismissFocus: 'focus-visible:outline-yellow-600 dark:focus-visible:outline-yellow-400',
    },
    error: {
        icon: XCircleIcon,
        bg: 'bg-red-50 dark:bg-red-900/20',
        iconColor: 'text-red-400 dark:text-red-300',
        titleColor: 'text-red-800 dark:text-red-200',
        bodyColor: 'text-red-700 dark:text-red-300',
        dismissColor: 'text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40',
        dismissFocus: 'focus-visible:outline-red-600 dark:focus-visible:outline-red-400',
    },
    info: {
        icon: InformationCircleIcon,
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-400 dark:text-blue-300',
        titleColor: 'text-blue-800 dark:text-blue-200',
        bodyColor: 'text-blue-700 dark:text-blue-300',
        dismissColor: 'text-blue-500 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40',
        dismissFocus: 'focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400',
    },
}

interface AlertWithDismissProps {
    /** Alert type determines icon and color scheme */
    type?: 'success' | 'warning' | 'error' | 'info'
    /** Alert title */
    title: string
    /** Description text */
    description: string
    /** Dismiss callback */
    onDismiss?: () => void
}

export default function AlertWithDismiss({
    type = 'success',
    title,
    description,
    onDismiss,
}: AlertWithDismissProps) {
    const [visible, setVisible] = useState(true)
    const config = typeConfig[type]
    const Icon = config.icon

    if (!visible) return null

    return (
        <div className={`rounded-md p-4 ${config.bg}`}>
            <div className="flex">
                <div className="shrink-0">
                    <Icon aria-hidden="true" className={`size-5 ${config.iconColor}`} />
                </div>
                <div className="ml-3">
                    <h3 className={`text-sm font-medium ${config.titleColor}`}>{title}</h3>
                    <div className={`mt-2 text-sm ${config.bodyColor}`}>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            onClick={() => {
                                setVisible(false)
                                onDismiss?.()
                            }}
                            className={`inline-flex rounded-md p-1.5 ${config.dismissColor} ${config.dismissFocus} focus-visible:outline-2 focus-visible:outline-offset-2`}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
