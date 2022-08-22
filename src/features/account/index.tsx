import { LoadingSpinner } from '@/components/common'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { BlogOwnList, InformationAccount } from './components'

export interface AccountProps {}

export function Account(props: AccountProps) {
    const queryClient = useQueryClient()

    useEffect(() => {
        window.document.title = 'Thông tin cá nhân | H.Blog'
    }, [])

    const { data, isLoading }: any = useQuery(
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
        <>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <LoadingSpinner />
                </div>
            )}
            {data && (
                <div className="flex max-w-5xl gap-6 m-auto px-4">
                    <div className="w-[420px]">
                        <InformationAccount user={userInformationAccount} />
                    </div>
                    <div className="relative flex-1">
                        <BlogOwnList user={data?.user} />
                    </div>
                </div>
            )}
        </>
    )
}
