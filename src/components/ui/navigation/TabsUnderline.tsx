'use client'

import { useState } from 'react'

interface Tab {
    name: string
    href?: string
    current?: boolean
}

interface TabsUnderlineProps {
    /** Tab items */
    tabs?: Tab[]
    /** Default active tab name */
    defaultTab?: string
    /** Tab change callback */
    onChange?: (tabName: string) => void
}

const defaultTabs: Tab[] = [
    { name: 'My Account', current: true },
    { name: 'Company', current: false },
    { name: 'Team Members', current: false },
    { name: 'Billing', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TabsUnderline({
    tabs = defaultTabs,
    defaultTab,
    onChange,
}: TabsUnderlineProps) {
    const initialTab = defaultTab || tabs.find(t => t.current)?.name || tabs[0]?.name || ''
    const [activeTab, setActiveTab] = useState(initialTab)

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName)
        onChange?.(tabName)
    }

    return (
        <div>
            {/* Mobile select */}
            <div className="sm:hidden">
                <label htmlFor="tabs-underline-select" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs-underline-select"
                    value={activeTab}
                    onChange={(e) => handleTabChange(e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-hidden dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>

            {/* Desktop tabs */}
            <div className="hidden sm:block">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => handleTabChange(tab.name)}
                                aria-current={tab.name === activeTab ? 'page' : undefined}
                                className={classNames(
                                    tab.name === activeTab
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300',
                                    'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                                )}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
