import type { ReactNode } from 'react'

interface CardWellEdgeToEdgeProps {
    /** Content to render inside the well */
    children?: ReactNode
}

export default function CardWellEdgeToEdge({ children }: CardWellEdgeToEdgeProps) {
    return (
        <div className="bg-gray-50 px-4 py-5 sm:rounded-lg sm:p-6 dark:bg-gray-800/50">
            {children}
        </div>
    )
}
