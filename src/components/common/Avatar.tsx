import * as React from 'react'

export interface AvatarProps {
    imgUrl: string
    nameAvatar: string
    sizeAvatar: string
}

export function Avatar({ imgUrl, nameAvatar, sizeAvatar }: AvatarProps) {
    const renderSizeAvatar = () => {
        switch (sizeAvatar) {
            case 'small': {
                return 'w-[24px] h-[24px]'
            }
            case 'medium': {
                return 'w-[40px] h-[40px]'
            }
            case 'large': {
                return 'w-[56px] h-[56px]'
            }
            case 'xl': {
                return 'w-[72px] h-[72px]'
            }
            case '2xl': {
                return 'w-[88px] h-[88px]'
            }
        }
    }

    return (
        <div className={`rounded-full overflow-hidden ${renderSizeAvatar()}`}>
            <img src={imgUrl} alt={nameAvatar} />
        </div>
    )
}
