import { truncateWords } from '@/utils/common'
import { BlogData } from '@/utils/interface'
import dayjs from 'dayjs'
import * as React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export interface BlogProps {
    blog: BlogData
}

export function Blog({ blog }: BlogProps) {
    return (
        <div className="p-2 rounded border border-gray-300">
            <Link to={`/blogs/${blog._id}`}>
                <div className="h-48 overflow-hidden rounded">
                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="rounded hover:scale-110 duration-200 ease-in-out"
                    />
                </div>
            </Link>
            <div className="mt-2 px-2">
                <div className="flex justify-between items-center px-2 mb-2">
                    <span className="text-xs text-gray-400 font-medium">
                        {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                    </span>
                    <div className="flex items-center">
                        <div className="p-1 rounded bg-blue-700 mr-1">
                            <AiFillLike className="text-white text-[12px]" />
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">
                            {blog?.likes || '0'}
                        </span>
                    </div>
                </div>
                <Link to={`/blogs/${blog._id}`}>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-700 duration-200 ease-in-out">
                        {truncateWords(blog.title, 4)}
                    </h3>
                </Link>
                <p className="text-sm text-gray-600">{truncateWords(blog.description, 11)}</p>
            </div>
            <div className="flex justify-center mt-5">
                <Link to={`/blogs/${blog._id}`}>
                    <button className="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-700 ease-in-out duration-200">
                        Xem chi tiết
                    </button>
                </Link>
            </div>
        </div>
    )
}
