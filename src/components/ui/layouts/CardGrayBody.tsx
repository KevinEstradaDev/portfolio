import type { ReactNode } from 'react'

interface CardGrayBodyProps {
    /** Body content */
    children?: ReactNode
}

export default function CardGrayBody({ children }: CardGrayBodyProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800/50">
                {children}
            </div>
        </div>
    )
}
