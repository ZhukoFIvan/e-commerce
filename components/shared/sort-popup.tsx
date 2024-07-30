import { cn } from '@/lib/utils'
import { ArrowDownUp } from 'lucide-react'
import { FC } from 'react'

interface ISortPopup {
	className?: string
}

const SortPopup: FC<ISortPopup> = ({ className }) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 h-[52px] bg-gray-50 px-3 rounded-2xl cursor-pointer',
				className
			)}
		>
			<ArrowDownUp size={16} />
			<b>Sort By</b>
			<b className='text-red-500'>popular</b>
		</div>
	)
}

export default SortPopup
