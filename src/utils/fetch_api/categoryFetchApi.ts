import { categoriesApi } from '@/api'
import { CategoryData } from './../interface/category_interface'

// get all not filter
export const fetchAllCategoryNotFilter = async () => {
    try {
        const { data }: any = await categoriesApi.getAll({ limit: 100 })
        const newData = data?.map((x: any) => ({ value: x._id, name: x.name }))

        return newData
    } catch (error: any) {
        throw new Error(error)
    }
}

// get all
export const fetchAllCategory = async ({ queryKey }: any) => {
    try {
        const { type, ...newQueryKey } = queryKey[0]

        const { data, totalCount }: any = await categoriesApi.getAll(newQueryKey)

        return { data, totalCount }
    } catch (error: any) {
        throw new Error(error)
    }
}
