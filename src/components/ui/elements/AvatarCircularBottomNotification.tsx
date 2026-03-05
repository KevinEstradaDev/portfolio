'use client'

import Image from 'next/image'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type NotificationColor = 'gray' | 'red' | 'green' | 'yellow'

interface AvatarCircularBottomNotificationProps {
    /** Image source URL */
    src?: string
    /** Alt text */
    alt?: string
    /** Size variant */
    size?: AvatarSize
    /** Notification dot color */
    notificationColor?: NotificationColor
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

const dotSizeClasses: Record<AvatarSize, string> = {
    xs: 'size-1.5',
    sm: 'size-2',
    md: 'size-2.5',
    lg: 'size-3',
    xl: 'size-3.5',
}

const dotColorClasses: Record<NotificationColor, string> = {
    gray: 'bg-gray-300 dark:bg-gray-500',
    red: 'bg-red-400 dark:bg-red-500',
    green: 'bg-green-400 dark:bg-green-500',
    yellow: 'bg-yellow-400 dark:bg-yellow-500',
}

export default function AvatarCircularBottomNotification({
    src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt = '',
    size = 'md',
    notificationColor = 'green',
}: AvatarCircularBottomNotificationProps) {
    return (
        <span className="relative inline-block">
            <Image
                src={src}
                alt={alt}
                width={sizePixels[size]}
                height={sizePixels[size]}
                className={`${sizeClasses[size]} inline-block rounded-full`}
            />
            <span
                className={`absolute bottom-0 right-0 block ${dotSizeClasses[size]} rounded-full ${dotColorClasses[notificationColor]} ring-2 ring-white dark:ring-gray-900`}
            />
        </span>
    )
}
