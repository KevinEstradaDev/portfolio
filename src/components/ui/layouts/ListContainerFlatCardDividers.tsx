import type { ReactNode } from 'react'

interface ListContainerFlatCardDividersProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerFlatCardDividers({ children }: ListContainerFlatCardDividersProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-700/50">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {children}
            </ul>
        </div>
    )
}
