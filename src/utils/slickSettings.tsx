import { SlickArrowLeft, SlickArrowLeftAlt, SlickArrowRight, SlickArrowRightAlt } from '../components/arrows'

export const categorySettings: {} = {
	className: 'center',
	centerMode: false,
	infinite: false,
	centerPadding: '100px',
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	speed: 300,
	rows: 2,
	draggable: false,
	slidesPerRow: 2,
	adaptiveHeight: true,
	prevArrow: <SlickArrowLeft category={'slick-categories-arrow'}/>,
	nextArrow: <SlickArrowRight category={'slick-categories-arrow'}/>,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
	]
}

export const carouselSettings: {} = {
	dots: true,
	infinite: true,
	draggable: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: <SlickArrowLeftAlt />,
	nextArrow: <SlickArrowRightAlt />,
	appendDots: (dots: any) => (
		<div>
			<ul className='absolute -top-16 left-[43%]'>{dots}</ul>
		</div>
	)
}

export const threeColSettings = {
	dots: false,
	infinite: false,
	speed: 200,
	slidesToShow: 3,
	slidesToScroll: 3,
	draggable: false,
	prevArrow: <SlickArrowLeft />,
	nextArrow: <SlickArrowRight />
}
