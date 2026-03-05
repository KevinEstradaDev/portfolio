interface DividerTitleLeftProps {
    /** Title text displayed on the left of the divider */
    title?: string
}

export default function DividerTitleLeft({ title = 'Projects' }: DividerTitleLeftProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-start">
                <span className="bg-white pr-3 text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                    {title}
                </span>
            </div>
        </div>
    )
}
