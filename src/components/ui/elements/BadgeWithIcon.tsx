'use client'

import type { ComponentType, SVGProps } from 'react'

type BadgeColor =
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'

interface BadgeWithIconProps {
    /** Badge text */
    label?: string
    /** Color variant */
    color?: BadgeColor
    /** Optional HeroIcon component to render on the left */
    icon?: ComponentType<SVGProps<SVGSVGElement>>
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

const dotFillClasses: Record<BadgeColor, string> = {
    gray: 'fill-gray-400 dark:fill-gray-500',
    red: 'fill-red-500 dark:fill-red-400',
    yellow: 'fill-yellow-500 dark:fill-yellow-400',
    green: 'fill-green-500 dark:fill-green-400',
    blue: 'fill-blue-500 dark:fill-blue-400',
    indigo: 'fill-indigo-500 dark:fill-indigo-400',
    purple: 'fill-purple-500 dark:fill-purple-400',
    pink: 'fill-pink-500 dark:fill-pink-400',
}

export default function BadgeWithIcon({
    label = 'Badge',
    color = 'gray',
    icon: Icon,
}: BadgeWithIconProps) {
    return (
        <span
            className={`inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ${colorClasses[color]}`}
        >
            {Icon ? (
                <Icon className="size-3.5" aria-hidden="true" />
            ) : (
                <svg
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                    className={`size-1.5 ${dotFillClasses[color]}`}
                >
                    <circle r={3} cx={3} cy={3} />
                </svg>
            )}
            {label}
        </span>
    )
}
