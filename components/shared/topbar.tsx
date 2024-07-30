import { FC } from 'react'
import Categories from './categories'
import SortPopup from './sort-popup'
import { Container } from './container'

const TopBar: FC = () => {
	return (
		<Container className='flex items-center justify-between my-10 sticky top-0 shadow-lg shadow-black/5 '>
			<Categories />
			<SortPopup />
		</Container>
	)
}

export default TopBar
