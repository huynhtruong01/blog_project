import { useQuery, useQueryClient } from '@tanstack/react-query'
import { InformationAccount } from './components'

export interface AccountProps {}

export function Account(props: AccountProps) {
    const queryClient = useQueryClient()
    const { data }: any = useQuery(
        ['users'],
        async () => {
            try {
                const users = queryClient.getQueryData(['users'])
                return users
            } catch (error: any) {
                console.log(error)
                throw new Error(error)
            }
        },
        {
            staleTime: Infinity,
        }
    )

    const userInformationAccount = {
        _id: data?.user?._id,
        fullname: data?.user?.fullname,
        username: data?.user?.username,
        detail: data?.user?.detail,
        website: data?.user?.website,
        avatar: data?.user?.avatar,
        email: data?.user?.email,
    }

    return (
        <div className="flex">
            <div className="basis-5/12">
                <InformationAccount user={userInformationAccount} />
            </div>
            <div className="basic-7/12"></div>
        </div>
    )
}
