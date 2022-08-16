import { authApi } from '@/api'
import { LoginValues } from '@/utils/interface'
import * as React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoginForm } from '../components'

export interface LoginProps {}

export function Login(props: LoginProps) {
    const handleLogin = async (values: LoginValues) => {
        try {
            await authApi.login(values)

            toast.success('Đăng nhập thành công', {
                autoClose: 2000,
                theme: 'colored',
            })
        } catch (error: any) {
            toast.error(error, {
                autoClose: 2000,
                theme: 'colored',
            })
        }
    }

    return (
        <div>
            <div className="w-[400px] m-auto p-4 border- rounded-md bg-white">
                <h3 className="text-2xl text-center mb-4 font-bold">Đăng nhập</h3>
                <LoginForm onSubmit={handleLogin} />
            </div>
            <ToastContainer />
        </div>
    )
}
