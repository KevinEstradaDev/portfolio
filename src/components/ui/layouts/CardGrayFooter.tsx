import type { ReactNode } from 'react'

interface CardGrayFooterProps {
    /** Body content */
    children?: ReactNode
    /** Footer content */
    footer?: ReactNode
}

export default function CardGrayFooter({
    children,
    footer,
}: CardGrayFooterProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="px-4 py-5 sm:p-6">{children}</div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 dark:bg-gray-800/50">
                {footer}
            </div>
        </div>
    )
}
