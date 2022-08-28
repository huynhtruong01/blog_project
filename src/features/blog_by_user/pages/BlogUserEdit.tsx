import { CreateAndEditBlogForm, LoadingSpinner } from '@/components/common'
import { blogById } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import * as React from 'react'
import { useParams } from 'react-router-dom'

export interface BlogUserEditProps {}

export function BlogUserEdit(props: BlogUserEditProps) {
    const { id } = useParams()

    const { data, isLoading } = useQuery([id], blogById, {
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
