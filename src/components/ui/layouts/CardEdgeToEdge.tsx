import type { ReactNode } from 'react'

interface CardEdgeToEdgeProps {
    /** Content to render inside the card */
    children?: ReactNode
}

export default function CardEdgeToEdge({ children }: CardEdgeToEdgeProps) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}
