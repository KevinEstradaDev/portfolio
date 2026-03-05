import Image from "next/image";

interface Feature {
    name: string;
    description: string;
    icon: React.ReactNode;
}

interface ContentSectionProps {
    eyebrow: string;
    title: string;
    description: string;
    features: Feature[];
    imageSrc: string;
    imageAlt: string;
}

export default function ContentSection({
    eyebrow,
    title,
    description,
    features,
    imageSrc,
    imageAlt,
}: ContentSectionProps) {
    return (
        <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Text column */}
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                                {eyebrow}
                            </p>
                            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                                {title}
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                                            <span className="absolute top-1 left-0 size-5 text-indigo-600 dark:text-indigo-400">
                                                {feature.icon}
                                            </span>
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Sticky image column */}
                    <div className="flex items-start justify-end lg:order-first">
                        <div className="sticky top-8">
                            <Image
                                alt={imageAlt}
                                src={imageSrc}
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
