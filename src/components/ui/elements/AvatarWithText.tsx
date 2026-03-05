'use client'

import Image from 'next/image'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarWithTextProps {
    /** Image source URL */
    src?: string
    /** Alt text */
    alt?: string
    /** Size variant */
    size?: AvatarSize
    /** Primary text (e.g. name) */
    primaryText?: string
    /** Secondary text (e.g. role or email) */
    secondaryText?: string
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

const primaryTextClasses: Record<AvatarSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
}

const secondaryTextClasses: Record<AvatarSize, string> = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-sm',
}

export default function AvatarWithText({
    src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt = '',
    size = 'md',
    primaryText = 'Tom Cook',
    secondaryText,
}: AvatarWithTextProps) {
    return (
        <div className="inline-flex items-center gap-x-3">
            <Image
                src={src}
                alt={alt}
                width={sizePixels[size]}
                height={sizePixels[size]}
                className={`${sizeClasses[size]} inline-block rounded-full`}
            />
            <div>
                <p
                    className={`${primaryTextClasses[size]} font-medium text-gray-900 dark:text-white`}
                >
                    {primaryText}
                </p>
                {secondaryText && (
                    <p
                        className={`${secondaryTextClasses[size]} text-gray-500 dark:text-gray-400`}
                    >
                        {secondaryText}
                    </p>
                )}
            </div>
        </div>
    )
}
