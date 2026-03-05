'use client';

import { useState } from 'react';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
    name: string;
    href: string;
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

interface BrandNavOverlapLayoutProps {
    navigation: NavItem[];
    userNavigation: UserNavItem[];
    user: User;
    pageTitle?: string;
    children?: React.ReactNode;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function BrandNavOverlapLayout({
    navigation: initialNavigation,
    userNavigation,
    user,
    pageTitle,
    children,
}: BrandNavOverlapLayoutProps) {
    const [navigation, setNavigation] = useState(initialNavigation);

    const handleNavClick = (clickedName: string) => {
        setNavigation((prev) =>
            prev.map((item) => ({
                ...item,
                current: item.name === clickedName,
            }))
        );
    };

    return (
        <div className="min-h-full">
            {/* Branded navigation */}
            <Disclosure as="nav" className="bg-indigo-600 dark:bg-indigo-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="shrink-0">
                                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                                    A
                                </div>
                            </div>
                            {/* Desktop nav */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline gap-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.name);
                                            }}
                                            aria-current={
                                                item.current
                                                    ? 'page'
                                                    : undefined
                                            }
                                            className={classNames(
                                                item.current
                                                    ? 'bg-indigo-700 dark:bg-indigo-800 text-white'
                                                    : 'text-indigo-100 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desktop right side */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-indigo-600 dark:bg-indigo-700 p-1 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 focus:outline-hidden"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-indigo-600 dark:bg-indigo-700 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 focus:outline-hidden">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                alt=""
                                                src={user.imageUrl}
                                                className="size-8 rounded-full"
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 ring-1 shadow-lg ring-black/5 dark:ring-white/10 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-focus:bg-gray-100 dark:data-focus:bg-gray-600 data-focus:outline-hidden"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 p-2 text-indigo-200 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 focus:outline-hidden">
                                <span className="sr-only">
                                    Open main menu
                                </span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block size-6 group-data-open:hidden"
                                />
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="hidden size-6 group-data-open:block"
                                />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                {/* Mobile menu panel */}
                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    handleNavClick(item.name);
                                }}
                                aria-current={
                                    item.current ? 'page' : undefined
                                }
                                className={classNames(
                                    item.current
                                        ? 'bg-indigo-700 dark:bg-indigo-800 text-white'
                                        : 'text-indigo-100 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                    <div className="border-t border-indigo-500 pt-4 pb-3">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <img
                                    alt=""
                                    src={user.imageUrl}
                                    className="size-10 rounded-full"
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base/5 font-medium text-white">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-indigo-200">
                                    {user.email}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-700 p-1 text-indigo-200 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 focus:outline-hidden"
                            >
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <BellIcon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {/* Brand header area that provides the overlap background */}
            <div className="bg-indigo-600 dark:bg-indigo-700 pb-32">
                {pageTitle && (
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                {pageTitle}
                            </h1>
                        </div>
                    </header>
                )}
            </div>

            {/* Main content — overlaps into the brand header area */}
            <main className="-mt-32">
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
