'use client'

import useCrouselScroll from '../hooks/useCrouselScroll'
import React from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import CoinCard from './CoinCard'
import { TrendingCoin } from '@/utills'

interface CoinCarouselProps {
	coins: TrendingCoin[]
}

const CoinCarousel: React.FC<CoinCarouselProps> = ({ coins }) => {
	const {
		carouselRef,
		isPreviousButtonDisabled,
		isNextButtonDisabled,
		scrollToPrevious,
		scrollToNext,
	} = useCrouselScroll()

	return (
		<div className='relative group w-full'>
			<div
				ref={carouselRef}
				className='w-full flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-300 ease-in-out'>
				{coins.map((coin) => (
					<CoinCard key={coin.id} {...coin} />
				))}
			</div>

			<div className=''>
				<button
					type='button'
					disabled={isPreviousButtonDisabled}
					onClick={scrollToPrevious}
					aria-label='previous button'
					className='absolute top-0 left-1 h-full w-12 flex justify-center items-center disabled:hidden disabled:cursor-default'>
					<div className='w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100'>
						<GrFormPrevious />
					</div>
					<span className='sr-only'> previous</span>
				</button>

				<button
					type='button'
					disabled={isNextButtonDisabled}
					onClick={scrollToNext}
					aria-label='next button'
					className='absolute top-0 right-1 h-full w-12 flex justify-center items-center disabled:hidden disabled:cursor-default'>
					<div className='w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100'>
						<GrFormNext />
					</div>
					<span className='sr-only'> next</span>
				</button>
			</div>
		</div>
	)
}

export default CoinCarousel
