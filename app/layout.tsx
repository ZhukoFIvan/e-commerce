import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header'

const inter = Nunito({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'E-commerce',
	
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<main className='min-h-screen'>
					<Header/>
					{children}
				</main>
			</body>
		</html>
	)
}
