import { GlobalState } from '@/components/global_client_state'
import { CommonRoutes, FeatureRoutes, GirlsChinaRoutes } from '@/routes'
import { useEffect } from 'react'

export interface MainProps {}

export function Main(props: MainProps) {
    return (
        <main className="max-w-6xl pt-[96px] pb-9 bg-white min-h-screen m-auto px-4">
            <FeatureRoutes />
            <CommonRoutes />
            <GlobalState />
        </main>
    )
}
