'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdClose, MdMenu } from 'react-icons/md'
import NavMenu from './NavMenu'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<nav className='sticky top-0 p-4 lg:px-8 bg-white z-50 flex justify-between items-center border-b border-[#dedfe2] shadow-nav'>
			<Link href='/'>
				<Image alt='KoinX' src='/logo.png' width={96} height={72} />
			</Link>

			<div
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className='text-2xl lg:hidden'>
				{isMenuOpen ? <MdClose /> : <MdMenu />}
			</div>

			<div className='hidden lg:flex items-center gap-6'>
				<ul className='flex items-center gap-4'>
					<NavItem title='Crypto Taxes' link='/' />
					<NavItem title='Free Tools' link='/' />
					<NavItem title='Resource Center' link='/' />
				</ul>

				<Link
					href='/'
					className='px-3 py-1.5 rounded-lg bg-blue-gradient font-medium text-white text-base'>
					Get Started
				</Link>
			</div>

			<div
				className={`fixed top-16 ${
					isMenuOpen ? 'right-4' : '-right-full'
				} transition-all duration-300`}>
				<NavMenu />
			</div>
		</nav>
	)
}

export default Navbar

interface NavItemProps {
	title: string
	link: string
}

const NavItem: FC<NavItemProps> = ({ title, link }) => {
	return (
		<li>
			<Link href={link} className='font-medium text-[#0F1629] text-base'>
				{title}
			</Link>
		</li>
	)
}
