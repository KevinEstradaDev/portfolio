import type { ReactNode } from 'react'

interface ContainerNarrowPaddedProps {
    /** Content to render inside the container */
    children?: ReactNode
}

export default function ContainerNarrowPadded({
    children,
}: ContainerNarrowPaddedProps) {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
