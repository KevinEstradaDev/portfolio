import type { ReactNode } from 'react'

interface CardWellProps {
    /** Content to render inside the well */
    children?: ReactNode
}

export default function CardWell({ children }: CardWellProps) {
    return (
        <div className="rounded-lg bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800/50">
            {children}
        </div>
    )
}
