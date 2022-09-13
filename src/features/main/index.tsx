import { GlobalState } from '@/components/global_client_state'
import { CommonRoutes, FeatureRoutes, GirlsChinaRoutes } from '@/routes'
import * as React from 'react'

export interface MainProps {}

export function Main(props: MainProps) {
    window.scrollTo(0, 0)

    return (
        <main className="max-w-6xl pt-[96px] pb-9 bg-white min-h-screen m-auto px-4">
            <FeatureRoutes />
            <CommonRoutes />
            <GlobalState />
        </main>
    )
}
