import { GirlsChina } from '@/features/girls_china'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

export interface GirlsChinaRoutesProps {}

export function GirlsChinaRoutes(props: GirlsChinaRoutesProps) {
    return (
        <Routes>
            <Route path="girls-china/*" element={<GirlsChina />} />
        </Routes>
    )
}
