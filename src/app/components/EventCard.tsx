import Image from 'next/image'
import React from 'react'

const EventCard = () => {
	return (
		<div className='flex-shrink-0 p-4 md:p-6 rounded-lg bg-[#E8F4FD] max-w-xl w-full flex gap-2'>
			{/* logo */}
			<div className='flex-shrink-0 w-11 h-11 rounded-full bg-[#0082FF] flex items-center justify-center'>
				<Image src='/event-1.png' alt='event 1' width={22} height={22} />
			</div>

			{/* content */}
			<div className=''>
				<h4 className='text-xs md:text-sm text-[#191C1F] font-medium mb-2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
					placeat.
				</h4>
				<p className='text-[10px] md:text-sm text-[#3E5765]'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					praesentium et error eaque qui. Ullam facilis sed pariatur
					voluptatibus delectus necessitatibus eligendi totam nobis,
				</p>
			</div>
		</div>
	)
}

export default EventCard
