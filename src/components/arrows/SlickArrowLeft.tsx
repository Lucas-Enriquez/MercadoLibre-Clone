import { BsChevronLeft } from 'react-icons/bs'

export const SlickArrowLeft = (props: any) => {
	const { onClick, currentSlide, category } = props
	return (
		<button
			onClick={onClick}
			className={currentSlide === 0
				? 'hidden'
				: `${category && category} hidden bg-white p-3 rounded-full shadow-md hover:shadow-xl transition-shadow ease-in absolute -left-6 top-32 z-10 slick-arrow`}>
			<BsChevronLeft color="#5e9dfb" size="2em" />
		</button>
	)
}
