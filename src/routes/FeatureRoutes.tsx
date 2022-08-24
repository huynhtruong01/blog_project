import { Account } from '@/features/account'
import { GirlsChina } from '@/features/girls_china'
import { SaveBlog } from '@/features/save_blog'
import { Route, Routes } from 'react-router-dom'

export interface FeatureRoutesProps {}

export function FeatureRoutes(props: FeatureRoutesProps) {
    return (
        <Routes>
            <Route path="account/*" element={<Account />} />
            <Route path="save-blog/*" element={<SaveBlog />} />
            <Route path="girls-china/*" element={<GirlsChina />} />
        </Routes>
    )
}
