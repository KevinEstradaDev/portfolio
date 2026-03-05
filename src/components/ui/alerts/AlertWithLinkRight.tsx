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
        textColor: 'text-green-800 dark:text-green-200',
        linkColor: 'text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        iconColor: 'text-yellow-400 dark:text-yellow-300',
        textColor: 'text-yellow-800 dark:text-yellow-200',
        linkColor: 'text-yellow-700 dark:text-yellow-300 hover:text-yellow-600 dark:hover:text-yellow-200',
    },
    error: {
        icon: XCircleIcon,
        bg: 'bg-red-50 dark:bg-red-900/20',
        iconColor: 'text-red-400 dark:text-red-300',
        textColor: 'text-red-800 dark:text-red-200',
        linkColor: 'text-red-700 dark:text-red-300 hover:text-red-600 dark:hover:text-red-200',
    },
    info: {
        icon: InformationCircleIcon,
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-400 dark:text-blue-300',
        textColor: 'text-blue-800 dark:text-blue-200',
        linkColor: 'text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200',
    },
}

interface AlertWithLinkRightProps {
    /** Alert type determines icon and color scheme */
    type?: 'success' | 'warning' | 'error' | 'info'
    /** Alert message */
    message: string
    /** Link text shown on the right */
    linkText?: string
    /** Link href */
    href?: string
    /** Click handler (alternative to href) */
    onClick?: () => void
}

export default function AlertWithLinkRight({
    type = 'info',
    message,
    linkText = 'Details',
    href = '#',
    onClick,
}: AlertWithLinkRightProps) {
    const config = typeConfig[type]
    const Icon = config.icon

    return (
        <div className={`rounded-md p-4 ${config.bg}`}>
            <div className="flex">
                <div className="shrink-0">
                    <Icon aria-hidden="true" className={`size-5 ${config.iconColor}`} />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className={`text-sm ${config.textColor}`}>{message}</p>
                    <p className="mt-3 text-sm md:ml-6 md:mt-0">
                        <a
                            href={href}
                            onClick={onClick}
                            className={`whitespace-nowrap font-medium ${config.linkColor}`}
                        >
                            {linkText}
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
