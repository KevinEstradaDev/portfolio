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

interface ProgressBarPanelsBorderProps {
    /** Steps to display */
    steps?: Step[]
    /** Step click callback */
    onStepClick?: (stepId: string) => void
}

const defaultSteps: Step[] = [
    { id: '01', name: 'Job details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
    { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
    { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
    { id: '04', name: 'Confirmation', description: 'Iusto et officia maiores.', href: '#', status: 'upcoming' },
]

export default function ProgressBarPanelsBorder({
    steps = defaultSteps,
    onStepClick,
}: ProgressBarPanelsBorderProps) {
    return (
        <nav aria-label="Progress">
            <ol
                role="list"
                className="overflow-hidden rounded-md border border-gray-300 lg:flex lg:rounded-none lg:border-l-0 lg:border-r-0 dark:border-gray-600"
            >
                {steps.map((step, stepIdx) => (
                    <li key={step.id} className="relative overflow-hidden lg:flex-1">
                        <div
                            className={
                                stepIdx === 0
                                    ? 'overflow-hidden rounded-t-md border-b-0 lg:rounded-t-none lg:border-b'
                                    : stepIdx === steps.length - 1
                                        ? 'overflow-hidden rounded-b-md border-t-0 lg:rounded-b-none lg:border-t'
                                        : 'overflow-hidden border-b-0 border-t-0 lg:border-b lg:border-t'
                            }
                        >
                            {step.status === 'complete' ? (
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="group"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full dark:group-hover:bg-gray-700"
                                    />
                                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                                        <span className="shrink-0">
                                            <span className="flex size-10 items-center justify-center rounded-full bg-indigo-600">
                                                <CheckIcon aria-hidden="true" className="size-6 text-white" />
                                            </span>
                                        </span>
                                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{step.name}</span>
                                            {step.description && (
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    {step.description}
                                                </span>
                                            )}
                                        </span>
                                    </span>
                                </a>
                            ) : step.status === 'current' ? (
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    aria-current="step"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 left-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                    />
                                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                                        <span className="shrink-0">
                                            <span className="flex size-10 items-center justify-center rounded-full border-2 border-indigo-600">
                                                <span className="text-indigo-600 dark:text-indigo-400">{step.id}</span>
                                            </span>
                                        </span>
                                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                {step.name}
                                            </span>
                                            {step.description && (
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    {step.description}
                                                </span>
                                            )}
                                        </span>
                                    </span>
                                </a>
                            ) : (
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="group"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full dark:group-hover:bg-gray-700"
                                    />
                                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                                        <span className="shrink-0">
                                            <span className="flex size-10 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600">
                                                <span className="text-gray-500 dark:text-gray-400">{step.id}</span>
                                            </span>
                                        </span>
                                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {step.name}
                                            </span>
                                            {step.description && (
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    {step.description}
                                                </span>
                                            )}
                                        </span>
                                    </span>
                                </a>
                            )}

                            {stepIdx !== 0 && (
                                <div aria-hidden="true" className="absolute inset-0 top-0 left-0 hidden w-3 lg:block">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 12 82"
                                        preserveAspectRatio="none"
                                        className="h-full w-full text-gray-300 dark:text-gray-600"
                                    >
                                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
