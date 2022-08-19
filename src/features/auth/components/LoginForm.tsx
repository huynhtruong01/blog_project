import { InputField, PasswordField } from '@/components/field_controls'
import { LoginValues } from '@/utils/interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

export interface LoginFormProps {
    onSubmit: (values: LoginValues) => Promise<void> | null
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Vui lòng nhập email của bạn')
            .email('Email của bạn không hợp lệ'),
        password: yup
            .string()
            .required('Vui lòng nhập mật khẩu của bạn')
            .min(6, 'Mật khẩu của bạn ít nhất 6 ký tự')
            .max(20, 'Mật khẩu của bạn tối đa 20 ký tự'),
    })

    const form = useForm<LoginValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values: LoginValues) => {
        // console.log(values)
        if (!onSubmit) return
        try {
            await onSubmit(values)
            form.reset()
        } catch (error) {
            console.log(error)
        }
    }

    console.log(form.formState.isSubmitting)

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="mb-6">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="Nhập email..."
                    form={form}
                    disabled={form?.formState?.isSubmitting}
                />
                <PasswordField
                    name="password"
                    label="Mật khẩu"
                    form={form}
                    disabled={form?.formState?.isSubmitting}
                />
            </div>
            <button
                className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white rounded ease-in-out duration-200 disabled:bg-gray-300 disabled:text-gray-100"
                disabled={form.formState.isSubmitting}
            >
                Đăng nhập
            </button>
            <p className="mt-5 text-sm text-center text-gray-600">
                Chưa có tài khoản?
                <Link
                    to="/register"
                    className="inline text-red-500 ml-1 hover:text-red-700 font-semibold ease-in-out duration-200"
                >
                    Đăng ký ngay
                </Link>
            </p>
        </form>
    )
}
