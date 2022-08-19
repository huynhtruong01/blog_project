import { Account } from '@/features/account'
import { ActiveRegisterMail, Login, Register } from '@/features/auth/pages'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

export interface CommonRoutesProps {}

export function CommonRoutes(props: CommonRoutesProps) {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="active/:token" element={<ActiveRegisterMail />} />
            <Route path="account" element={<Account />} />
        </Routes>
    )
}
