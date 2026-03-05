'use client';

import { useState } from 'react';

interface Tab {
    name: string;
    href: string;
    current?: boolean;
}

interface SectionHeadingTabsProps {
    title: string;
    tabs: Tab[];
    onTabChange?: (tabName: string) => void;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function SectionHeadingTabs({
    title,
    tabs: initialTabs,
    onTabChange,
}: SectionHeadingTabsProps) {
    const [tabs, setTabs] = useState(initialTabs);

    const handleTabClick = (clickedName: string) => {
        setTabs((prev) =>
            prev.map((tab) => ({
                ...tab,
                current: tab.name === clickedName,
            }))
        );
        onTabChange?.(clickedName);
    };

    return (
        <div className="border-b border-gray-200 dark:border-gray-700 pb-5 sm:pb-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>

            {/* Mobile: dropdown select */}
            <div className="mt-3 sm:hidden">
                <label htmlFor="current-tab" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="current-tab"
                    name="current-tab"
                    defaultValue={tabs.find((tab) => tab.current)?.name}
                    onChange={(e) => handleTabClick(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>

            {/* Desktop: horizontal tabs */}
            <div className="mt-3 hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(tab.name);
                            }}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                                tab.current
                                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300',
                                'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                            )}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
