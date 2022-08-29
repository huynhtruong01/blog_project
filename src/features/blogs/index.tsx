import { BlogsRoutes } from '@/routes/BlogsRoutes'
import * as React from 'react'

export interface BlogsProps {}

export function Blogs(props: BlogsProps) {
    return (
        <div>
            <BlogsRoutes />
        </div>
    )
}
