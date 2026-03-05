import type { ReactNode } from 'react'

interface ListContainerCardDividersProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerCardDividers({ children }: ListContainerCardDividersProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {children}
            </ul>
        </div>
    )
}
