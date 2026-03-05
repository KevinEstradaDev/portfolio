'use client'

interface ProgressBarProps {
    /** Progress value 0–100 */
    progress?: number
    /** Label displayed above the bar */
    label?: string
    /** Whether to show the percentage text */
    showPercentage?: boolean
}

export default function ProgressBar({
    progress = 50,
    label,
    showPercentage = true,
}: ProgressBarProps) {
    const clampedProgress = Math.min(100, Math.max(0, progress))

    return (
        <div>
            {(label || showPercentage) && (
                <div className="flex items-center justify-between mb-2">
                    {label && (
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {label}
                        </span>
                    )}
                    {showPercentage && (
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {clampedProgress}%
                        </span>
                    )}
                </div>
            )}
            <div
                aria-label={label || 'Progress'}
                aria-valuenow={clampedProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
                className="overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
            >
                <div
                    style={{ width: `${clampedProgress}%` }}
                    className="h-2 rounded-full bg-indigo-600 transition-all duration-300 ease-in-out"
                />
            </div>
        </div>
    )
}
