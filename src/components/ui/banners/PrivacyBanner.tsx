'use client';

import { useState } from 'react';

interface PrivacyBannerProps {
    message?: string;
    policyLabel?: string;
    policyHref?: string;
    acceptLabel?: string;
    rejectLabel?: string;
    onAccept?: () => void;
    onReject?: () => void;
}

export default function PrivacyBanner({
    message = 'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals., and we use analytics to understand how you interact with our website.',
    policyLabel = 'cookie policy',
    policyHref = '#',
    acceptLabel = 'Accept all',
    rejectLabel = 'Reject all',
    onAccept,
    onReject,
}: PrivacyBannerProps) {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-6">
            <div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white dark:bg-gray-900 p-6 ring-1 shadow-lg ring-gray-900/10 dark:ring-white/10">
                <p className="text-sm/6 text-gray-900 dark:text-gray-300">
                    {message}{' '}
                    <a
                        href={policyHref}
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                        {policyLabel}
                    </a>
                    .
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button
                        type="button"
                        onClick={() => {
                            setDismissed(true);
                            onAccept?.();
                        }}
                        className="rounded-md bg-gray-900 dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-xs hover:bg-gray-700 dark:hover:bg-gray-200"
                    >
                        {acceptLabel}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setDismissed(true);
                            onReject?.();
                        }}
                        className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                    >
                        {rejectLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
