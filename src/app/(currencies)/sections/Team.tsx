import SectionHeading from '@/app/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

interface TeamMember {
	id: number
	name: string
	img: string
	designation: string
	description: string
}

const teamMembers: TeamMember[] = [
	{
		id: 1,
		name: 'John Smith',
		img: '/john-smith.png',
		designation: 'Designation here',
		description:
			'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit si fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
	},
	{
		id: 2,
		name: 'Elina Williams',
		img: '/elina-williams.png',
		designation: 'Designation here',
		description:
			'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit si fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
	},
	{
		id: 3,
		name: 'Sandeep',
		img: '/sandeep.png',
		designation: 'Designation here',
		description:
			'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit si fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu',
	},
]

const Team = () => {
	return (
		<section className='md:p-6'>
			<SectionHeading heading='Team' />
			<p className='text-base font-medium text-[#3e424a] mb-5'>
				Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
				nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
				quam. Facilisis purus convallis quam augue.
			</p>

			<div className='flex flex-col gap-6'>
				{teamMembers.map((member) => (
					<TeamCard key={member.id} {...member} />
				))}
			</div>
		</section>
	)
}

export default Team

interface TeamCardProps {
	img: string
	name: string
	designation: string
	description: string
}

const TeamCard: React.FC<TeamCardProps> = ({
	name,
	description,
	designation,
	img,
}) => {
	return (
		<div className="flex-shrink-0 w-full p-4 md:p-6 rounded-lg bg-[#E8F4FD] flex flex-col md:flex-row items-center md:items-start gap-6">
		  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
		    <Image
		      src={img}
		      alt="Event 1"
		      width={110}
		      height={150}
		      className="rounded-lg"
		    />
		
		    <div className="text-[#0F1629]">
		      <h6 className="text-center md:text-left text-[15px] font-semibold">{name}</h6>
		      <p className="text-[#788F9B] text-xs text-center md:text-left">{designation}</p>
		    </div>
		  </div>
		  <div className="text-center md:text-left">
		    <p className="text-[10px] md:text-sm text-[#0F1629]">{description}</p>
		  </div>
		</div>

	)
}
