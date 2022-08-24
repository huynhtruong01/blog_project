import { AccountRoutes } from '@/routes'

export interface AccountProps {}

export function Account(props: AccountProps) {
    return (
        <div className="max-w-5xl m-auto">
            <AccountRoutes />
        </div>
    )
}
