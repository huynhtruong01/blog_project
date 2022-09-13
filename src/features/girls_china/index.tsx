import { GirlsChinaRoutes } from '@/routes'
import * as React from 'react'
import { StoryHome } from './pages'

export interface GirlsChinaProps {}

export function GirlsChina(props: GirlsChinaProps) {
    return (
        <section className="w-full">
            <GirlsChinaRoutes />
        </section>
    )
}
