'use client';

import {
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface FlyoutItem {
    name: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

interface FooterAction {
    name: string;
    href: string;
    icon: React.ReactNode;
}

interface FlyoutMenuProps {
    label: string;
    items: FlyoutItem[];
    footerActions?: FooterAction[];
}

export default function FlyoutMenu({
    label,
    items,
    footerActions,
}: FlyoutMenuProps) {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white outline-none">
                <span>{label}</span>
                <ChevronDownIcon aria-hidden="true" className="size-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-gray-800 text-sm/6 ring-1 shadow-lg ring-gray-900/5 dark:ring-white/10">
                    <div className="p-4">
                        {items.map((item) => (
                            <div
                                key={item.name}
                                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            >
                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600">
                                    <span className="size-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        {item.icon}
                                    </span>
                                </div>
                                <div>
                                    <a
                                        href={item.href}
                                        className="font-semibold text-gray-900 dark:text-white"
                                    >
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {footerActions && footerActions.length > 0 && (
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 dark:divide-white/10 bg-gray-50 dark:bg-gray-700/50">
                            {footerActions.map((action) => (
                                <a
                                    key={action.name}
                                    href={action.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <span className="size-5 flex-none text-gray-400 dark:text-gray-300">
                                        {action.icon}
                                    </span>
                                    {action.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </PopoverPanel>
        </Popover>
    );
}
