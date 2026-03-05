'use client';

import { useState, Fragment } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    Cog6ToothIcon,
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
} from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

interface NavItem {
    name: string;
    href: string;
    icon?: React.ReactNode;
    current?: boolean;
}

interface UserNavItem {
    name: string;
    href: string;
}

interface User {
    name: string;
    email: string;
    imageUrl: string;
}

interface SidebarLayoutProps {
    navigation: NavItem[];
    userNavigation: UserNavItem[];
    user: User;
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

export default function SidebarLayout({
    navigation: initialNavigation,
    userNavigation,
    user,
    children,
}: SidebarLayoutProps) {
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

    const sidebarContent = (
        <>
            {/* Logo */}
            <div className="flex h-16 shrink-0 items-center px-6">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    A
                </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col px-6">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
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
                    </li>
                    <li className="-mx-2 mt-auto">
                        <a
                            href="#"
                            className="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                            <Cog6ToothIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                            />
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );

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
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 pb-4 ring-1 ring-gray-200 dark:ring-white/10">
                            {sidebarContent}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pb-4">
                    {sidebarContent}
                </div>
            </div>

            {/* Main content area */}
            <div className="lg:pl-72">
                {/* Top bar */}
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Separator */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-200 dark:bg-gray-700 lg:hidden" />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        {/* Search */}
                        <form action="#" method="GET" className="grid w-full grid-cols-1">
                            <input
                                name="search"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                                className="col-start-1 row-start-1 block size-full bg-white dark:bg-gray-900 pl-8 text-base text-gray-900 dark:text-white outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 sm:text-sm/6"
                            />
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400 dark:text-gray-500"
                            />
                        </form>

                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Separator */}
                            <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-700" />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <MenuButton className="-m-1.5 flex items-center p-1.5">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={user.imageUrl}
                                        className="size-8 rounded-full bg-gray-50 dark:bg-gray-800"
                                    />
                                    <span className="hidden lg:flex lg:items-center">
                                        <span
                                            aria-hidden="true"
                                            className="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-white"
                                        >
                                            {user.name}
                                        </span>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="ml-2 size-5 text-gray-400 dark:text-gray-500"
                                        />
                                    </span>
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-gray-700 py-2 ring-1 shadow-lg ring-black/5 dark:ring-white/10 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1 text-sm/6 text-gray-900 dark:text-gray-200 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
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
