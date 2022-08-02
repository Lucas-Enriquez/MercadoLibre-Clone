import React from 'react'
import Slider from 'react-slick'
import { threeColSettings } from '../../utils'
import { offers } from '../../utils/offers'
import { FullIcon } from '../full-icon/FullIcon'

export const AlsoBought = () => {
	return (
		<section className='mb-14 mx-auto mt-7 w-fit flex flex-col gap-5'>
			<h2 className='text-2xl font-normal'>Quienes vieron este producto también compraron</h2>
			<div className='w-[720px] text-gray-700 rounded-lg m-auto max-w-homescreen offer-slider'>
				<Slider {...threeColSettings} className="">

					{offers.map(offer => (
						<div key={offer.id} className="px-2 w-full">
							<div className='h-[330px] bg-white text-gray-800 slick-list rounded-b-md shadow-md hover:shadow-md transition-shadow ease-in-out'>
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
