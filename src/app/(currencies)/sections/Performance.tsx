import SecondarySectionHeading from '@/app/components/SecondarySectionHeading'
import SectionHeading from '@/app/components/SectionHeading'
import Tabs from '@/app/components/Tabs'
import React from 'react'

interface RowProps {
	id: number
	title: string
	value: string
}

const table1: RowProps[] = [
	{
		id: 1,
		title: 'Bitcoin Price',
		value: '$16,815.46',
	},
	{
		id: 2,
		title: '24h Low / 24h High',
		value: '$16,382.07 / $16,874.12',
	},
	{
		id: 3,
		title: '7d Low / 7d High',
		value: '$16,382.07 / $16,874.12',
	},
	{
		id: 4,
		title: 'Trading Volume',
		value: '$23,249,202,782',
	},
	{
		id: 5,
		title: 'Market Cap Rank',
		value: '#1',
	},
]

const table2: RowProps[] = [
	{
		id: 1,
		title: 'Market Cap',
		value: '$323,507,290,047',
	},
	{
		id: 2,
		title: 'Market Cap Dominance',
		value: '38.343%',
	},
	{
		id: 3,
		title: 'Volume / Market Cap',
		value: '0.0718',
	},
	{
		id: 4,
		title: 'All-Time High',
		value: '$69,044.77 -75.6%',
	},
	{
		id: 1,
		title: 'All-Time Low',
		value: '$67.81 24729.1%',
	},
]

const Performance = () => {
	return (
		<div>
			<Tabs />

			<section className='md:p-6'>
				<SectionHeading heading='Performance' />

				<div className='py-5 mb-5 flex flex-col gap-7'>
					<RangeSlider
						titleLeft="Today's Low"
						titleRight="Today's High"
						valueLeft='46,930.22'
						valueRight='49,343.83'
					/>
					<RangeSlider
						titleLeft='52W Low'
						titleRight='52W High'
						valueLeft='16,930.22'
						valueRight='49,743.83'
					/>
				</div>

				<SecondarySectionHeading title='Fundamentals' />

				<div className=' mt-5 flex flex-col md:flex-row md:justify-between md:gap-12'>
					<HorizontalTable rows={table1} />
					<HorizontalTable rows={table2} />
				</div>
			</section>
		</div>
	)
}

export default Performance

interface RangeSliderProps {
	titleLeft: string
	valueLeft: string
	titleRight: string
	valueRight: string
}

const RangeSlider: React.FC<RangeSliderProps> = ({
	titleLeft,
	titleRight,
	valueLeft,
	valueRight,
}) => {
	return (
		<div className='flex items-center gap-7'>
			<div className='flex flex-col gap-[10px] md:w-28'>
				<p className='text-sm leading-5 text-[#44475b]'> {titleLeft} </p>
				<p className='text-base leading-6 text-[#44475b] font-medium'>
					{valueLeft}
				</p>
			</div>

			<div className='flex-1 h-2 w-full bg-rainbow-gradient rounded-lg'></div>

			<div className='flex flex-col gap-[10px] md:w-28 text-right'>
				<p className='text-sm leading-5 text-[#44475b]'> {titleRight} </p>
				<p className='text-base leading-6 text-[#44475b] font-medium'>
					{valueRight}
				</p>
			</div>
		</div>
	)
}

interface RowProps {
	id: number
	title: string
	value: string
}

interface HorizontalTableProps {
	rows: RowProps[]
}

const HorizontalTable: React.FC<HorizontalTableProps> = ({ rows }) => {
	return (
		<div className='flex-1'>
			{rows.map((row) => (
				<Row key={row.id} {...row} />
			))}
		</div>
	)
}

const Row: React.FC<RowProps> = ({ title, value }) => {
	return (
		<div className='py-3 pr-3 flex items-center justify-between border-b border-[#d3e0e6]'>
			<h6 className='font-medium text-sm text-[#768396]'> {title} </h6>
			<p className='font-medium text-sm text-[#111827] text-right'>{value}</p>
		</div>
	)
}
