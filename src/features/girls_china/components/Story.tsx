import { truncateWords } from '@/utils/common'
import { StoryData } from '@/utils/interface'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export interface StoryProps {
    story: StoryData
}

export function Story({ story }: StoryProps) {
    return (
        <div className="p-2 rounded border border-gray-200">
            <Link to={`/girls-china/${story._id}`} className="inline">
                <div className="h-56 overflow-hidden rounded">
                    <img
                        src={story.avatarCover}
                        alt={story.fullname}
                        className="rounded hover:scale-110 duration-200 ease-in-out"
                    />
                </div>
            </Link>
            <div className="mt-2 p-2 pt-1">
                <div className="text-xs text-gray-400 mb-1">
                    {dayjs(story.createdAt).format('DD/MM/YYYY')}
                </div>
                <Link to={`/girls-china/${story._id}`}>
                    <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-500 ease-in-out duration-200">
                        {truncateWords(story.title, 4)}
                    </h2>
                </Link>
                <p className="text-sm text-gray-600">{truncateWords(story.description, 9)}</p>
            </div>
            <div className="mt-3 flex justify-center">
                <Link to={`/girls-china/${story._id}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 duration-200 ease-in-out">
                        Xem chi tiết
                    </button>
                </Link>
            </div>
        </div>
    )
}
