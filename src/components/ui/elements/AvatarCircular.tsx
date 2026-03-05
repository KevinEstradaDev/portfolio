'use client'

import Image from 'next/image'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarCircularProps {
    /** Image source URL */
    src?: string
    /** Alt text */
    alt?: string
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

const sizePixels: Record<AvatarSize, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
}

export default function AvatarCircular({
    src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt = '',
    size = 'md',
}: AvatarCircularProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={sizePixels[size]}
            height={sizePixels[size]}
            className={`${sizeClasses[size]} inline-block rounded-full`}
        />
    )
}
