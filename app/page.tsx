import { Container } from '@/components/shared/container'
import Filters from '@/components/shared/filters'
import ProductList from '@/components/shared/product-list'
import { Title } from '@/components/shared/title'
import TopBar from '@/components/shared/topbar'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<>
			<Container className='mt-5'>
				<Title text='IPhones' size='xl' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='flex gap-[60px]'>
				<div>
					<Filters />
				</div>
				<div>
					<ProductList categoryId={1} title='Iphones' items={[]} />
					<ProductList categoryId={1} title='Iphones' items={[]} />
					<ProductList categoryId={1} title='Iphones' items={[]} />
				</div>
			</Container>
		</>
	)
}

export default Home
