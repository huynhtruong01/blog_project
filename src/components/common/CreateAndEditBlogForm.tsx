import { Modal } from '@/components/common'
import { EditField } from '@/components/field_controls'
import { BlogTextField } from '@/features/create_blog/components/BlogTextField'
import { ThumbnailField } from '@/features/create_blog/components/ThumbnailField'
import { BlogData } from '@/utils/interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

export interface CreateAndEditBlogFormProps {
    onSubmit: ((values?: any) => Promise<void>) | null
    initValues: any
}

export function CreateAndEditBlogForm({ onSubmit, initValues }: CreateAndEditBlogFormProps) {
    const [open, setOpen] = useState<boolean>(false)
    const queryClient = useQueryClient()
    const { id }: any = useParams()

    const schema = yup.object().shape({
        title: yup
            .string()
            .required('Vui lòng nhập tiều đề cho bài viết.')
            .min(20, 'Ký tự được nhập ít nhất 20 ký tự.')
            .max(100, 'Ký tự được nhập không quá 100 ký tự.'),
        description: yup.string().max(200, 'Ký tự được nhập không quá 200 ký tự.'),
        category: yup.string().required('Vui lòng chọn thể loại cho bài viết.'),
        thumbnail: yup
            .mixed()
            .required('Vui lòng chọn ảnh bìa cho bài viết.')
            .test('valid-size-image', 'Ảnh bìa không quá 3MB', (value: any): any => {
                console.log(value)
                return value?.size <= 3 * 1024 * 1024
            })
            .test(
                'valid-type-image',
                'Vui lòng chọn đúng loại ảnh (.png, .jpeg, .jpg)',
                (value: any): any => {
                    const typeImageList = ['image/png', 'image/jpeg', 'image/jpg']
                    return typeImageList.includes(value?.type)
                }
            ),
        content: yup.string().required('Vui lòng nhập nội dung bài viết'),
    })

    const form = useForm({
        defaultValues: {
            title: initValues.title,
            description: initValues.description,
            category: initValues.category?._id || '',
            thumbnail: initValues.thumbnail,
            content: initValues.content,
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values: any) => {
        if (!onSubmit) return

        try {
            await onSubmit(values)
        } catch (error: any) {
            console.log(error)
            toast.error(error, {
                autoClose: 2000,
                theme: 'colored',
            })
        }
    }

    // name, label, placeholder blog text field
    const nameTexts = { title: 'title', description: 'description', category: 'category' }
    const labelTexts = { title: 'Tiêu đề', description: 'Mô tả', category: 'Thể loại' }
    const placeholderTexts = {
        title: `Nhập tiêu đề\u2026`,
        description: `Nhập mô tả\u2026`,
        category: `-- Chọn thể loại --`,
    }

    const handleShowModal = () => {
        queryClient.setQueryData(['data-modal'], {
            title: 'Hủy bỏ bài viết?',
            message: 'Ảnh và tất cả dữ liệu của bài viết sẽ bị hủy',
            btnMain: 'Hủy bài viết',
            btnCancel: 'Tiếp tục chỉnh sửa',
        })
        queryClient.invalidateQueries(['data-modal'])
        setOpen(true)
    }

    const handleCancelBlog = () => {
        // console.log(form.reset)
        if (id) {
            const keyList = ['title', 'thumbnail', 'category', 'description', 'content']
            Object.keys(initValues)
                .filter((x: any) => keyList.includes(x))
                .forEach((x: any) => form.setValue(x, initValues[x]))
        } else {
            form.reset()
        }
    }

    return (
        <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="mb-6">
                <div>
                    <ThumbnailField name="thumbnail" form={form} initValue={initValues.thumbnail} />
                </div>
                <div className="mt-10">
                    <BlogTextField
                        name={nameTexts}
                        label={labelTexts}
                        placeholder={placeholderTexts}
                        form={form}
                        disabled={form?.formState?.isSubmitting}
                    />
                </div>
                <div className="mt-8">
                    <EditField
                        name="content"
                        label="Nội dung bài viết"
                        form={form}
                        placeholder={`Nhập nội dung bài viết\u2026`}
                        disabled={form?.formState?.isSubmitting}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button
                    type="button"
                    onClick={handleShowModal}
                    disabled={form?.formState?.isSubmitting}
                    className={`flex items-center justify-center font-medium border-2 border-gray-300 text-gray-800 py-2 mr-4 text-lg rounded hover:bg-gray-200 px-8 ${
                        form?.formState?.isSubmitting
                            ? 'disabled:bg-gray-200 disabled:text-white hover:bg-gray-200 cursor-no-drop'
                            : ''
                    } duration-200 ease-in-out`}
                >
                    <span>Hủy</span>
                </button>
                <button
                    type="submit"
                    disabled={form?.formState?.isSubmitting}
                    className={`flex items-center justify-center font-medium bg-blue-500 border-2 border-blue-500 text-white py-2 text-lg rounded hover:bg-blue-700 px-8 ${
                        form?.formState?.isSubmitting
                            ? 'disabled:bg-gray-300 disabled:text-white cursor-no-drop'
                            : ''
                    } duration-200 ease-in-out`}
                >
                    <span>{id ? 'Cập nhập bài viết' : 'Tạo bài viết'}</span>
                </button>
            </div>
            <Modal open={open} setOpen={setOpen} callback={handleCancelBlog} />
        </form>
    )
}
