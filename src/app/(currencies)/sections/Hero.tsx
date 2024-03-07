import TradingViewWidget from '@/app/components/TradingViewWidget'
import Image from 'next/image'
import React from 'react'
import { RiTriangleFill } from 'react-icons/ri'

const Hero = () => {
	return (
		<section className='md:p-6 mb-4'>
			<div className='flex items-center gap-10'>
				<div className='flex items-center gap-2'>
					<Image
						src='/btc.png'
						className='w-9 h-9'
						alt='bitcon logo'
						width={50}
						height={50}
					/>

					<h1 className='font-semibold text-2xl text-[#0B1426]'> Bitcoin </h1>

					<p className='text-[#5D667B] font-semibold'> BTC </p>
				</div>

				<div className='bg-[#808a9d] border border-[#768396] rounded-lg p-3'>
					<p className='font-medium text-base text-white'> Rank #1 </p>
				</div>
			</div>

			<div className='py-10'>
				<div className='flex gap-8 items-center'>
					<h2 className='font-semibold text-[28px] leading-[38px] text-[#0b1426]'>
						$46,953.04
					</h2>

					<div className='flex items-center gap-4'>
						<p className='text-green-500 flex items-center gap-2'>
							<RiTriangleFill />
							<span>2.51%</span>
						</p>

						<p className='text-sm leading-7 font-medium text-[#768396]'>
							(24H)
						</p>
					</div>
				</div>

				<p className='text-base font-medium text-[#0b1426] leading-7'>
					₹39,42,343
				</p>
			</div>

			<TradingViewWidget />
		</section>
	)
}

export default Hero
