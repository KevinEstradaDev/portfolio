'use client';

import { PlusIcon } from '@heroicons/react/20/solid';

interface EmptyStateDashedProps {
    /** Optional custom icon (defaults to a document SVG) */
    icon?: React.ReactNode;
    /** Main label text */
    title: string;
    /** Optional description below the title */
    description?: string;
    /** Click handler for the entire block */
    onClick?: () => void;
}

const defaultIcon = (
    <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        className="mx-auto size-12 text-gray-400 dark:text-gray-500"
    >
        <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
    </svg>
);

export default function EmptyStateDashed({
    icon,
    title,
    description,
    onClick,
}: EmptyStateDashedProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center hover:border-gray-400 dark:hover:border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none transition-colors"
        >
            {icon ?? defaultIcon}
            <span className="mt-2 block text-sm font-semibold text-gray-900 dark:text-white">
                {title}
            </span>
            {description && (
                <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                    {description}
                </span>
            )}
        </button>
    );
}
