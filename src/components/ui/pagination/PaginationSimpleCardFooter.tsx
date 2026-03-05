'use client'

import { useState } from 'react'

interface PaginationSimpleCardFooterProps {
    /** Total number of items */
    totalItems?: number
    /** Items per page */
    itemsPerPage?: number
    /** Current active page (1-indexed) */
    currentPage?: number
    /** Page change callback */
    onPageChange?: (page: number) => void
}

export default function PaginationSimpleCardFooter({
    totalItems = 97,
    itemsPerPage = 10,
    currentPage: controlledPage,
    onPageChange,
}: PaginationSimpleCardFooterProps) {
    const [internalPage, setInternalPage] = useState(1)
    const currentPage = controlledPage ?? internalPage
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setInternalPage(page)
        onPageChange?.(page)
    }

    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:border-gray-700 dark:bg-gray-800"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Showing <span className="font-medium">{startItem}</span> to{' '}
                    <span className="font-medium">{endItem}</span> of{' '}
                    <span className="font-medium">{totalItems}</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600"
                >
                    Next
                </button>
            </div>
        </nav>
    )
}
