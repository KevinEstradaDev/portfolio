import type { ReactNode } from 'react'

interface CardHeaderFooterProps {
    /** Header content */
    header?: ReactNode
    /** Body content */
    children?: ReactNode
    /** Footer content */
    footer?: ReactNode
}

export default function CardHeaderFooter({
    header,
    children,
    footer,
}: CardHeaderFooterProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-gray-700">
                {header}
            </div>
            <div className="px-4 py-5 sm:p-6">{children}</div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6 dark:border-gray-700">
                {footer}
            </div>
        </div>
    )
}
