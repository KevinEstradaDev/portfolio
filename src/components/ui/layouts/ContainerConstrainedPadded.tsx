import type { ReactNode } from 'react'

interface ContainerConstrainedPaddedProps {
    /** Content to render inside the container */
    children?: ReactNode
}

export default function ContainerConstrainedPadded({
    children,
}: ContainerConstrainedPaddedProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">{children}</div>
        </div>
    )
}
