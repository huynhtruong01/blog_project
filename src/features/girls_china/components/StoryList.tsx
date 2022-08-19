import { StoryData } from '@/utils/interface'
import * as React from 'react'
import { Story } from './Story'

export interface StoryListProps {
    storyList: Array<StoryData> | []
}

export function StoryList({ storyList }: StoryListProps) {
    return (
        <div>
            {storyList.map((story) => (
                <Story story={story} />
            ))}
        </div>
    )
}
