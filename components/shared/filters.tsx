import { cn } from '@/lib/utils'
import { FC } from 'react'
import { Input } from '../ui/input'
import CheckboxFilterGroup from './checkbox-filter-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { Title } from './title'

interface IFilters {
	className?: string
}

const Filters: FC<IFilters> = ({ className }) => {
	return (
		<div className={cn('w-[300px]', className)}>
			<Title text='Filters' size='lg' className='mb-4' />
			{/* Чекбоксы */}
			<div className='flex flex-col gap-2'>
				<FilterCheckbox text='Смартфоны' value='1' />
				<FilterCheckbox text='ПК' value='2' />
			</div>

			{/* Ввод цены(inputs)" */}
			<div className='mt-2 border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-5'>Ввод цены от и до:</p>
				<div className='flex gap-2 items-center'>
					<Input
						type='number'
						min={0}
						max={120000}
						placeholder='0'
						defaultValue={0}
					/>
					<Input type='number' min={300} max={120000} placeholder='120000' />
				</div>
				<RangeSlider max={120000} min={0} step={10} className='mt-5' />
			</div>
			<CheckboxFilterGroup
				title='Settings'
				defaultItems={[
					{
						text: 'Только в наличии',
						value: '1',
					},
					{
						text: 'Только под заказ',
						value: '2',
					},
					{
						text: '128 ГБ',
						value: '3',
					},
					{
						text: '256 ГБ',
						value: '4',
					},
					{
						text: '512 ГБ',
						value: '5',
					},
					{
						text: '1 ТБ',
						value: '6',
					},
				]}
				items={[
					{
						text: 'Только в наличии',
						value: '1',
					},
					{
						text: 'Только под заказ',
						value: '2',
					},
					{
						text: '128 ГБ',
						value: '3',
					},
					{
						text: '256 ГБ',
						value: '4',
					},
					{
						text: '512 ГБ',
						value: '5',
					},
					{
						text: '1 ТБ',
						value: '6',
					},
					{
						text: 'Только в наличии',
						value: '1',
					},
					{
						text: 'Только под заказ',
						value: '2',
					},
					{
						text: '128 ГБ',
						value: '3',
					},
					{
						text: '256 ГБ',
						value: '4',
					},
					{
						text: '512 ГБ',
						value: '5',
					},
					{
						text: '1 ТБ',
						value: '6',
					},
				]}
			/>
		</div>
	)
}

export default Filters
