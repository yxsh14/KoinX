import React from 'react'

interface SectionHeadingProps {
	heading: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
	return (
		<h2 className='font-semibold text-2xl text-[#0f1629] mb-5'> {heading} </h2>
	)
}

export default SectionHeading
