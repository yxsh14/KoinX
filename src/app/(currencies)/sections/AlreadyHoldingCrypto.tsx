import SectionHeading from '@/app/components/SectionHeading'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const AlreadyHoldingCrypto = () => {
	return (
		<section className='md:p-6'>
			<SectionHeading heading='Already Holding Bitcoin?' />

			<div className='flex flex-col md:flex-row gap-5'>
				<CheckCard
					img='/profit.png'
					title='Calculate your Profits'
					background='bg-green-gradient'
				/>
				<CheckCard
					img='/liablilty.png'
					title='Calculate your Tax Liablility'
					background='bg-orange-gradient'
				/>
			</div>

			<p className='text-base font-medium text-[#3e424a] mt-5 mb-10'>
				Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
				vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
				pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
				fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
				dui
			</p>
		</section>
	)
}

export default AlreadyHoldingCrypto

interface CheckCardProps {
	img: string
	title: string
	background: string
}

const CheckCard: React.FC<CheckCardProps> = ({ img, title, background }) => {
	return (
		<div className={`p-3 flex gap-4 rounded-lg ${background}`}>
			<div className='flex-shrink-0'>
				<Image
					src={img}
					className='h-full'
					alt='profit'
					width={128}
					height={128}
				/>
			</div>

			<div className='flex flex-col justify-center'>
				<h5 className='text-white text-xl font-bold mb-4'>{title}</h5>

				<button className='w-fit bg-white text-[#0F1629] flex gap-3 items-center px-4 py-2 rounded-lg'>
					<span className='font-semibold text-sm whitespace-nowrap'>
						Check Now
					</span>
					<FaArrowRight />
				</button>
			</div>
		</div>
	)
}
