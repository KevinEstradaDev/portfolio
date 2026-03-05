import type { ReactNode } from 'react'

interface CardWellGrayProps {
    /** Content to render inside the well */
    children?: ReactNode
}

export default function CardWellGray({ children }: CardWellGrayProps) {
    return (
        <div className="rounded-lg bg-white ring-1 ring-gray-900/5 px-4 py-5 sm:p-6 dark:bg-gray-900 dark:ring-gray-700/50">
            {children}
        </div>
    )
}
