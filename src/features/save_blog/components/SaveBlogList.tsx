import { BlogData } from '@/utils/interface'
import * as React from 'react'
import { SaveBlogItem } from './SaveBlogItem'

export interface SaveBlogListProps {
    blogList: Array<BlogData>
}

export function SaveBlogList({ blogList }: SaveBlogListProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            {blogList?.map((blog: BlogData) => (
                <div key={`${blog._id}`} className="w-[calc(100%_/_3_-_8px)]">
                    <SaveBlogItem blog={blog} />
                </div>
            ))}
        </div>
    )
}
