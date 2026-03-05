'use client';

import { useState } from 'react';

interface FormLayoutTwoColumnProps {
    /** Submit callback with form data */
    onSubmit?: (data: Record<string, string>) => void;
    /** Cancel callback */
    onCancel?: () => void;
}

const notificationMethods = [
    { id: 'push-everything', title: 'Everything' },
    { id: 'push-email', title: 'Same as email' },
    { id: 'push-nothing', title: 'No push notifications' },
];

export default function FormLayoutTwoColumn({
    onSubmit,
    onCancel,
}: FormLayoutTwoColumnProps) {
    const [pushMethod, setPushMethod] = useState('push-everything');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!onSubmit) return;
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        data.pushNotifications = pushMethod;
        onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                {/* ── Personal Information ── */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 dark:border-gray-700 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Personal Information
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            Use a permanent address where you can receive mail.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        {/* First name */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Last name */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Country */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="country"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white dark:bg-white/5 py-1.5 pr-8 pl-3 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                                <svg
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 dark:text-gray-400 sm:size-4"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Street */}
                        <div className="col-span-full">
                            <label
                                htmlFor="street"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label
                                htmlFor="city"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* State */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="region"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* ZIP */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="postal-code"
                                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                            >
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="postalCode"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Notifications ── */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 dark:border-gray-700 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                            Notifications
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                            We&apos;ll always let you know about important changes, but you pick
                            what else you want to hear about.
                        </p>
                    </div>

                    <div className="max-w-2xl space-y-10 md:col-span-2">
                        {/* Email notifications */}
                        <fieldset>
                            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                By email
                            </legend>
                            <div className="mt-6 space-y-6">
                                {[
                                    {
                                        id: 'comments',
                                        label: 'Comments',
                                        description:
                                            'Get notified when someone posts a comment on a posting.',
                                    },
                                    {
                                        id: 'candidates',
                                        label: 'Candidates',
                                        description:
                                            'Get notified when a candidate applies for a job.',
                                    },
                                    {
                                        id: 'offers',
                                        label: 'Offers',
                                        description:
                                            'Get notified when a candidate accepts or rejects an offer.',
                                    },
                                ].map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="flex h-6 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    id={item.id}
                                                    name={item.id}
                                                    type="checkbox"
                                                    defaultChecked={item.id === 'comments'}
                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                />
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-checked:opacity-100"
                                                    />
                                                    <path
                                                        d="M3 7H11"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm/6">
                                            <label
                                                htmlFor={item.id}
                                                className="font-medium text-gray-900 dark:text-white"
                                            >
                                                {item.label}
                                            </label>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Push notifications */}
                        <fieldset>
                            <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Push notifications
                            </legend>
                            <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                                These are delivered via SMS to your mobile phone.
                            </p>
                            <div className="mt-6 space-y-6">
                                {notificationMethods.map((method) => (
                                    <div key={method.id} className="flex items-center gap-x-3">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                id={method.id}
                                                name="push-notifications"
                                                type="radio"
                                                checked={pushMethod === method.id}
                                                onChange={() => setPushMethod(method.id)}
                                                className="col-start-1 row-start-1 appearance-none rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <span className="pointer-events-none col-start-1 row-start-1 size-1.5 self-center justify-self-center rounded-full bg-white opacity-0 group-has-checked:opacity-100 forced-colors:hidden" />
                                        </div>
                                        <label
                                            htmlFor={method.id}
                                            className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                                        >
                                            {method.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            {/* ── Actions ── */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
