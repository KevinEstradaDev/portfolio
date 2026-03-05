'use client'

type BadgeColor =
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'

interface BadgeFlatRemovableProps {
    /** Badge text */
    label?: string
    /** Color variant */
    color?: BadgeColor
    /** Callback when remove button is clicked */
    onRemove?: () => void
}

const colorClasses: Record<BadgeColor, string> = {
    gray: 'bg-gray-100 text-gray-600 dark:bg-gray-400/10 dark:text-gray-400',
    red: 'bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-500',
    green: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400',
    indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-400',
    purple: 'bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-400',
    pink: 'bg-pink-100 text-pink-700 dark:bg-pink-400/10 dark:text-pink-400',
}

const removeButtonClasses: Record<BadgeColor, string> = {
    gray: 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-500/20 dark:hover:text-gray-300',
    red: 'text-red-400 hover:bg-red-200 hover:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-300',
    yellow: 'text-yellow-500 hover:bg-yellow-200 hover:text-yellow-600 dark:hover:bg-yellow-500/20 dark:hover:text-yellow-300',
    green: 'text-green-400 hover:bg-green-200 hover:text-green-500 dark:hover:bg-green-500/20 dark:hover:text-green-300',
    blue: 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-blue-500/20 dark:hover:text-blue-300',
    indigo: 'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300',
    purple: 'text-purple-400 hover:bg-purple-200 hover:text-purple-500 dark:hover:bg-purple-500/20 dark:hover:text-purple-300',
    pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-500 dark:hover:bg-pink-500/20 dark:hover:text-pink-300',
}

export default function BadgeFlatRemovable({
    label = 'Badge',
    color = 'gray',
    onRemove,
}: BadgeFlatRemovableProps) {
    return (
        <span
            className={`inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 text-xs font-medium ${colorClasses[color]}`}
        >
            {label}
            <button
                type="button"
                onClick={onRemove}
                className={`group relative -mr-1 size-3.5 rounded-sm ${removeButtonClasses[color]}`}
            >
                <span className="sr-only">Remove</span>
                <svg
                    viewBox="0 0 14 14"
                    className="size-3.5 stroke-current"
                >
                    <path d="M4 4l6 6m0-6l-6 6" />
                </svg>
                <span className="absolute -inset-1" />
            </button>
        </span>
    )
}
