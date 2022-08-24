import { blogsApi } from './../../api/blogsApi'
export const blogOwnList = async (values: any) => {
    try {
        const { data }: any = await blogsApi.getByUser(values)

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}

export const blogById = async ({ queryKey }: any) => {
    try {
        const { data }: any = await blogsApi.getById(queryKey[0])

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getAllSaveBlog = async ({ queryKey }: any) => {
    try {
        const { type, ...newQueryKey }: any = queryKey[0]
        const data = await blogsApi.getAllSave(newQueryKey)

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}
