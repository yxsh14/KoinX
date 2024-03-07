import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import MainContainer from '../components/MainContainer'
import AsideContainer from '../components/AsideContainer'
import YouMayLike from './sections/YouMayLike'
import TrendingCoins from './sections/TrendingCoins'

const Home = () => {
	return (
		<div className='w-full p-4 lg:px-8'>
			<Breadcrumb path={['Cryptocurrencies', 'Bitcoin']} />
			<main className='grid grid-cols-12'>
				<MainContainer />
				<AsideContainer />
			</main>

			<YouMayLike />
			<TrendingCoins />
		</div>
	)
}

export default Home
