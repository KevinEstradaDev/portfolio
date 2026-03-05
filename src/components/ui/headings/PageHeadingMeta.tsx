'use client';

import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

interface MetaItem {
    label: string;
    icon: 'briefcase' | 'location' | 'currency' | 'calendar';
}

interface PageHeadingMetaProps {
    title: string;
    meta?: MetaItem[];
    status?: string;
    onPublish?: () => void;
    onEdit?: () => void;
}

const iconMap = {
    briefcase: BriefcaseIcon,
    location: MapPinIcon,
    currency: CurrencyDollarIcon,
    calendar: CalendarIcon,
};

export default function PageHeadingMeta({
    title,
    meta = [],
    status,
    onPublish,
    onEdit,
}: PageHeadingMetaProps) {
    return (
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    {title}
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    {status && (
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <CheckIcon
                                aria-hidden="true"
                                className="mr-1.5 size-5 shrink-0 text-green-400"
                            />
                            {status}
                        </div>
                    )}
                    {meta.map((item) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                            <div
                                key={item.label}
                                className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400"
                            >
                                <IconComponent
                                    aria-hidden="true"
                                    className="mr-1.5 size-5 shrink-0 text-gray-400 dark:text-gray-500"
                                />
                                {item.label}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <button
                        type="button"
                        onClick={onEdit}
                        className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 shadow-xs ring-gray-300 dark:ring-gray-600 ring-inset hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                        Edit
                    </button>
                </span>

                <span className="ml-3 hidden sm:block">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 shadow-xs ring-gray-300 dark:ring-gray-600 ring-inset hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                        View
                    </button>
                </span>

                <span className="sm:ml-3">
                    <button
                        type="button"
                        onClick={onPublish}
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                        Publish
                    </button>
                </span>

                {/* Dropdown for smaller screens */}
                <Menu as="div" className="relative ml-3 sm:hidden">
                    <MenuButton className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 shadow-xs ring-gray-300 dark:ring-gray-600 ring-inset hover:ring-gray-400 dark:hover:ring-gray-500">
                        More
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="-mr-1 ml-1.5 size-5 text-gray-400"
                        />
                    </MenuButton>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 ring-1 shadow-lg ring-black/5 dark:ring-white/10 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-focus:bg-gray-100 dark:data-focus:bg-gray-700 data-focus:outline-hidden"
                            >
                                Edit
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-focus:bg-gray-100 dark:data-focus:bg-gray-700 data-focus:outline-hidden"
                            >
                                View
                            </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    );
}
