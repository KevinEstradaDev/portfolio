interface SectionHeadingDescriptionProps {
    title: string;
    description: string;
}

export default function SectionHeadingDescription({
    title,
    description,
}: SectionHeadingDescriptionProps) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
}
