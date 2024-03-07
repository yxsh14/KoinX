import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'

interface TrendingCoin {
	id: string
	name: string
	img: string
	price_change_percentage_24h: number
}

const getTopThreeTrendingCoins = async () => {
	const response = await fetch(
		'https://api.coingecko.com/api/v3/search/trending',
	)
	const data = await response.json()
	const trimedData = data.coins.slice(0, 3)
	const trendingCoins: TrendingCoin[] = trimedData.map((token: any) => ({
		id: token.item.id,
		name: token.item.name,
		img: token.item.thumb,
		price_change_percentage_24h:
			Math.round(token.item.data.price_change_percentage_24h.inr * 100) / 100,
	}))

	return trendingCoins
}

const TrendingCoin24H = async () => {
	const trendingCoins = await getTopThreeTrendingCoins()
	return (
		<div className='p-6'>
			<SectionHeading heading='Trending Coins (24H)' />

			<div className='flex flex-col gap-3'>
				{trendingCoins.map((token) => (
					<TrendingCoinCard key={token.id} {...token} />
				))}
			</div>
		</div>
	)
}

export default TrendingCoin24H

const TrendingCoinCard: React.FC<TrendingCoin> = ({
	name,
	img,
	price_change_percentage_24h,
}) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex gap-1.5'>
				<Image src={img} alt='eth' width={50} height={50} className='w-6 h-6' />

				<h6 className='text-base font-medium text-[#0f1629]'>{name}</h6>
			</div>

			<p
				className={`${
					price_change_percentage_24h > 0 ? 'text-[#14b079]' : 'text-red-500'
				} p-1 flex items-center gap-2`}>
				{price_change_percentage_24h > 0 ? (
					<VscTriangleUp />
				) : (
					<VscTriangleDown />
				)}
				<span>{price_change_percentage_24h}%</span>
			</p>
		</div>
	)
}
