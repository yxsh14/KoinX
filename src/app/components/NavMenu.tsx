import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
	return (
		<div className='p-6 rounded-lg bg-gray-200 shadow-xl shadow-slate-500'>
			<ul className='mb-3 flex flex-col items-center gap-4'>
				<MenuItem title='Crypto Taxes' link='/' />
				<MenuItem title='Free Tools' link='/' />
				<MenuItem title='Resource Center' link='/' />
			</ul>

			<Link
				href='/'
				className='w-full block text-center px-3 py-1.5 rounded-lg bg-blue-gradient font-medium text-white text-base'>
				Get Started
			</Link>
		</div>
	)
}

export default NavMenu

interface MenuItemProps {
	title: string
	link: string
}

const MenuItem: React.FC<MenuItemProps> = ({ link, title }) => {
	return (
		<li>
			<Link href={link} className='font-medium text-[#0F1629] text-base'>
				{title}
			</Link>
		</li>
	)
}
