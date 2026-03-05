'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import {
    UserCircleIcon,
    BuildingOfficeIcon,
    UsersIcon,
    CreditCardIcon,
} from '@heroicons/react/20/solid'

interface TabWithIcon {
    name: string
    href?: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    current?: boolean
}

interface TabsUnderlineIconsProps {
    /** Tab items with icons */
    tabs?: TabWithIcon[]
    /** Default active tab name */
    defaultTab?: string
    /** Tab change callback */
    onChange?: (tabName: string) => void
}

const defaultTabs: TabWithIcon[] = [
    { name: 'My Account', icon: UserCircleIcon, current: true },
    { name: 'Company', icon: BuildingOfficeIcon, current: false },
    { name: 'Team Members', icon: UsersIcon, current: false },
    { name: 'Billing', icon: CreditCardIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TabsUnderlineIcons({
    tabs = defaultTabs,
    defaultTab,
    onChange,
}: TabsUnderlineIconsProps) {
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
                <label htmlFor="tabs-underline-icons-select" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs-underline-icons-select"
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
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={tab.name}
                                    onClick={() => handleTabChange(tab.name)}
                                    aria-current={tab.name === activeTab ? 'page' : undefined}
                                    className={classNames(
                                        tab.name === activeTab
                                            ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300',
                                        'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                                    )}
                                >
                                    {Icon && (
                                        <Icon
                                            aria-hidden="true"
                                            className={classNames(
                                                tab.name === activeTab
                                                    ? 'text-indigo-500 dark:text-indigo-400'
                                                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400',
                                                '-ml-0.5 mr-2 size-5',
                                            )}
                                        />
                                    )}
                                    <span>{tab.name}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}
