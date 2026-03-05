import type { ReactNode } from 'react'

interface ContainerFullWidthPaddedProps {
    /** Content to render inside the container */
    children?: ReactNode
}

export default function ContainerFullWidthPadded({
    children,
}: ContainerFullWidthPaddedProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
