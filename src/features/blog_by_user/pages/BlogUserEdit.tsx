import { CreateAndEditBlogForm, LoadingSpinner } from '@/components/common'
import { fetchBlogById } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export interface BlogUserEditProps {}

export function BlogUserEdit(props: BlogUserEditProps) {
    const { id } = useParams()

    const { data, isLoading } = useQuery([id], fetchBlogById, {
        cacheTime: 0,
    })

    const handleEdit = async () => {}

    return (
        <div>
            {isLoading && <LoadingSpinner />}
            {data && <CreateAndEditBlogForm onSubmit={handleEdit} initValues={data} />}
        </div>
    )
}
