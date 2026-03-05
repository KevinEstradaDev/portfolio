interface DividerLabelLeftProps {
    /** Text label displayed on the left of the divider */
    label?: string
}

export default function DividerLabelLeft({ label = 'Continue' }: DividerLabelLeftProps) {
    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-start">
                <span className="bg-white pr-3 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                    {label}
                </span>
            </div>
        </div>
    )
}
