import { FC } from 'react'
import Categories from './categories'
import { Container } from './container'
import SortPopup from './sort-popup'

const TopBar: FC = () => {
	return (
		<div className='shadow-xl shadow-black/5 z-10 bg-white py-3 w-full my-10 sticky top-0'>
			<Container className='flex items-center justify-between  	 '>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}

export default TopBar
