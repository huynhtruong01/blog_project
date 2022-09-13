import { fetchAllBlog } from '@/utils/fetch_api'
import { useQuery } from '@tanstack/react-query'
import { BlogHomeList } from './components'

export interface HomeBlogProps {}

export function HomeBlog(props: HomeBlogProps) {
    const { data } = useQuery([{ limit: 4, page: 1 }], fetchAllBlog)

    console.log(data)
    return <div>{data?.data?.length > 0 && <BlogHomeList blogList={data?.data} />}</div>
}
