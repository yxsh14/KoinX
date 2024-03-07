import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import TrendingCoin24H from './TrendingCoin24H'

const AsideContainer = () => {
	return (
		<aside className='w-full col-span-full lg:col-span-3'>
			<div className='rounded-2xl bg-[#0052FE] p-6 px-8 text-white flex flex-col justify-center items-center gap-3'>
				<h4 className='font-bold text-2xl text-center'>
					Get Started with KoinX for FREE
				</h4>
				<p className='text-sm text-center font-light'>
					With our range of features that you can equip for free, KoinX allows
					you to be more educated and aware of your tax reports.
				</p>

				<Image
					src='/get-started.png'
					alt='get start with koinx'
					width={178}
					height={166}
					className='py-2'
				/>

				<button className='bg-white text-[#0F1629] flex gap-3 items-center px-4 py-2 rounded-lg'>
					<span className='font-semibold text-sm'>Get Started for FREE</span>
					<FaArrowRight />
				</button>
			</div>

			<TrendingCoin24H />
		</aside>
	)
}

export default AsideContainer
