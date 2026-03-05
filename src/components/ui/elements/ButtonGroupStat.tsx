'use client'

interface ButtonGroupStatItem {
    /** Button label */
    label: string
    /** Stat/count value */
    stat: string | number
    /** Click callback */
    onClick?: () => void
}

interface ButtonGroupStatProps {
    /** Buttons in the group */
    buttons?: ButtonGroupStatItem[]
}

const defaultButtons: ButtonGroupStatItem[] = [
    { label: 'Bookmarks', stat: 12 },
    { label: 'Mentions', stat: 4 },
    { label: 'Notifications', stat: 0 },
]

export default function ButtonGroupStat({
    buttons = defaultButtons,
}: ButtonGroupStatProps) {
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
                        className={`relative inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700 ${isFirst
                                ? 'rounded-l-md bg-white dark:bg-gray-800'
                                : isLast
                                    ? '-ml-px rounded-r-md bg-white dark:bg-gray-800'
                                    : '-ml-px bg-white dark:bg-gray-800'
                            }`}
                    >
                        {btn.label}
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                            {btn.stat}
                        </span>
                    </button>
                )
            })}
        </span>
    )
}
