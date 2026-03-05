'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

interface FlyoutItem {
    name: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

interface NavItem {
    name: string;
    href: string;
    flyoutItems?: FlyoutItem[];
}

interface HeaderProps {
    logo?: React.ReactNode;
    navigation: NavItem[];
    ctaLabel?: string;
    ctaHref?: string;
}

export default function Header({
    logo,
    navigation,
    ctaLabel = 'Log in',
    ctaHref = '#',
}: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-900">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        {logo ?? (
                            <div className="h-8 w-auto text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                                Logo
                            </div>
                        )}
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Desktop navigation */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) =>
                        item.flyoutItems ? (
                            <Popover key={item.name} className="relative">
                                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white outline-none">
                                    {item.name}
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="size-5 flex-none text-gray-400"
                                    />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute top-full z-10 -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 ring-1 shadow-lg ring-gray-900/5 dark:ring-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                >
                                    <div className="p-4">
                                        {item.flyoutItems.map((flyout) => (
                                            <div
                                                key={flyout.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600">
                                                    <span className="size-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                                        {flyout.icon}
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <a
                                                        href={flyout.href}
                                                        className="block font-semibold text-gray-900 dark:text-white"
                                                    >
                                                        {flyout.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                                        {flyout.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Popover>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                            >
                                {item.name}
                            </a>
                        )
                    )}
                </PopoverGroup>

                {/* CTA */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href={ctaHref}
                        className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                    >
                        {ctaLabel} <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Mobile menu dialog */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {logo ?? (
                                <div className="h-8 w-auto text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                                    Logo
                                </div>
                            )}
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) =>
                                    item.flyoutItems ? (
                                        <Disclosure
                                            key={item.name}
                                            as="div"
                                            className="-mx-3"
                                        >
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                                                {item.name}
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="size-5 flex-none group-data-open:rotate-180"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {item.flyoutItems.map(
                                                    (flyout) => (
                                                        <DisclosureButton
                                                            key={flyout.name}
                                                            as="a"
                                                            href={flyout.href}
                                                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                                        >
                                                            {flyout.name}
                                                        </DisclosureButton>
                                                    )
                                                )}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="py-6">
                                <a
                                    href={ctaHref}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    {ctaLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
