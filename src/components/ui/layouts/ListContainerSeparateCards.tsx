import type { ReactNode } from 'react'

interface ListContainerSeparateCardsProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerSeparateCards({ children }: ListContainerSeparateCardsProps) {
    return (
        <ul role="list" className="space-y-3">
            {children}
        </ul>
    )
}
