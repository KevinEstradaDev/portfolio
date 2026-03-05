'use client'

import { useState } from 'react'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

interface PaginationCenteredProps {
    /** Total number of items */
    totalItems?: number
    /** Items per page */
    itemsPerPage?: number
    /** Current active page (1-indexed) */
    currentPage?: number
    /** Page change callback */
    onPageChange?: (page: number) => void
}

export default function PaginationCentered({
    totalItems = 97,
    itemsPerPage = 10,
    currentPage: controlledPage,
    onPageChange,
}: PaginationCenteredProps) {
    const [internalPage, setInternalPage] = useState(1)
    const currentPage = controlledPage ?? internalPage
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setInternalPage(page)
        onPageChange?.(page)
    }

    // Build page numbers array with ellipsis
    const getPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = []
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            pages.push(1)
            if (currentPage > 3) pages.push('...')
            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)
            for (let i = start; i <= end; i++) pages.push(i)
            if (currentPage < totalPages - 2) pages.push('...')
            pages.push(totalPages)
        }
        return pages
    }

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 dark:border-gray-700">
            {/* Previous */}
            <div className="-mt-px flex w-0 flex-1">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
                >
                    <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5 text-gray-400 dark:text-gray-500" />
                    Previous
                </button>
            </div>

            {/* Page numbers */}
            <div className="hidden md:-mt-px md:flex">
                {getPageNumbers().map((page, index) =>
                    typeof page === 'string' ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            aria-current={page === currentPage ? 'page' : undefined}
                            className={
                                page === currentPage
                                    ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400'
                                    : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                            }
                        >
                            {page}
                        </button>
                    )
                )}
            </div>

            {/* Next */}
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
                >
                    Next
                    <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5 text-gray-400 dark:text-gray-500" />
                </button>
            </div>
        </nav>
    )
}
