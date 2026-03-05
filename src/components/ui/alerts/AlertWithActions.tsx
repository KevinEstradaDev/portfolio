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
        btnBg: 'bg-green-50 dark:bg-green-900/30',
        btnText: 'text-green-800 dark:text-green-200',
        btnHover: 'hover:bg-green-100 dark:hover:bg-green-900/50',
        btnFocus: 'focus-visible:outline-green-600 dark:focus-visible:outline-green-400',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        iconColor: 'text-yellow-400 dark:text-yellow-300',
        titleColor: 'text-yellow-800 dark:text-yellow-200',
        bodyColor: 'text-yellow-700 dark:text-yellow-300',
        btnBg: 'bg-yellow-50 dark:bg-yellow-900/30',
        btnText: 'text-yellow-800 dark:text-yellow-200',
        btnHover: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/50',
        btnFocus: 'focus-visible:outline-yellow-600 dark:focus-visible:outline-yellow-400',
    },
    error: {
        icon: XCircleIcon,
        bg: 'bg-red-50 dark:bg-red-900/20',
        iconColor: 'text-red-400 dark:text-red-300',
        titleColor: 'text-red-800 dark:text-red-200',
        bodyColor: 'text-red-700 dark:text-red-300',
        btnBg: 'bg-red-50 dark:bg-red-900/30',
        btnText: 'text-red-800 dark:text-red-200',
        btnHover: 'hover:bg-red-100 dark:hover:bg-red-900/50',
        btnFocus: 'focus-visible:outline-red-600 dark:focus-visible:outline-red-400',
    },
    info: {
        icon: InformationCircleIcon,
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-400 dark:text-blue-300',
        titleColor: 'text-blue-800 dark:text-blue-200',
        bodyColor: 'text-blue-700 dark:text-blue-300',
        btnBg: 'bg-blue-50 dark:bg-blue-900/30',
        btnText: 'text-blue-800 dark:text-blue-200',
        btnHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/50',
        btnFocus: 'focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400',
    },
}

export interface AlertAction {
    label: string
    onClick?: () => void
}

interface AlertWithActionsProps {
    /** Alert type determines icon and color scheme */
    type?: 'success' | 'warning' | 'error' | 'info'
    /** Alert title */
    title: string
    /** Description text */
    description: string
    /** Action buttons */
    actions?: AlertAction[]
}

export default function AlertWithActions({
    type = 'success',
    title,
    description,
    actions = [],
}: AlertWithActionsProps) {
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
                        <p>{description}</p>
                    </div>
                    {actions.length > 0 && (
                        <div className="mt-4">
                            <div className="-mx-2 -my-1.5 flex">
                                {actions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={action.onClick}
                                        className={`rounded-md px-2 py-1.5 text-sm font-medium ${config.btnBg} ${config.btnText} ${config.btnHover} ${config.btnFocus} focus-visible:outline-2 focus-visible:outline-offset-2`}
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
