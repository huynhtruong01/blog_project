import { useNavigate } from 'react-router-dom'

export interface AuthHeaderProps {}

export function AuthHeader(props: AuthHeaderProps) {
    const navigate = useNavigate()

    const handleNavLogin = () => {
        navigate('/login')
    }

    const handleNavRegister = () => {
        navigate('/register')
    }

    return (
        <div className="flex gap-2">
            <button
                className="py-2 px-5 text-blue-500 font-medium border-blue-500 border-2 rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 ease-in-out duration-200"
                onClick={handleNavLogin}
            >
                Đăng nhập
            </button>
            <button
                className="py-2 px-5 bg-blue-500 hover:bg-blue-700 font-medium ease-in-out duration-200 text-white rounded-full"
                onClick={handleNavRegister}
            >
                Đăng ký
            </button>
        </div>
    )
}
