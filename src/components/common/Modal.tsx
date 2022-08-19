import { useQuery, useQueryClient } from '@tanstack/react-query'
import { calcLength } from 'framer-motion'
import * as React from 'react'
import { MdDelete } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'

export interface ModalProps {
    open: boolean
    setOpen: any
    callback: ((values?: any) => Promise<void>) | any
}

export function Modal({ open, setOpen, callback }: ModalProps) {
    const queryClient = useQueryClient()
    const handleClose = () => {
        setOpen(false)
    }

    const { data }: any = useQuery(['data-delete'], async () => {
        try {
            const values = queryClient.getQueryData(['data-delete'])

            return values
        } catch (error: any) {
            console.log(error)
            throw new Error(error)
        }
    })

    const handleRemoveWebsite = async () => {
        console.log(callback)
        if (!callback || !data?.values) return

        try {
            await callback(data?.values)

            setOpen(false)

            toast.success('Xóa URL website thành công', {
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
                        <div className="relative p-4 h-full md:h-auto">
                            <div className="relative bg-white rounded-lg shadow">
                                <div className="flex justify-center items-start p-4">
                                    <div className="p-2 rounded-full bg-red-100">
                                        <MdDelete className="text-[30px] text-red-600" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-center font-bold text-2xl text-gray-700">
                                        {data?.title}
                                    </h3>
                                    <p className="text-base text-gray-400 text-center w-[85%] m-auto font-normal">
                                        {data?.message}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-4 space-x-2">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-10 py-3 text-center duration-200 ease-in-out">
                                        Hủy
                                    </button>
                                    <button
                                        className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-3xl border border-gray-200 text-sm font-medium px-10 py-3 hover:text-white focus:z-10 duration-200 ease-in-out"
                                        onClick={handleRemoveWebsite}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </>
    )
}
