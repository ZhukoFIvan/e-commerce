import { cn } from '@/lib/utils'
import { FC } from 'react'

interface IContainer {
	children: React.ReactNode
	className?: string
}

const Container: FC<IContainer> = ({ children, className }) => {
	return (
		<div className={cn('mx-auto max-w-[1280px] ', className)}>{children}</div>
	)
}

export { Container }
