import type { ReactNode } from 'react'

interface CardHeaderProps {
    /** Header content */
    header?: ReactNode
    /** Body content */
    children?: ReactNode
}

export default function CardHeader({ header, children }: CardHeaderProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-gray-700">
                {header}
            </div>
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}
