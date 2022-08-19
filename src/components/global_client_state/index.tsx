import { useQueryClient } from '@tanstack/react-query'
import * as React from 'react'

export interface GlobalStateProps {}

export function GlobalState(props: GlobalStateProps) {
    const queryClient = useQueryClient()

    // users
    const users = JSON.parse(localStorage.getItem('users') || 'null')
    queryClient.setQueryData(['users'], users)

    // data delete
    queryClient.setQueryData(['data-delete'], null)

    return <></>
}
