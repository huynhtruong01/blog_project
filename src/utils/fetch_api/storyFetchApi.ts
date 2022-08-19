import { storiesApi } from '@/api'

export const fetchAllStory = async ({ queryKey }: any) => {
    try {
        const { data, totalCount }: any = await storiesApi.getAll(queryKey[0])
        return { data, totalCount }
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}
