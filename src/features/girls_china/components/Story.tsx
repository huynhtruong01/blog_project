import { StoryData } from '@/utils/interface'
import dayjs from 'dayjs'
import * as React from 'react'

export interface StoryProps {
    story: StoryData
}

export function Story({ story }: StoryProps) {
    return (
        <div>
            <div>
                <img src={story.avatarCover} alt={story.fullname} />
            </div>
            <div>{dayjs(story.createdAt).format('DD/MM/YYYY')}</div>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
        </div>
    )
}
