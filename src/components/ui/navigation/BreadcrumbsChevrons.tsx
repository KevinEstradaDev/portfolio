'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
    name: string
    href?: string
    current?: boolean
}

interface BreadcrumbsChevronsProps {
    /** Breadcrumb items */
    items?: BreadcrumbItem[]
    /** Item click callback */
    onNavigate?: (name: string) => void
}

const defaultItems: BreadcrumbItem[] = [
    { name: 'Home', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

export default function BreadcrumbsChevrons({
    items = defaultItems,
    onNavigate,
}: BreadcrumbsChevronsProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol role="list" className="flex items-center space-x-4">
                {items.map((item, index) => (
                    <li key={item.name}>
                        <div className="flex items-center">
                            {index > 0 && (
                                <ChevronRightIcon
                                    aria-hidden="true"
                                    className="mr-4 size-5 shrink-0 text-gray-400 dark:text-gray-500"
                                />
                            )}
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (onNavigate) {
                                        e.preventDefault()
                                        onNavigate(item.name)
                                    }
                                }}
                                aria-current={item.current ? 'page' : undefined}
                                className={
                                    item.current
                                        ? 'text-sm font-medium text-gray-500 dark:text-gray-400'
                                        : 'text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                }
                            >
                                {item.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
