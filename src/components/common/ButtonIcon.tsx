import * as React from 'react'

export interface ButtonIconProps {
    name: string
    icon: any
    fullWidth?: boolean
}

export function ButtonIcon({ name, icon, fullWidth = false }: ButtonIconProps) {
    const Icon = icon

    return (
        <button
            className={`flex items-center ${
                fullWidth ? 'w-full' : ''
            } justify-center bg-blue-500 text-white p-1 rounded hover:bg-blue-700 py-2 px-4 duration-200 ease-in-out`}
        >
            <span className="mr-1">
                <Icon className="text-[22px]" />
            </span>
            {name}
        </button>
    )
}
