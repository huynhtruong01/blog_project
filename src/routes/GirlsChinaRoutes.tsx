import { StoryHome } from '@/features/girls_china/pages'
import { Route, Routes } from 'react-router-dom'

export interface GirlsChinaRoutesProps {}

export function GirlsChinaRoutes(props: GirlsChinaRoutesProps) {
    return (
        <Routes>
            <Route path="" element={<StoryHome />} />
        </Routes>
    )
}
