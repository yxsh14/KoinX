import SectionHeading from '@/app/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
	return (
		<section className='md:p-6'>
			<SectionHeading heading='Tokenomics' />

			<h3 className='text-[#0b1426] text-lg font-bold mb-3'>
				Initial Distribution
			</h3>

			<div className='py-6 flex gap-6 items-center'>
				<Image
					src='/initial-distribution.png'
					alt='initial distribution'
					width={120}
					height={120}
				/>

				<div className='flex flex-col gap-4'>
					<div className='flex gap-2 items-center'>
						<div className='w-4 h-4 rounded-full bg-[#0082FF]'></div>
						<p className='text-[#202020]'> Crowdsale investors: 80% </p>
					</div>

					<div className='flex gap-2 items-center'>
						<div className='w-4 h-4 rounded-full bg-[#faa002]'></div>
						<p className='text-[#202020]'> Foundation: 20% </p>
					</div>
				</div>
			</div>

			<p className='text-base font-medium text-[#3e424a] mb-5'>
				Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
				vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
				amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
				eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
				felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
				aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
				curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
				ut. Vulputate ipsum aliquet odio nisi eu ac risus.
			</p>
		</section>
	)
}

export default Tokenomics
