import { fetchAllStory } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'
import { useEffect, useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { StoryList } from '../components'

export interface StoryHomeProps {}

export function StoryHome(props: StoryHomeProps) {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(location)

    useEffect(() => {
        window.document.title = 'Tỷ tỷ xứ Trung | H.Blog'
    })

    const filters = useMemo(() => {
        const params: any = queryString.parse(location.search)

        return {
            page: Number.parseInt(params?.page) || 1,
            limit: Number.parseInt(params?.limit) || 10,
        }
    }, [])

    useEffect(() => {
        const params = queryString.stringify(filters)
        setSearchParams(params)
    }, [])

    const { data }: any = useQuery([filters], fetchAllStory, {
        staleTime: 3 * 60 * 1000,
    })

    return <div>{data?.data && <StoryList storyList={data.data} />}</div>
}
