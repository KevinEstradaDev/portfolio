'use client'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarCircularPlaceholderIconProps {
    /** Size variant */
    size?: AvatarSize
}

const sizeClasses: Record<AvatarSize, string> = {
    xs: 'size-6',
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
    xl: 'size-14',
}

const iconSizeClasses: Record<AvatarSize, string> = {
    xs: 'size-4',
    sm: 'size-5',
    md: 'size-6',
    lg: 'size-8',
    xl: 'size-9',
}

export default function AvatarCircularPlaceholderIcon({
    size = 'md',
}: AvatarCircularPlaceholderIconProps) {
    return (
        <span
            className={`${sizeClasses[size]} inline-block overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700`}
        >
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className={`${iconSizeClasses[size]} mx-auto mt-auto text-gray-300 dark:text-gray-500`}
                style={{ display: 'block', marginTop: 'auto' }}
            >
                <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-2.54-.106A7.48 7.48 0 0012 18a7.48 7.48 0 00-4.145 1.008A8.25 8.25 0 0012 20.25a8.25 8.25 0 004.145-1.259zM12 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                    clipRule="evenodd"
                />
            </svg>
        </span>
    )
}
