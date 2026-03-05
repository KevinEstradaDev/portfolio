interface BentoItem {
    title: string;
    description: string;
    className?: string;
    content?: React.ReactNode;
}

interface BentoGridProps {
    eyebrow?: string;
    title: string;
    description?: string;
    items: BentoItem[];
}

export default function BentoGrid({
    eyebrow,
    title,
    description,
    items,
}: BentoGridProps) {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {eyebrow && (
                    <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                        {eyebrow}
                    </p>
                )}
                <h2 className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 dark:text-white sm:text-5xl">
                    {title}
                </h2>
                {description && (
                    <p className="mt-6 max-w-lg text-lg/8 text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                )}

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {/* Row 1 — two cells: 4 cols + 2 cols */}
                    {items[0] && (
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full">
                                {items[0].content && (
                                    <div className="flex items-center justify-center p-10 min-h-[200px]">
                                        {items[0].content}
                                    </div>
                                )}
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">
                                        {items[0].title}
                                    </h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                                        {items[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {items[1] && (
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/15 lg:rounded-tr-[2rem] w-full">
                                {items[1].content && (
                                    <div className="flex items-center justify-center p-10 min-h-[200px]">
                                        {items[1].content}
                                    </div>
                                )}
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">
                                        {items[1].title}
                                    </h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                                        {items[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Row 2 — two cells: 2 cols + 4 cols */}
                    {items[2] && (
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/15 lg:rounded-bl-[2rem] w-full">
                                {items[2].content && (
                                    <div className="flex items-center justify-center p-10 min-h-[200px]">
                                        {items[2].content}
                                    </div>
                                )}
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">
                                        {items[2].title}
                                    </h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                                        {items[2].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {items[3] && (
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full">
                                {items[3].content && (
                                    <div className="flex items-center justify-center p-10 min-h-[200px]">
                                        {items[3].content}
                                    </div>
                                )}
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">
                                        {items[3].title}
                                    </h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                                        {items[3].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
