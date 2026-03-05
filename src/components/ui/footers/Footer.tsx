interface NavItem {
    name: string;
    href: string;
}

interface SocialItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

interface FooterProps {
    navigation: NavItem[];
    social: SocialItem[];
    copyright: string;
}

export default function Footer({ navigation, social, copyright }: FooterProps) {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav
                    aria-label="Footer"
                    className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-10">
                    {social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <span className="sr-only">{item.name}</span>
                            <span className="size-6 block">{item.icon}</span>
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                    {copyright}
                </p>
            </div>
        </footer>
    );
}
