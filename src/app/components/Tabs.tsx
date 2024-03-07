import React from 'react'

const tabItems = [
	{
		id: 1,
		title: 'Overview',
		isActive: true,
	},
	{
		id: 2,
		title: 'Fundamentals',
		isActive: false,
	},
	{
		id: 3,
		title: 'News Insights',
		isActive: false,
	},
	{
		id: 4,
		title: 'Sentiments',
		isActive: false,
	},
	{
		id: 5,
		title: 'Team',
		isActive: false,
	},
	{
		id: 6,
		title: 'Techincals',
		isActive: false,
	},
	{
		id: 7,
		title: 'Tokenomics',
		isActive: false,
	},
]

const Tabs = () => {
	return (
		<div>
			<div className='w-full overflow-auto lg:overflow-visible scrollbar-hide my-5 flex gap-4 md:gap-6 lg:gap-8 items-center'>
				{tabItems.map((item) => (
					<TabItem key={item.id} {...item} />
				))}
			</div>
		</div>
	)
}

interface TabItemProps {
	title: string
	isActive: boolean
}

const TabItem: React.FC<TabItemProps> = ({ title, isActive }) => {
	return (
		<p
			className={`flex-shrink-0 whitespace-nowrap lg:flex-shrink py-2 text-sm lg:text-base bg-white  ${
				isActive
					? 'border-b-4 border-[#0052fe] font-semibold text-[#0141cf]'
					: 'text-[#3e424a] font-medium'
			} -tracking-[1%]`}>
			{' '}
			{title}{' '}
		</p>
	)
}

export default Tabs
