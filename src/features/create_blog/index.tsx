import { useEffect } from 'react'

export interface CreateBlogProps {}

export function CreateBlog(props: CreateBlogProps) {
    useEffect(() => {
        window.document.title = 'Tạo bài viết | H.Blog'
    }, [])

    return <div></div>
}
