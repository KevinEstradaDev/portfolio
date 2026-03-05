import type { ReactNode } from 'react'

interface CardBasicProps {
    /** Content to render inside the card */
    children?: ReactNode
}

export default function CardBasic({ children }: CardBasicProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-gray-900/30">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}
