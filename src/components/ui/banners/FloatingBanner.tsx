'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface FloatingBannerProps {
    message: string;
    linkLabel?: string;
    linkHref?: string;
    onDismiss?: () => void;
}

export default function FloatingBanner({
    message,
    linkLabel,
    linkHref = '#',
    onDismiss,
}: FloatingBannerProps) {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
            <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 dark:bg-white px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
                <p className="text-sm/6 text-white dark:text-gray-900">
                    <a href={linkHref}>
                        <strong className="font-semibold">{message}</strong>
                        {linkLabel && (
                            <>
                                <svg
                                    viewBox="0 0 2 2"
                                    aria-hidden="true"
                                    className="mx-2 inline size-0.5 fill-current"
                                >
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                {linkLabel}&nbsp;<span aria-hidden="true">&rarr;</span>
                            </>
                        )}
                    </a>
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setDismissed(true);
                        onDismiss?.();
                    }}
                    className="-m-1.5 flex-none p-1.5"
                >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon
                        aria-hidden="true"
                        className="size-5 text-white dark:text-gray-900"
                    />
                </button>
            </div>
        </div>
    );
}
