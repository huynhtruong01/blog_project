import { blogsApi } from '@/api'
import { ButtonIcon, Modal } from '@/components/common'
import { truncateWords } from '@/utils/common'
import { BlogData } from '@/utils/interface'
import { useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

export interface SaveBlogItemProps {
    blog: BlogData
}

export function SaveBlogItem({ blog }: SaveBlogItemProps) {
    const [open, setOpen] = useState<boolean>(false)
    const queryClient = useQueryClient()
    const users: any = queryClient.getQueryData(['users'])

    const handleShowModal = () => {
        setOpen(true)
        queryClient.setQueryData(['data-modal'], {
            title: 'Xóa bài viết khỏi phần lưu bài viết',
            message: 'Bạn có chắc chắn muốn xóa bài viết viết này?',
            values: {
                blogId: blog._id,
                userId: users?.user?._id,
            },
        })
    }

    const handleDeleteSaveBlog = async (values: any) => {
        try {
            await blogsApi.unsave(values)
            queryClient.invalidateQueries()
        } catch (error: any) {
            throw new Error(error)
        }
    }

    return (
        <div className="w-full flex flex-col rounded border-2 border-gray-100 p-2">
            <Link to={`/blogs/${blog._id}`} className="">
                <div className="h-[185px] overflow-hidden rounded">
                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="rounded hover:scale-110 duration-200 ease-in-out"
                    />
                </div>
            </Link>
            <div className="pt-3 pb-2">
                <div className="px-2">
                    <div>
                        <span className="text-xs text-gray-400 font-medium">
                            {dayjs(blog.createdAt).format('DD/MM/YYYY')}
                        </span>
                    </div>
                    <Link to={`/blogs/${blog._id}`}>
                        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-700 hover:underline">
                            {truncateWords(blog.title, 4)}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-500">{truncateWords(blog.description, 9)}</p>
                </div>
                <div className="flex justify-center items-center gap-3 p-2 mt-2">
                    <ButtonIcon
                        name="Xóa"
                        icon={MdDelete}
                        colorBg="red"
                        callback={handleShowModal}
                    />
                </div>
            </div>
            <Modal open={open} setOpen={setOpen} callback={handleDeleteSaveBlog} icon={MdDelete} />
        </div>
    )
}
