import { truncateWords } from '@/utils/common'
import { BlogData } from '@/utils/interface'
import dayjs from 'dayjs'
import * as React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export interface ProfileBlogItemProps {
    blog: BlogData
}

export function ProfileBlogItem({ blog }: ProfileBlogItemProps) {
    return (
        <div className="py-5 border-b border-gray-200 last:border-0">
            <div className="h-[300px]">
                <img src={blog.thumbnail} alt={blog.title} className="rounded" />
            </div>
            <div className="mt-4 px-4">
                <div>
                    <h3 className="text-3xl font-semibold text-gray-900 mb-1.5 hover:text-blue-700 ease-in-out duration-200">
                        <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm">{blog.description}</p>
                </div>
                <div className="flex justify-end items-end mt-4">
                    <div className="flex items-center mr-4 font-medium text-white px-1.5 py-0.5 rounded bg-blue-700">
                        <span className="mr-1">{blog?.likes || '0'}</span>
                        <AiFillLike className="text-white" />
                    </div>
                    <span className="text-gray-400 text-sm">
                        {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}
