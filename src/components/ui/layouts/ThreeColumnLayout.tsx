interface ThreeColumnLayoutProps {
    leftColumn?: React.ReactNode;
    mainColumn?: React.ReactNode;
    rightColumn?: React.ReactNode;
}

export default function ThreeColumnLayout({
    leftColumn,
    mainColumn,
    rightColumn,
}: ThreeColumnLayoutProps) {
    return (
        <div className="flex min-h-full">
            {/* Left narrow column */}
            <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col">
                <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4">
                    {leftColumn || (
                        <div className="flex flex-1 items-center justify-center">
                            <p className="text-sm text-gray-400 dark:text-gray-500">
                                Left column
                            </p>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main center column */}
            <main className="flex w-full min-w-0 flex-1 flex-col">
                <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 px-6 py-4">
                    {mainColumn || (
                        <div className="rounded-lg border-4 border-dashed border-gray-200 dark:border-gray-700 p-12">
                            <p className="text-center text-gray-500 dark:text-gray-400">
                                Main content area
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Right narrow column */}
            <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col">
                <div className="flex grow flex-col overflow-y-auto border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4">
                    {rightColumn || (
                        <div className="flex flex-1 items-center justify-center">
                            <p className="text-sm text-gray-400 dark:text-gray-500">
                                Right column
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
}
