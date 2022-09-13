// import { truncateWords } from '@/utils/common'
// import { BlogData } from '@/utils/interface'
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
        <div className="rounded border border-gray-300 pb-2">
            <Link to={`/blogs/${blog._id}`}>
                <div className="h-48 overflow-hidden rounded-t">
                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="rounded-t hover:scale-110 duration-200 ease-in-out"
                    />
                </div>
            </Link>
            <div className="p-2">
                <div className="mt-2 px-2">
                    <Link to={`/blogs/${blog._id}`}>
                        <h3 className="text-xl font-bold text-blue-500 hover:text-blue-700 hover:underline">
                            {truncateWords(blog.title, 4)}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-600">{truncateWords(blog.description, 11)}</p>
                </div>
                <div className="flex justify-between mt-6 px-2 items-center">
                    <div className="font-sm">
                        {blog?.user?.username && (
                            <Link to={`/profile/${blog?.user?._id}`}>
                                By:{' '}
                                <span className="text-blue-400 hover:text-blue-600 ease-in-out duration-200">
                                    {blog?.user?.username}
                                </span>
                            </Link>
                        )}
                    </div>
                    <span className="text-sm text-gray-400">
                        {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}
