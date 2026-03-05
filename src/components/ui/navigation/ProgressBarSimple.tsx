'use client'

import { CheckIcon } from '@heroicons/react/24/solid'

type StepStatus = 'complete' | 'current' | 'upcoming'

interface Step {
    id: string
    name: string
    href?: string
    status: StepStatus
}

interface ProgressBarSimpleProps {
    /** Steps to display */
    steps?: Step[]
    /** Step click callback */
    onStepClick?: (stepId: string) => void
}

const defaultSteps: Step[] = [
    { id: '01', name: 'Job details', href: '#', status: 'complete' },
    { id: '02', name: 'Application form', href: '#', status: 'complete' },
    { id: '03', name: 'Preview', href: '#', status: 'current' },
    { id: '04', name: 'Confirmation', href: '#', status: 'upcoming' },
]

export default function ProgressBarSimple({
    steps = defaultSteps,
    onStepClick,
}: ProgressBarSimpleProps) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li
                        key={step.name}
                        className={stepIdx !== steps.length - 1 ? 'relative pr-8 sm:pr-20' : 'relative'}
                    >
                        {step.status === 'complete' ? (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                        <div className="h-0.5 w-full bg-indigo-600" />
                                    </div>
                                )}
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="relative flex size-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                                >
                                    <CheckIcon aria-hidden="true" className="size-5 text-white" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                        <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                                    </div>
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
                                    className="relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-900"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="size-2.5 rounded-full bg-indigo-600"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : (
                            <>
                                {stepIdx !== steps.length - 1 && (
                                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                        <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                                    </div>
                                )}
                                <a
                                    href={step.href}
                                    onClick={(e) => {
                                        if (onStepClick) {
                                            e.preventDefault()
                                            onStepClick(step.id)
                                        }
                                    }}
                                    className="group relative flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:hover:border-gray-500"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
