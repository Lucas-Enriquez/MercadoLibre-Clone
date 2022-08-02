import { GoLocation } from 'react-icons/go'
import { useAppSelector } from '../../hooks/reduxHooks'
import sellerRating from '../../assets/images/seller_rating.png'
import { FaMedal } from 'react-icons/fa'

export const SellerDetails = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)

	const { seller_address: sellerAddress } = selectedProduct

	return (
		<div className="w-80  border rounded-md px-4 py-6 font-open-sans flex flex-col gap-5">
			<h2>Información sobre el vendedor</h2>
			<div className='flex flex-col gap-5'>
				<div className='flex gap-2'>
					<GoLocation className='mt-1'/>
					<div className='flex flex-col'>
						<p>Ubicación </p>
						<span className='text-gray-400 text-smfont-light'>{sellerAddress.city.name}, {sellerAddress.state.name}</span>
					</div>
				</div>
				<div className='flex flex-col text-green-500'>
					<div className='flex gap-2'>
						<FaMedal className='mt-1'/>
						<p className='font-medium'>MercadoLíder Platinum </p>
					</div>
					<span className='text-gray-400 text-sm font-light'>¡Es uno de los mejores del sitio!</span>
					<img src={sellerRating} className="mt-3"/>
				</div>
				<a className='text-blue-500 font-medium cursor-pointer text-[13px]'>Ver más datos del vendedor</a>
			</div>
		</div>
	)
}
