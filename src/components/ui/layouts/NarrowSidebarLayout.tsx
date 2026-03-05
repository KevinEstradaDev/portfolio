'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
} from '@heroicons/react/24/outline';

interface NavItem {
    name: string;
    href: string;
    icon?: React.ReactNode;
    current?: boolean;
}

interface NarrowSidebarLayoutProps {
    navigation: NavItem[];
    children?: React.ReactNode;
}

const defaultIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Dashboard: HomeIcon,
    Team: UsersIcon,
    Projects: FolderIcon,
    Calendar: CalendarIcon,
    Documents: DocumentDuplicateIcon,
    Reports: ChartPieIcon,
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NarrowSidebarLayout({
    navigation: initialNavigation,
    children,
}: NarrowSidebarLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navigation, setNavigation] = useState(initialNavigation);

    const handleNavClick = (clickedName: string) => {
        setNavigation((prev) =>
            prev.map((item) => ({
                ...item,
                current: item.name === clickedName,
            }))
        );
        setSidebarOpen(false);
    };

    const getIcon = (item: NavItem) => {
        if (item.icon) return item.icon;
        const IconComponent = defaultIcons[item.name];
        if (IconComponent) return <IconComponent aria-hidden="true" className="size-6 shrink-0" />;
        return <FolderIcon aria-hidden="true" className="size-6 shrink-0" />;
    };

    return (
        <div>
            {/* Mobile off-canvas sidebar */}
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />
                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(false)}
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                </button>
                            </div>
                        </TransitionChild>
                        {/* Full mobile sidebar with text labels */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6 pb-4 ring-1 ring-gray-200 dark:ring-white/10">
                            <div className="flex h-16 shrink-0 items-center">
                                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                    A
                                </div>
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(item.name);
                                                }}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                                )}
                                            >
                                                <span
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-indigo-600 dark:text-indigo-400'
                                                            : 'text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
                                                        ''
                                                    )}
                                                >
                                                    {getIcon(item)}
                                                </span>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static narrow sidebar for desktop — icon only */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-20 lg:flex-col">
                <div className="flex grow flex-col items-center gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 py-4">
                    {/* Logo */}
                    <div className="flex h-16 shrink-0 items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                            A
                        </div>
                    </div>

                    {/* Icon-only nav */}
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-col items-center gap-y-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.name);
                                        }}
                                        title={item.name}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400'
                                                : 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400',
                                            'group rounded-lg p-3'
                                        )}
                                    >
                                        {getIcon(item)}
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main content area */}
            <div className="lg:pl-20">
                {/* Mobile top bar */}
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                    <div aria-hidden="true" className="h-6 w-px bg-gray-200 dark:bg-gray-700 lg:hidden" />
                    <div className="flex flex-1 justify-end text-sm text-gray-500 dark:text-gray-400">
                        Narrow sidebar layout
                    </div>
                </div>

                {/* Page content */}
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
