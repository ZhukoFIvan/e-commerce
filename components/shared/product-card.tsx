import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { Button } from '../ui'

interface IProductCard {
	id: number
	title: string
	price: number
	className?: string
}

const ProductCard: FC<IProductCard> = ({ id, price, className, title }) => {
	return (
		<div
			className={cn(
				'w-[250px] h-[350px] rounded-2xl bg-gray-50 flex flex-col p-5',
				className
			)}
		>
			<img
				className=' w-[200px] h-[200px] object-cover rounded-t-2xl mx-auto mb-3'
				alt={title}
				src={
					'https://ssp-service.ru/wp-content/uploads/2023/01/remont-iphone-12.jpg'
				}
			/>
			<p className='font-bold text-xl'>{title}</p>
			<div className='flex items-center justify-between mt-auto'>
				<div>
					от <span className='font-bold'>{price}</span> 
					руб.
				</div>
				<Button variant='outline'>
					<Plus size={12} />
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
