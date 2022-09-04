import { truncate, truncateWords } from '@/utils/common'
import dayjs from 'dayjs'
import * as React from 'react'
import { Link } from 'react-router-dom'

export interface BlogOwnItemProps {
    blog: any
}

export function BlogOwnItem({ blog }: BlogOwnItemProps) {
    return (
        <div className="w-full flex gap-4 border-b-2 border-gray-200 py-3 last:border-0">
            <div className="max-w-[100px]">
                <img className="rounded" src={blog?.thumbnail} alt={blog?.title} />
            </div>
            <div>
                <p className="text-sm text-gray-400">{dayjs(blog?.created).format('DD/MM/YYYY')}</p>
                <h3 className="text-2xl font-bold text-gray-700 hover:text-blue-700 hover:underline">
                    <Link to={`/blogs/${blog?._id}`}>{truncateWords(blog?.title, 4)}</Link>
                </h3>
                <p className="text-sm text-gray-700">{truncateWords(blog?.description, 18)}</p>
            </div>
        </div>
    )
}
