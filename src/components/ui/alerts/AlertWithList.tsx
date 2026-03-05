'use client'

import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
} from '@heroicons/react/20/solid'

const typeConfig = {
    success: {
        icon: CheckCircleIcon,
        bg: 'bg-green-50 dark:bg-green-900/20',
        iconColor: 'text-green-400 dark:text-green-300',
        titleColor: 'text-green-800 dark:text-green-200',
        bodyColor: 'text-green-700 dark:text-green-300',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        iconColor: 'text-yellow-400 dark:text-yellow-300',
        titleColor: 'text-yellow-800 dark:text-yellow-200',
        bodyColor: 'text-yellow-700 dark:text-yellow-300',
    },
    error: {
        icon: XCircleIcon,
        bg: 'bg-red-50 dark:bg-red-900/20',
        iconColor: 'text-red-400 dark:text-red-300',
        titleColor: 'text-red-800 dark:text-red-200',
        bodyColor: 'text-red-700 dark:text-red-300',
    },
    info: {
        icon: InformationCircleIcon,
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-400 dark:text-blue-300',
        titleColor: 'text-blue-800 dark:text-blue-200',
        bodyColor: 'text-blue-700 dark:text-blue-300',
    },
}

interface AlertWithListProps {
    /** Alert type determines icon and color scheme */
    type?: 'success' | 'warning' | 'error' | 'info'
    /** Alert title */
    title: string
    /** List of messages to display */
    items: string[]
}

export default function AlertWithList({
    type = 'error',
    title,
    items,
}: AlertWithListProps) {
    const config = typeConfig[type]
    const Icon = config.icon

    return (
        <div className={`rounded-md p-4 ${config.bg}`}>
            <div className="flex">
                <div className="shrink-0">
                    <Icon aria-hidden="true" className={`size-5 ${config.iconColor}`} />
                </div>
                <div className="ml-3">
                    <h3 className={`text-sm font-medium ${config.titleColor}`}>{title}</h3>
                    <div className={`mt-2 text-sm ${config.bodyColor}`}>
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            {items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
