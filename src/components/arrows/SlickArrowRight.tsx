import { BsChevronRight } from 'react-icons/bs'

export const SlickArrowRight = (props: any) => {
	const { onClick, currentSlide, category } = props

	return (
		<button
			onClick={onClick}
			className={currentSlide === 5
				? 'hidden'
				: `${category && category} hidden bg-white p-3 rounded-full shadow-md hover:shadow-xl transition-shadow ease-in absolute -right-6 top-32 slick-arrow`}
		>
			<BsChevronRight color="#5e9dfb" size="2em" />
		</button>
	)
}
