// api
export interface BlogData {
    _id?: string
    user: string
    title: string
    description: string
    thumbnail: string
    content: string
    category: string
}

export interface BlogDataLike {
    blogId: string
    userId: string
}
