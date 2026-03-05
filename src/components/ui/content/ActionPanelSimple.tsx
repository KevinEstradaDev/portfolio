'use client'

interface ActionPanelSimpleProps {
    /** Panel heading */
    title: string
    /** Description text */
    description: string
    /** Button label */
    buttonLabel?: string
    /** Button click handler */
    onAction?: () => void
}

export default function ActionPanelSimple({
    title,
    description,
    buttonLabel = 'Button text',
    onAction,
}: ActionPanelSimpleProps) {
    return (
        <div className="bg-white dark:bg-gray-900 shadow-sm sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base/6 font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                    <p>{description}</p>
                </div>
                <div className="mt-5">
                    <button
                        type="button"
                        onClick={onAction}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}
