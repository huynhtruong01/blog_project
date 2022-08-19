// =================== TYPOGRAPHY ===================
export const formatCapitalText = (txt: string) => {
    return `${txt[0].toUpperCase()}${txt?.slice(1).toLowerCase()}`
}

export const formatCapitalMultiText = (txt: string) => {
    return txt
        ?.split(' ')
        .filter((x) => !!x && x.length >= 2)
        .map((x) => formatCapitalText(x))
        .join(' ')
}

export const formatUppercaseFirstText = (txt: string) => {
    return `${txt[0].toUpperCase()}${txt.slice(1)}`
}

export const truncate = (txt: string, maximumText: number) => {
    return `${txt.slice(0, maximumText)}\u2026`
}

// ====================== IMAGE ====================
export const checkFileImage = (file: any) => {
    const typeImageList = ['image/png', 'image/jpeg', 'image/jpg']
    let error = ''
    if (file.size >= 6 * 1024 * 1024) {
        error = 'Vui lòng chọn ảnh đại diện không lớn hơn 6MB'
        return error
    }

    if (!typeImageList.includes(file.type)) {
        error = 'Tệp ảnh đại diện không hợp lệ. Vui lòng chọn đúng tệp ảnh'
        return error
    }

    return error
}

export const uploadImage = async (file: any) => {
    try {
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'rhgrkrru')
        formData.append('cloud_name', 'huynhtruong01')

        const res = await fetch('https://api.cloudinary.com/v1_1/huynhtruong01/image/upload', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()

        return {
            public_id: data.public_id,
            url: data.url,
        }
    } catch (error) {
        console.log(error)
    }
}
