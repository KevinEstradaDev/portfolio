import type { ReactNode } from 'react'

interface ListContainerDividersProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerDividers({ children }: ListContainerDividersProps) {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {children}
        </ul>
    )
}
