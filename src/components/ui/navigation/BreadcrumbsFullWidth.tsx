'use client'

import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
    name: string
    href?: string
    current?: boolean
}

interface BreadcrumbsFullWidthProps {
    /** Breadcrumb items */
    items?: BreadcrumbItem[]
    /** Include home icon as first crumb */
    showHome?: boolean
    /** Home link href */
    homeHref?: string
    /** Item click callback */
    onNavigate?: (name: string) => void
}

const defaultItems: BreadcrumbItem[] = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

export default function BreadcrumbsFullWidth({
    items = defaultItems,
    showHome = true,
    homeHref = '#',
    onNavigate,
}: BreadcrumbsFullWidthProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="border-b border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
        >
            <ol
                role="list"
                className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
            >
                {showHome && (
                    <li className="flex">
                        <div className="flex items-center">
                            <a
                                href={homeHref}
                                onClick={(e) => {
                                    if (onNavigate) {
                                        e.preventDefault()
                                        onNavigate('Home')
                                    }
                                }}
                                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                            >
                                <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                                <span className="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                )}
                {items.map((item) => (
                    <li key={item.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                                className="h-full w-6 shrink-0 text-gray-200 dark:text-gray-700"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
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
                                        ? 'ml-4 text-sm font-medium text-gray-500 dark:text-gray-400'
                                        : 'ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
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
