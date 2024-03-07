import CoinCarousel from '@/app/components/CoinCarousel'
import SectionHeading from '@/app/components/SectionHeading'
import { getTrendingCoins } from '@/utills'
import React from 'react'

const TrendingCoins = async () => {
	const trendingCoins = await getTrendingCoins()
	return (
		<div className='md:p-6 mb-7'>
			<SectionHeading heading='Trending Coins' />
			<CoinCarousel coins={trendingCoins} />
		</div>
	)
}

export default TrendingCoins
