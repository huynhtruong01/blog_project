import { blogsApi } from '@/api'
import { LoadingSpinner } from '@/components/common'
import { fetchBlogById } from '@/utils/fetch_api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

export interface BlogsDetailProps {}

export function BlogsDetail(props: BlogsDetailProps) {
    const { id }: any = useParams()
    const queryClient = useQueryClient()
    const users: any = queryClient.getQueryData(['users'])
    const { data, isLoading, refetch }: any = useQuery([id], fetchBlogById)

    const [isLike, setIsLike] = useState<boolean>(() => data?.likes?.includes(users?.user?._id))
    const [like, setLike] = useState<number>(() => data?.likes?.length)

    useEffect(() => {
        if (data) {
            setLike(data?.likes?.length)
            setIsLike(data?.likes?.includes(users?.user?._id))
        } else {
            setLike(0)
            setIsLike(false)
        }
    }, [data])

    const content = DOMPurify.sanitize(data?.content || '')

    const handleLikeClick = async () => {
        try {
            if (!isLike) {
                setLike((prev: number) => prev + 1)
                setIsLike(true)
                await blogsApi.like({ blogId: data?._id, userId: users?.user?._id })
            } else {
                setLike((prev: number) => prev - 1)
                setIsLike(false)
                await blogsApi.unlike({ blogId: data?._id, userId: users?.user?._id })
            }

            queryClient.invalidateQueries()

            refetch()
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-5xl m-auto">
            {isLoading && <LoadingSpinner />}
            {data && (
                <div className="bg-white rounded border border-gray-200">
                    <div>
                        <div className="h-[370px] rounded overflow-hidden mb-4">
                            <img src={data?.thumbnail} alt={data?.title} />
                        </div>
                    </div>
                    <div className="mt-12 px-4 py-2">
                        <div className='relative py-4 pb-2 before:content-[""] before:w-[100%] before:h-[1px] before:bg-gray-300 before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%]'>
                            <h2 className="text-center font-bold text-gray-900 text-4xl w-[820px] m-auto">
                                {data?.title}
                            </h2>
                            <div className="flex justify-end items-end px-6 mt-4">
                                <div className="flex items-center mr-4">
                                    <span className="text-gray-900 font-semibold text-sm mr-1">
                                        {like || '0'}
                                    </span>
                                    <div
                                        className="p-1 rounded bg-blue-700 cursor-pointer"
                                        onClick={handleLikeClick}
                                    >
                                        <AiFillLike className="text-white text-[12px]" />
                                    </div>
                                </div>
                                <span className="text-right text-sm text-gray-400 font-medium">
                                    {dayjs(data?.createdAt).format('DD/MM/YYYY')}
                                </span>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: content }} className="mt-8" />
                    </div>
                </div>
            )}
        </div>
    )
}
