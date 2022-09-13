import { BlogData } from '@/utils/interface'
import dayjs from 'dayjs'
import * as React from 'react'
import { Link } from 'react-router-dom'

export interface BlogHomeItemProps {
    blog: BlogData
}

export function BlogHomeItem({ blog }: BlogHomeItemProps) {
    return (
        <div className="flex gap-4 py-4 border-b border-b-gray-300 first:pt-0 last:border-0">
            <div className="w-[350px] h-28">
                <img src={blog.thumbnail} alt={blog.title} className="rounded" />
            </div>
            <div>
                <div className="mb-1">
                    <span className="text-xs text-gray-400 font-medium">
                        {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                    </span>
                </div>
                <h4 className="text-[17px] font-semibold leading-5 pr-4 hover:text-blue-700 hover:underline">
                    <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                </h4>
            </div>
        </div>
    )
}
