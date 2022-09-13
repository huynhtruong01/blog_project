import { BlogList, LoadingSpinner } from '@/components/common'
import { fetchBlogByCategory } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export interface CategoryDetailProps {}

export function CategoryDetail(props: CategoryDetailProps) {
    const { id } = useParams()

    const { data, isLoading } = useQuery([{ id }], fetchBlogByCategory, {
        cacheTime: 0,
    })

    return (
        <div>
            {isLoading && <LoadingSpinner />}
            {data?.data?.length > 0 && <BlogList blogList={data?.data} />}
        </div>
    )
}
