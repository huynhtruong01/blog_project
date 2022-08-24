import { GlobalState } from '@/components/global_client_state'
import { CommonRoutes, FeatureRoutes, GirlsChinaRoutes } from '@/routes'
import * as React from 'react'

export interface MainProps {}

export function Main(props: MainProps) {
    return (
        <div className="pt-[87px] py-6 px-4 bg-gray-50 min-h-screen">
            <FeatureRoutes />
            <CommonRoutes />
            <GlobalState />
        </div>
    )
}
