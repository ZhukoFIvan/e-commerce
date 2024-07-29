import { ShoppingCart, User } from 'lucide-react'
import { FC } from 'react'

import { Button } from '../ui'
import { Container } from './container'


const Header: FC = () => {
	return (
		<header>
			<Container className='flex justify-between items-center py-8'>
				{/* Левая часть */}
				<div>
					<h1 className='text-2xl uppercase font-bold'>ECommerce</h1>
				</div>

				{/* Правая часть */}
				<div className='flex gap-2 items-center'>
					<Button variant={'outline'} className='flex items-center gap-1 '>
						<User size={20} />
						Войти
					</Button>
					<Button variant={'outline'}>
					
						<ShoppingCart size={20} />
					</Button>
				</div>
			</Container>
			<div className="w-full h-[2px] bg-slate-100"></div>
		</header>
	)
}

export default Header
