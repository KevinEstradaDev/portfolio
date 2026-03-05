'use client'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarCircularPlaceholderInitialsProps {
    /** 1–2 character initials */
    initials?: string
    /** Size variant */
    size?: AvatarSize
    /** Background color class */
    bgColor?: string
}

const sizeClasses: Record<AvatarSize, string> = {
    xs: 'size-6',
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
    xl: 'size-14',
}

const fontSizeClasses: Record<AvatarSize, string> = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
}

export default function AvatarCircularPlaceholderInitials({
    initials = 'TW',
    size = 'md',
    bgColor = 'bg-gray-500',
}: AvatarCircularPlaceholderInitialsProps) {
    return (
        <span
            className={`${sizeClasses[size]} ${bgColor} inline-flex items-center justify-center rounded-full`}
        >
            <span
                className={`${fontSizeClasses[size]} font-medium text-white`}
            >
                {initials}
            </span>
        </span>
    )
}
