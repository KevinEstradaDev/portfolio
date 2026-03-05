'use client'

import Image from 'next/image'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarItem {
    /** Image source URL */
    src: string
    /** Alt text for the avatar */
    alt?: string
}

interface AvatarGroupStackedProps {
    /** Array of avatar items */
    avatars?: AvatarItem[]
    /** Size of each avatar */
    size?: AvatarSize
    /** Maximum number of avatars to display (rest are hidden) */
    maxDisplay?: number
}

const sizeClasses: Record<AvatarSize, string> = {
    xs: 'size-6',
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
    xl: 'size-14',
}

const sizePixels: Record<AvatarSize, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
}

const defaultAvatars: AvatarItem[] = [
    {
        src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'User 1',
    },
    {
        src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'User 2',
    },
    {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        alt: 'User 3',
    },
    {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'User 4',
    },
]

export default function AvatarGroupStacked({
    avatars = defaultAvatars,
    size = 'md',
    maxDisplay,
}: AvatarGroupStackedProps) {
    const displayed = maxDisplay ? avatars.slice(0, maxDisplay) : avatars
    const remaining = maxDisplay ? avatars.length - maxDisplay : 0

    return (
        <div className="flex -space-x-2 overflow-hidden">
            {displayed.map((avatar, index) => (
                <Image
                    key={index}
                    src={avatar.src}
                    alt={avatar.alt ?? ''}
                    width={sizePixels[size]}
                    height={sizePixels[size]}
                    className={`${sizeClasses[size]} inline-block rounded-full ring-2 ring-white dark:ring-gray-900`}
                />
            ))}
            {remaining > 0 && (
                <span
                    className={`${sizeClasses[size]} inline-flex items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-900`}
                >
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-300">
                        +{remaining}
                    </span>
                </span>
            )}
        </div>
    )
}
