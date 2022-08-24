import { LoadingSpinner } from '@/components/common'
import { getAllSaveBlog } from '@/utils/fetch_api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import queryString from 'query-string'
import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SaveBlogList } from './components'

export interface SaveBlogProps {}

export function SaveBlog(props: SaveBlogProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const users: any = queryClient.getQueryData(['users'])

    console.log(users)

    useEffect(() => {
        const params = queryString.stringify({ limit: 10, page: 1 })
        navigate({
            pathname: location.pathname,
            search: `?${params}`,
        })
    }, [])

    const filters = useMemo(() => {
        const params: any = queryString.parse(location.search)

        return {
            ...params,
            limit: Number.parseInt(params?.limit) || 10,
            page: Number.parseInt(params?.page) || 1,
        }
    }, [location.search])

    const { data, isLoading, refetch } = useQuery(
        [{ id: users?.user?._id, type: 'save-blog', ...filters }],
        getAllSaveBlog
    )

    useEffect(() => {
        refetch()
    }, [filters])

    return (
        <div className="max-w-5xl m-auto">
            <div className="w-full p-6 bg-white rounded">
                {isLoading && (
                    <div className="flex justify-center">
                        <LoadingSpinner />
                    </div>
                )}
                {data?.data?.length > 0 && <SaveBlogList blogList={data?.data} />}
            </div>
        </div>
    )
}
