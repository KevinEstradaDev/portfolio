import Image from 'next/image';

interface Stat {
    label: string;
    value: string;
}

interface CTAButton {
    label: string;
    href: string;
}

interface LandingPageProps {
    headline: string;
    subheadline: string;
    ctaPrimary: CTAButton;
    ctaSecondary?: CTAButton;
    stats: Stat[];
    screenshotSrc: string;
    screenshotAlt?: string;
}

export default function LandingPage({
    headline,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    stats,
    screenshotSrc,
    screenshotAlt = 'App screenshot',
}: LandingPageProps) {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/20">
                <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    {/* Text column */}
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-7xl">
                                    {headline}
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
                                    {subheadline}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href={ctaPrimary.href}
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {ctaPrimary.label}
                                    </a>
                                    {ctaSecondary && (
                                        <a
                                            href={ctaSecondary.href}
                                            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                                        >
                                            {ctaSecondary.label}{' '}
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot column */}
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 dark:ring-indigo-900/50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    aria-hidden="true"
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 dark:bg-indigo-900 opacity-20 ring-1 ring-white/5 ring-inset md:ml-20 lg:ml-36"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                        NotificationSetting.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">
                                                        App.jsx
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 pt-6 pb-14">
                                                <Image
                                                    src={screenshotSrc}
                                                    alt={screenshotAlt}
                                                    width={2432}
                                                    height={1442}
                                                    className="w-full rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gradient background decoration */}
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
            </div>

            {/* Stats section */}
            <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col gap-y-3 border-l border-gray-200 dark:border-white/10 pl-6"
                        >
                            <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
