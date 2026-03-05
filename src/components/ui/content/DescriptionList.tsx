interface DescriptionItem {
    label: string;
    value: string | React.ReactNode;
}

interface DescriptionListProps {
    title: string;
    subtitle?: string;
    items: DescriptionItem[];
}

export default function DescriptionList({
    title,
    subtitle,
    items,
}: DescriptionListProps) {
    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="mt-6 border-t border-gray-100 dark:border-white/10">
                <dl className="divide-y divide-gray-100 dark:divide-white/10">
                    {items.map((item) => (
                        <div
                            key={item.label}
                            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                        >
                            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
                                {item.label}
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
