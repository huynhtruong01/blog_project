import { categoriesApi } from '@/api'

// get all not filter
export const fetchAllCategory = async () => {
    try {
        const { data }: any = await categoriesApi.getAll({ limit: 100 })
        const newData = data?.map((x: any) => ({ value: x._id, name: x.name }))

        return newData
    } catch (error: any) {
        throw new Error(error)
    }
}
