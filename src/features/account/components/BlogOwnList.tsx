import { blogOwnList } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { BlogOwnItem } from './BlogOwnItem'

export interface BlogOwnListProps {
    user: any
}

export function BlogOwnList({ user }: BlogOwnListProps) {
    const { data } = useQuery(
        ['blog-list-own'],
        async () => await blogOwnList({ limit: 100, id: user?._id })
    )

    // console.log(data)

    return (
        <div className="sticky top-[87px] w-full bg-white rounded">
            <div className="py-3 px-6 bg-blue-500 rounded">
                <h3 className="text-lg font-bold text-white">Danh sách các bài viết của bạn</h3>
            </div>
            <div className="p-6">
                {data?.length === 0 && (
                    <p className="text-center text-gray-500">Bạn không có bài viết nào 😥😥😥</p>
                )}

                {data && data?.length > 0 && (
                    <div className="h-screen">
                        {data?.map((blog: any) => (
                            <BlogOwnItem blog={blog} key={blog._id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
