import type { ReactNode } from 'react'

interface ListContainerDividersMobileProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerDividersMobile({ children }: ListContainerDividersMobileProps) {
    return (
        <div className="-mx-4 sm:mx-0">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {children}
            </ul>
        </div>
    )
}
