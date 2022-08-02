import Slider from 'react-slick'
import { offers } from '../../utils/offers'
import { SlickArrowLeft, SlickArrowRight } from '../arrows'
import { FullIcon } from '../full-icon/FullIcon'

const settings = {
	dots: false,
	infinite: false,
	speed: 200,
	slidesToShow: 5,
	slidesToScroll: 3,
	prevArrow: <SlickArrowLeft />,
	nextArrow: <SlickArrowRight />
}

export const Offers = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen offer-slider'>
				<h2 className="text-gray-600 text-left mb-5 text-2xl font-light">Ofertas</h2>
				<Slider {...settings} className="w-full">

					{offers.map(offer => (
						<div key={offer.id} className="px-2 w-full">
							<div className='h-[330px] bg-white text-gray-800 slick-list rounded-b-md shadow-sm hover:shadow-md transition-shadow ease-in-out'>
								<div className='w-56'>
									<img src={offer.img} className='w-59 object-cover'/>
								</div>
								<hr/>
								<div className='py-5 px-4'>

									<div className='text-left flex items-center gap-3'>
										<span className='text-2xl font-medium'>$ {offer.price}</span>
										{ offer.discount > 0
											? <small className='text-sm font-light text-green-600'>{offer.discount}% OFF</small>
											: null
										}
									</div>
									<div className='text-left'>
										{
											offer.dues &&
										<span className='text-xs text-green-600'>6x $ {(offer.price / 6).toFixed(3)} sin interés</span>
										}
									</div>
									<div className='flex items-center gap-2'>
										{
											offer.freeShipping &&
											<>
												<span className='text-xs text-green-600 font-bold'>Envío gratis</span>
												<FullIcon />
											</>
										}
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}
