import { Container } from '@/components/shared/container'
import Filters from '@/components/shared/filters'
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
					content
				</div>
			</Container>
		</>
	)
}

export default Home
