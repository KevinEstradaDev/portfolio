import type { ReactNode } from 'react'

interface ListContainerCardDividersMobileProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerCardDividersMobile({ children }: ListContainerCardDividersMobileProps) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-800 dark:shadow-gray-900/30">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {children}
            </ul>
        </div>
    )
}
