import { CategoryData } from '@/utils/interface'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { CategoryHomeItem } from './CategoryHomeItem'

export interface CategoryHomeListProps {
    categoryList: Array<CategoryData>
}

export function CategoryHomeList({ categoryList }: CategoryHomeListProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
    }

    return (
        <div className="flex">
            {categoryList.map((category: CategoryData) => (
                <CategoryHomeItem category={category} key={category._id} />
            ))}
        </div>
    )
}
