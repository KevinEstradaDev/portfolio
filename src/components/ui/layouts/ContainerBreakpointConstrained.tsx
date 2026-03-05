import type { ReactNode } from 'react'

interface ContainerBreakpointConstrainedProps {
    /** Content to render inside the container */
    children?: ReactNode
}

export default function ContainerBreakpointConstrained({
    children,
}: ContainerBreakpointConstrainedProps) {
    return (
        <div className="container mx-auto sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
