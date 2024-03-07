import { FC } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

interface BreadcrumbProps {
	path: string[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ path }) => {
	return (
		<div className='py-1 flex items-center gap-1'>
			{path.map((item, idx) => (
				<PathItem key={idx} title={item} isLastItem={idx == path.length - 1} />
			))}
		</div>
	)
}

export default Breadcrumb

interface PathItemProps {
	title: string
	isLastItem: boolean
}

const PathItem: FC<PathItemProps> = ({ title, isLastItem }) => {
	return (
		<>
			<p
				className={`text-sm ${
					isLastItem
						? 'font-medium text-[#0f1629]'
						: 'font-normal text-[#3e5765]'
				}`}>
				{' '}
				{title}{' '}
			</p>
			{!isLastItem ? (
				<div className='text-[#3e5765]'>
					<MdKeyboardDoubleArrowRight />
				</div>
			) : null}
		</>
	)
}
