'use client';

import { useState } from 'react';
import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';

/* ── Heroicons (inline for self-containment) ── */
import {
    FaceSmileIcon as FaceSmileIconOutline,
} from '@heroicons/react/24/outline';
import {
    FaceSmileIcon as FaceSmileIconMini,
    PaperClipIcon,
} from '@heroicons/react/20/solid';

const moods = [
    { name: 'Excited', value: 'excited', icon: FaceSmileIconMini, iconColor: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    {
        name: 'Loved', value: 'loved', icon: () => (
            <svg className="size-5 shrink-0 text-pink-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.723.723 0 01-.692 0h-.002z" />
            </svg>
        ), iconColor: 'text-pink-500', bgColor: 'bg-pink-100'
    },
    { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-green-500', bgColor: 'bg-green-100' },
    { name: 'Sad', value: 'sad', icon: FaceSmileIconMini, iconColor: 'text-blue-500', bgColor: 'bg-blue-100' },
    {
        name: 'I feel nothing', value: 'null', icon: () => (
            <svg className="size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-1.536 5.927A4.48 4.48 0 0010 13c-.87 0-1.69.248-2.382.677l-.914-.405a.5.5 0 11.404-.912l.26.116A5.52 5.52 0 0110 12c.96 0 1.866.245 2.654.679l.283-.126a.5.5 0 01.404.912l-.937.415A4.48 4.48 0 0010 14c-.87 0-1.69-.248-2.382-.677l-.914.405a.5.5 0 01-.404-.912l.26-.116z" clipRule="evenodd" />
            </svg>
        ), iconColor: 'text-gray-400', bgColor: 'bg-gray-100'
    },
];

interface TextareaTitlePillProps {
    /** Placeholder for the title input */
    titlePlaceholder?: string;
    /** Placeholder for the textarea body */
    bodyPlaceholder?: string;
    /** Submit button label */
    submitLabel?: string;
    /** Submit callback */
    onSubmit?: (data: { title: string; body: string; mood: string }) => void;
}

export default function TextareaTitlePill({
    titlePlaceholder = 'Title',
    bodyPlaceholder = 'Write a description...',
    submitLabel = 'Create',
    onSubmit,
}: TextareaTitlePillProps) {
    const [selected, setSelected] = useState(moods[moods.length - 1]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit?.({ title, body, mood: selected.value });
    }

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600 shadow-xs focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label htmlFor="title-pill" className="sr-only">
                    Title
                </label>
                <input
                    id="title-pill"
                    type="text"
                    placeholder={titlePlaceholder}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full border-0 pt-2.5 text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-900 placeholder:text-gray-400 focus:ring-0"
                />
                <label htmlFor="description-pill" className="sr-only">
                    Description
                </label>
                <textarea
                    id="description-pill"
                    rows={2}
                    placeholder={bodyPlaceholder}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="block w-full resize-none border-0 py-0 text-gray-900 dark:text-white bg-white dark:bg-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                />

                {/* Spacer for the toolbar */}
                <div aria-hidden="true">
                    <div className="py-2">
                        <div className="h-9" />
                    </div>
                </div>
            </div>

            {/* ── Bottom toolbar ── */}
            <div className="absolute inset-x-px bottom-0">
                <div className="flex items-center justify-between space-x-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 py-2 sm:px-3 rounded-b-lg">
                    <div className="flex">
                        {/* Attach file */}
                        <button
                            type="button"
                            className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400 dark:text-gray-500"
                        >
                            <PaperClipIcon
                                aria-hidden="true"
                                className="-ml-1 mr-2 size-5 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                            />
                            <span className="text-sm italic text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                                Attach a file
                            </span>
                        </button>
                    </div>
                    <div className="flex shrink-0 items-center space-x-2">
                        {/* Mood selector */}
                        <Listbox value={selected} onChange={setSelected}>
                            <Label className="sr-only">Your mood</Label>
                            <div className="relative">
                                <ListboxButton className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                    {selected.value === 'null' ? (
                                        <FaceSmileIconOutline aria-hidden="true" className="size-5 shrink-0" />
                                    ) : (
                                        <span>
                                            <span className={`flex size-8 items-center justify-center rounded-full ${selected.bgColor}`}>
                                                <selected.icon aria-hidden="true" className={`size-5 shrink-0 ${selected.iconColor}`} />
                                            </span>
                                        </span>
                                    )}
                                </ListboxButton>
                                <ListboxOptions
                                    transition
                                    className="absolute right-0 bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white dark:bg-gray-800 py-3 text-base shadow ring-1 ring-black/5 dark:ring-white/10 focus:outline-none data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:opacity-0 sm:ml-auto sm:w-64 sm:text-sm"
                                >
                                    {moods.map((mood) => (
                                        <ListboxOption
                                            key={mood.value}
                                            value={mood}
                                            className="relative cursor-default bg-white dark:bg-gray-800 py-2 pr-9 pl-3 select-none data-focus:bg-gray-100 dark:data-focus:bg-gray-700"
                                        >
                                            <div className="flex items-center">
                                                <div className={`flex size-8 items-center justify-center rounded-full ${mood.bgColor}`}>
                                                    <mood.icon
                                                        aria-hidden="true"
                                                        className={`size-5 shrink-0 ${mood.iconColor}`}
                                                    />
                                                </div>
                                                <span className="ml-3 block truncate font-medium text-gray-900 dark:text-white">
                                                    {mood.name}
                                                </span>
                                            </div>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {submitLabel}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
