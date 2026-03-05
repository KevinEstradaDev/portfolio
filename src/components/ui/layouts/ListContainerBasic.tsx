import type { ReactNode } from 'react'

interface ListContainerBasicProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerBasic({ children }: ListContainerBasicProps) {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {children}
        </ul>
    )
}
