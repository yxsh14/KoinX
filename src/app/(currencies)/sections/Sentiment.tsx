import SectionHeading from '@/app/components/SectionHeading'
import SecondarySectionHeading from '@/app/components/SecondarySectionHeading'
import EventCarousel from '@/app/components/EventCarousel'
import { FC } from 'react'

const Sentiment = () => {
	return (
		<section className='md:p-6 mb-5'>
			<SectionHeading heading='Sentiment' />
			<SecondarySectionHeading title='Key Events' />

			<div className='my-4'>
				<EventCarousel />
			</div>

			<SecondarySectionHeading title='Analyst Estimates' />

			<div className='flex mt-5'>
				<div className='w-[120px] h-[120px] pr-10 flex items-center justify-center'>
					<h6 className='flex items-center font-medium text-[#0fba83]'>
						<span className='text-4xl leading-[44px] '> 76 </span>
						<span className='text-base'>%</span>
					</h6>
				</div>

				<div className='flex-1'>
					<LineBar title='Buy' barColor='#00B386' percentage={76} />
					<LineBar title='Hold' barColor='#C7C8CE' percentage={8} />
					<LineBar title='Sell' barColor='#F7324C' percentage={16} />
				</div>
			</div>
		</section>
	)
}

export default Sentiment

interface LineBarProps {
	title: string
	barColor: string
	percentage: number
}

const LineBar: FC<LineBarProps> = ({ title, barColor, percentage }) => {
	return (
		<div className='p-2 flex gap-7 items-center'>
			<p className='text-base leading-[22px] font-medium text-[#7c7e8c] w-10'>
				{' '}
				{title}{' '}
			</p>
			<div className='flex-1 flex items-center gap-2'>
				<div
					className='flex-shrink-0 rounded-lg h-2'
					style={{ width: `${percentage}%`, background: barColor }}></div>
				<p className='font-medium text-[#7c7e8c] leading-[22px]'>
					{' '}
					{percentage}%{' '}
				</p>
			</div>
		</div>
	)
}
