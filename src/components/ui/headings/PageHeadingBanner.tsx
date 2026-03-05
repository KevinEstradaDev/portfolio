'use client';

interface PageHeadingBannerProps {
    bannerUrl: string;
    avatarUrl: string;
    name: string;
    role?: string;
    onMessage?: () => void;
    onCall?: () => void;
}

export default function PageHeadingBanner({
    bannerUrl,
    avatarUrl,
    name,
    role,
    onMessage,
    onCall,
}: PageHeadingBannerProps) {
    return (
        <div>
            {/* Banner image */}
            <div>
                <img
                    alt="Profile banner"
                    src={bannerUrl}
                    className="h-32 w-full object-cover lg:h-48 rounded-t-lg"
                />
            </div>

            {/* Profile section */}
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <img
                            alt={name}
                            src={avatarUrl}
                            className="size-24 rounded-full ring-4 ring-white dark:ring-gray-900 sm:size-32 object-cover"
                        />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">
                                {name}
                            </h1>
                            {role && (
                                <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
                            )}
                        </div>
                        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <button
                                type="button"
                                onClick={onMessage}
                                className="inline-flex justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 shadow-xs ring-gray-300 dark:ring-gray-600 ring-inset hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="-ml-0.5 mr-1.5 size-5 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                    />
                                </svg>
                                Message
                            </button>
                            <button
                                type="button"
                                onClick={onCall}
                                className="inline-flex justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 shadow-xs ring-gray-300 dark:ring-gray-600 ring-inset hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="-ml-0.5 mr-1.5 size-5 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                    />
                                </svg>
                                Call
                            </button>
                        </div>
                    </div>
                </div>
                {/* Hidden name for medium screens */}
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">
                        {name}
                    </h1>
                    {role && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
