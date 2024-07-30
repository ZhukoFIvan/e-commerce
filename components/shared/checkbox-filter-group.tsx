'use client'
import { FC, useState } from 'react'
import { Input } from '../ui/input'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface ICheckboxFilterGroup {
	title: string
	className?: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string) => void
	defaultValue?: string[]
}

const CheckboxFilterGroup: FC<ICheckboxFilterGroup> = ({
	title,
	className,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Search...',
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: defaultItems

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	return (
		<div>
			<p className='font-bold mb-5'>{title}</p>
			<div>
				{showAll && (
					<Input
						placeholder={searchInputPlaceholder}
						onChange={handleSearch}
						className='mb-5'
					/>
				)}
			</div>
			<div className='flex flex-col gap-2 max-h-[190px] overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						checked={item.checked}
						endAdornment={item.endAdornment}
						name='checkbox'
						onCheckedChange={(ids) => console.log(ids)}
					/>
				))}
			</div>

			{list.length > limit && (
				<div className='mt-2 text-center '>
					<button onClick={() => setShowAll(!showAll)} className='text-red-600'>
						{showAll ? 'Show less' : 'Show more'}
					</button>
				</div>
			)}
		</div>
	)
}

export default CheckboxFilterGroup
