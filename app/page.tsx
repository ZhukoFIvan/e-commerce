import Categories from '@/components/shared/categories'
import { Container } from '@/components/shared/container'
import { Title } from '@/components/shared/title'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<Container className='mt-5'>
			<Title text='IPhones' size='xl' className='font-extrabold f' />
			<Categories />

			
		</Container>
	)
}

export default Home
