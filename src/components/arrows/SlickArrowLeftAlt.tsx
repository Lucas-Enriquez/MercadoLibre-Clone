import { BsChevronLeft } from 'react-icons/bs'

export const SlickArrowLeftAlt = (props: any) => {
	const { onClick } = props
	return (
		<button
			onClick={onClick}
			className={'bg-white lg:flex hidden w-16 h-16 rounded-full shadow-md hover:shadow-xl transition-shadow ease-in absolute -left-8 top-32 z-10 justify-end items-center pr-3'}>
			<BsChevronLeft color="#5e9dfb" size="1.2em"/>
		</button>
	)
}
