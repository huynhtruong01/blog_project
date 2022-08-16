import { Login, Register } from '@/features/auth/pages'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

export interface CommonRoutesProps {}

export function CommonRoutes(props: CommonRoutesProps) {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
