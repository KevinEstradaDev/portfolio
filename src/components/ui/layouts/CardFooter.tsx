import type { ReactNode } from 'react'

interface CardFooterProps {
    /** Body content */
    children?: ReactNode
    /** Footer content */
    footer?: ReactNode
}

export default function CardFooter({ children, footer }: CardFooterProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="px-4 py-5 sm:p-6">{children}</div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6 dark:border-gray-700">
                {footer}
            </div>
        </div>
    )
}
