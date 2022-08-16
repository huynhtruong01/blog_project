import { authApi } from '@/api'
import { RegisterValues } from '@/utils/interface'
import * as React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RegisterForm } from '../components'

export interface RegisterProps {}

export function Register(props: RegisterProps) {
    const handleRegister = async (values: RegisterValues) => {
        try {
            await authApi.register(values)

            toast.success('Vui lòng kiểm tra email của bạn để đăng nhập vào trang', {
                autoClose: 2000,
                theme: 'colored',
            })
        } catch (error: any) {
            console.log(error)
            toast.error(error, {
                autoClose: 2000,
                theme: 'colored',
            })
        }
    }

    return (
        <div>
            <div className="w-[400px] m-auto p-4 border- rounded-md bg-white">
                <h3 className="text-2xl text-center mb-4 font-bold">Đăng ký</h3>
                <RegisterForm onSubmit={handleRegister} />
            </div>
            <ToastContainer />
        </div>
    )
}
