import { IoCheckmarkCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'

export const AddedToCartMessage = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)
	return (
		<>
			{
				selectedProduct !== null && (
					<div className="bg-white flex justify-center gap-5 h-[138px] left-0 w-full font-sans shadow-md">

						<div className="cart-message__container flex items-center gap-5 relative">
							<div className="img-container w-[66px] h-16 rounded-full bg-gray-200 overflow-hidden flex justify-center">
								<img src={selectedProduct.pictures[0].url} className="w-16 object-contain"/>
								<IoCheckmarkCircle size="1.5em" className='absolute bg-white rounded-full text-green-600 bottom-10 left-12'/>
							</div>
							<div className="text-container flex flex-col gap-1">
								<span className='text-green-600 font-semibold text-lg'>Agregaste a tu carrito</span>
								<span className='text-xs font-medium'>{selectedProduct.title}</span>
							</div>
							<div className='w-10 border-r h-3/4'/>
						</div>

						<div className="cart-actions__container flex items-center gap-5">
							<div className='btn-container flex items-center gap-2'>
								<Link to="/cart" className='text-md font-medium text-white bg-blue-500 h-12 p-3 rounded-md'>Ver carrito</Link>
								<Link to="checkout/cart" className='text-md font-medium text-blue-500 bg-sky-100 h-12 p-3 rounded-md'>Comprar carrito</Link>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}
