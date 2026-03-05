'use client'

import { CheckIcon } from '@heroicons/react/24/solid'

type StepStatus = 'complete' | 'current' | 'upcoming'

interface Step {
    id: string
    name: string
    description?: string
    href?: string
    status: StepStatus
}

interface ProgressBarCirclesTextProps {
    /** Steps to display */
    steps?: Step[]
    /** Step click callback */
    onStepClick?: (stepId: string) => void
}

const defaultSteps: Step[] = [
    { id: '01', name: 'Create account', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
    { id: '02', name: 'Profile information', description: 'Cursus semper viverra.', href: '#', status: 'current' },
    { id: '03', name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
    { id: '04', name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
    { id: '05', name: 'Preview', description: 'Iusto et officia maiores.', href: '#', status: 'upcoming' },
]

export default function ProgressBarCirclesText({
    steps = defaultSteps,
    onStepClick,
}: ProgressBarCirclesTextProps) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                    <li
                        key={step.name}
                        className={stepIdx !== steps.length - 1 ? 'relative pb-10' : 'relative'}
                    >
                        {step.status === 'complete' ? (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                                    />
                                )}
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="group relative flex items-start"
                                >
                                    <span className="flex h-9 items-center">
                                        <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                                            <CheckIcon aria-hidden="true" className="size-5 text-white" />
                                        </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{step.name}</span>
                                        {step.description && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{step.description}</span>
                                        )}
                                    </span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300 dark:bg-gray-600"
                                    />
                                )}
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    aria-current="step"
                                    className="group relative flex items-start"
                                >
                                    <span aria-hidden="true" className="flex h-9 items-center">
                                        <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-900">
                                            <span className="size-2.5 rounded-full bg-indigo-600" />
                                        </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{step.name}</span>
                                        {step.description && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{step.description}</span>
                                        )}
                                    </span>
                                </a>
                            </>
                        ) : (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300 dark:bg-gray-600"
                                    />
                                )}
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="group relative flex items-start"
                                >
                                    <span aria-hidden="true" className="flex h-9 items-center">
                                        <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:group-hover:border-gray-500">
                                            <span className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600" />
                                        </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{step.name}</span>
                                        {step.description && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{step.description}</span>
                                        )}
                                    </span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
