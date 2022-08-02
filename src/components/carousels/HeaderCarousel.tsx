import Slider from 'react-slick'
import { carouselPics } from '../../assets/carousel_pics/carouselPics'
import { carouselSettings } from '../../utils'

export const HeaderCarousel = () => {
	return (
		<div className='relative flex justify-center w-full'>
			<Slider {...carouselSettings} className="w-full">
				{carouselPics.map(pic => (
					<div key={pic} className="flex justify-center">
						<img src={pic} width="1600px" className='m-auto'/>
					</div>

				))}
			</Slider>
		</div>
	)
}
