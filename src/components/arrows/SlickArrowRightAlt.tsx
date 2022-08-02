import { BsChevronRight } from 'react-icons/bs'

export const SlickArrowRightAlt = (props: any) => {
	const { onClick } = props

	return (
		<button
			onClick={onClick}
			className={'bg-white lg:flex hidden w-16 h-16 rounded-full shadow-md hover:shadow-xl transition-shadow ease-in absolute -right-8 top-32 justify-start items-center pl-3'}
		>
			<BsChevronRight color="#5e9dfb" size="1.2em" />
		</button>
	)
}
