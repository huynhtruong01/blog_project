import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface ModalProps {
    open: boolean
    setOpen: any
    callback: ((values?: any) => Promise<void>) | any
    icon?: any
}

export function Modal({ open, setOpen, callback, icon = null }: ModalProps) {
    const Icon = icon
    const queryClient = useQueryClient()
    const handleClose = () => {
        setOpen(false)
    }
    const values: any = queryClient.getQueryData(['data-modal'])

    const { data }: any = useQuery(['data-modal'], async () => {
        try {
            const data = queryClient.getQueryData(['data-modal'])

            return data
        } catch (error: any) {
            console.log(error)
            throw new Error(error)
        }
    })

    const handleClick = async () => {
        // console.log(callback)
        if (!callback) return

        try {
            if (data?.values) {
                await callback(data?.values)
            } else {
                await callback()
            }
            setOpen(false)

            toast.success(values?.toastSuccessMess || 'Xóa thành công', {
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
        <>
            {open && (
                <div>
                    <div
                        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-black bg-opacity-25"
                        onClick={handleClose}
                    >
                        <div className="relative h-full md:h-auto">
                            <div className="relative bg-white rounded-lg shadow px-8 py-6 pb-4">
                                {icon && (
                                    <div className="flex justify-center items-start p-2">
                                        <div className="p-2 rounded-full bg-red-100">
                                            <Icon className="text-[30px] text-red-600" />
                                        </div>
                                    </div>
                                )}
                                <div className="p-4 pt-2">
                                    <h3 className="text-center font-bold text-2xl text-gray-700">
                                        {data?.title}
                                    </h3>
                                    <p className="text-base text-gray-400 text-center w-[85%] m-auto font-normal">
                                        {data?.message}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-2 space-x-2">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-3xl text-sm px-10 py-3 text-center duration-200 ease-in-out">
                                        {data?.btnCancel || 'Hủy'}
                                    </button>
                                    <button
                                        className="text-white bg-red-500 hover:bg-red-700 rounded-3xl border border-gray-200 text-sm font-medium px-10 py-3 hover:text-white focus:z-10 duration-200 ease-in-out"
                                        onClick={handleClick}
                                    >
                                        {data?.btnMain || 'Xóa'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    )
}
