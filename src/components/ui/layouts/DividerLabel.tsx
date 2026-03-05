interface DividerLabelProps {
    /** Text label displayed in the center of the divider */
    label?: string
}

export default function DividerLabel({ label = 'Continue' }: DividerLabelProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                    {label}
                </span>
            </div>
        </div>
    )
}
