import { storiesApi } from '@/api'

export const fetchAllStory = async ({ queryKey }: any) => {
    try {
        let values: any
        if (queryKey[0]?.name) {
            values = await storiesApi.search(queryKey[0])
        } else {
            values = await storiesApi.getAll(queryKey[0])
        }

        const { data, totalCount } = values
        return { data, totalCount }
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}
