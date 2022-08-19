import { blogsApi } from './../../api/blogsApi'
export const blogOwnList = async (values: any) => {
    try {
        const { data }: any = await blogsApi.getByUser(values)

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}
