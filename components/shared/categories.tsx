'use client'
import { cn } from '@/lib/utils'
import { FC } from 'react'
interface ICategories {
	className?: string
}

const categories = [
	'Smartphones',
	'Tablets',
	'Laptops',
	'Desktops',
	'Gaming PC',
]

const currentIndex = 0

const Categories: FC<ICategories> = () => {
	return (
		<div className='inline-flex items-center gap-1 bg-gray-50 p-1 rounded-2xl h-[52px] '>
			{categories.map((category, index) => (
				<a
					className={cn(
						'flex items-center h-11  rounded-2xl px-5 font-bold cursor-pointer',
						currentIndex === index && 'bg-white shadow-gray-200 text-primary text-red-500'
					)}
				>
					<button>{category}</button>
				</a>
			))}
		</div>
	)
}

export default Categories
