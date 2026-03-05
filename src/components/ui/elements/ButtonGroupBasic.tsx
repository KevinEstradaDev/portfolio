'use client'

interface ButtonGroupItem {
    /** Button label */
    label: string
    /** Click callback */
    onClick?: () => void
}

interface ButtonGroupBasicProps {
    /** Buttons in the group */
    buttons?: ButtonGroupItem[]
}

const defaultButtons: ButtonGroupItem[] = [
    { label: 'Years' },
    { label: 'Months' },
    { label: 'Days' },
]

export default function ButtonGroupBasic({
    buttons = defaultButtons,
}: ButtonGroupBasicProps) {
    return (
        <span className="isolate inline-flex rounded-md shadow-xs">
            {buttons.map((btn, idx) => {
                const isFirst = idx === 0
                const isLast = idx === buttons.length - 1

                return (
                    <button
                        key={btn.label}
                        type="button"
                        onClick={btn.onClick}
                        className={`relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700 ${isFirst
                                ? 'rounded-l-md bg-white dark:bg-gray-800'
                                : isLast
                                    ? '-ml-px rounded-r-md bg-white dark:bg-gray-800'
                                    : '-ml-px bg-white dark:bg-gray-800'
                            }`}
                    >
                        {btn.label}
                    </button>
                )
            })}
        </span>
    )
}
