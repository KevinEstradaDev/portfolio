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
        border: 'border-green-400 dark:border-green-500',
        iconColor: 'text-green-400 dark:text-green-300',
        titleColor: 'text-green-800 dark:text-green-200',
        bodyColor: 'text-green-700 dark:text-green-300',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-400 dark:border-yellow-500',
        iconColor: 'text-yellow-400 dark:text-yellow-300',
        titleColor: 'text-yellow-800 dark:text-yellow-200',
        bodyColor: 'text-yellow-700 dark:text-yellow-300',
    },
    error: {
        icon: XCircleIcon,
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-400 dark:border-red-500',
        iconColor: 'text-red-400 dark:text-red-300',
        titleColor: 'text-red-800 dark:text-red-200',
        bodyColor: 'text-red-700 dark:text-red-300',
    },
    info: {
        icon: InformationCircleIcon,
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-400 dark:border-blue-500',
        iconColor: 'text-blue-400 dark:text-blue-300',
        titleColor: 'text-blue-800 dark:text-blue-200',
        bodyColor: 'text-blue-700 dark:text-blue-300',
    },
}

interface AlertWithAccentBorderProps {
    /** Alert type determines icon and color scheme */
    type?: 'success' | 'warning' | 'error' | 'info'
    /** Alert title */
    title: string
    /** Description text */
    description: string
}

export default function AlertWithAccentBorder({
    type = 'warning',
    title,
    description,
}: AlertWithAccentBorderProps) {
    const config = typeConfig[type]
    const Icon = config.icon

    return (
        <div className={`border-l-4 p-4 ${config.border} ${config.bg}`}>
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
            </div>
        </div>
    )
}
