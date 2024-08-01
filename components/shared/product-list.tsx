import { FC } from 'react'
import ProductCard from './product-card'
import { Title } from './title'

interface IProductList {
	title: string
	items:any[]
	categoryId: number
	className?: string
}

const ProductList: FC<IProductList> = () => {
	return (
		<>
		<Title text='Iphones' size='2xl' className='mb-10'/>
		<div className='grid grid-cols-3 gap-[50px]'>
			<ProductCard id={1} price={100000} title='Iphone 15' />
			<ProductCard id={1} price={100000} title='Iphone 15' />
			<ProductCard id={1} price={100000} title='Iphone 15' />
			<ProductCard id={1} price={100000} title='Iphone 15' />
			<ProductCard id={1} price={100000} title='Iphone 15' />
			<ProductCard id={1} price={100000} title='Iphone 15' />
			
		</div>
		</>
	)
}

export default ProductList
