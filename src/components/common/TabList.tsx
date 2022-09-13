import * as React from 'react'

interface Tab {
    icon: any
    name: string
    path: string
}

export interface TabListProps {
    tabList: Tab[]
    activeTab: string
    setActiveTab: any
}

export function TabList({ tabList, activeTab, setActiveTab }: TabListProps) {
    const handleTabClick = (path: string) => {
        setActiveTab(path)
    }

    return (
        <div>
            <div className="border-b border-gray-200 ">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 ">
                    {tabList?.map((tab) => {
                        const Icon = tab.icon

                        return (
                            <li
                                className="mr-1 cursor-pointer hover:bg-blue-100 rounded-t-sm rounded-r-sm overflow-hidden duration-200 ease-in-out"
                                key={tab.path}
                                onClick={() => handleTabClick(tab.path)}
                            >
                                <div
                                    className={`flex items-center gap-2 px-4 py-2 ${
                                        activeTab === tab.path
                                            ? 'text-blue-700 border-b-4 border-blue-700 bg-blue-50'
                                            : 'hover:text-blue-700'
                                    } text-lg duration-200 ease-in-out`}
                                >
                                    <Icon className="text-[20px]" />
                                    {tab.name}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
