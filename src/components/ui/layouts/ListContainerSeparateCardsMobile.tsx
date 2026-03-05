import type { ReactNode } from 'react'

interface ListContainerSeparateCardsMobileProps {
    /** List item elements to render */
    children?: ReactNode
}

export default function ListContainerSeparateCardsMobile({ children }: ListContainerSeparateCardsMobileProps) {
    return (
        <ul role="list" className="space-y-3">
            {children}
        </ul>
    )
}
