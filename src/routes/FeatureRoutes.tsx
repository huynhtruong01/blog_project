import { Account, Blogs, GirlsChina, SaveBlog } from '@/features'
import { Route, Routes } from 'react-router-dom'

export interface FeatureRoutesProps {}

export function FeatureRoutes(props: FeatureRoutesProps) {
    return (
        <Routes>
            <Route path="account/*" element={<Account />} />
            <Route path="save-blog/*" element={<SaveBlog />} />
            <Route path="girls-china/*" element={<GirlsChina />} />
            <Route path="blogs/*" element={<Blogs />} />
        </Routes>
    )
}
