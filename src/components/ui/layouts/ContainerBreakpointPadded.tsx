import type { ReactNode } from 'react'

interface ContainerBreakpointPaddedProps {
    /** Content to render inside the container */
    children?: ReactNode
}

export default function ContainerBreakpointPadded({
    children,
}: ContainerBreakpointPaddedProps) {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
