import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHooks'
import { useCart } from '../hooks/useCart'
import { Product } from '../slices/cartSlice'

export const Cart = () => {
	const { addQuantity, decrementQuantity, deleteProduct } = useCart()
	const { products: cartProducts } = useAppSelector<any>(state => state.cart)
	const navigate = useNavigate()

	const total = cartProducts.map((product: {updatedPrice: number}) => product.updatedPrice).reduce((price: number, acc: any) => price + acc, 0)

	return (
		<main className='bg-gray-200 min-h-screen pt-5'>
			<div className=' flex justify-center w-screen'>
				<div className='relative overflow-x-auto shadow-md sm:rounded-md md:w-full lg:w-4/6 h-full m-auto'>
					{cartProducts.length === 0 &&
			<div className='w-full h-full bg-white p-16 flex justify-center items-center flex-col gap-2'>
				<div className='text-center'>
					<h3 className='text-4xl text-gray-400 font-light mb-2'>Tu carrito está vacío</h3>
					<small className='text-lg text-gray-400 font-light'>¿No sabés qué comprar? ¡Miles de productos te esperan!</small>
				</div>
			</div>}

					{cartProducts.length > 0 &&
			<div className='w-full h-full bg-white p-7 flex flex-col gap-10'>
				{cartProducts.map((product : Product) => (
					<div key={product.id} className='max-h-40'>
						<div className='w-full max-h-40 text-sm text-left flex gap-2 justify-between'>
							<div className='img-container w-20 max-h-full'>
								<img src={product.picture} className='w-full max-h-14 object-contain' />
							</div>
							<div className='item-information flex w-full justify-between'>
								<div className='title-container max-w-96 w-96 flex flex-col justify-between '>
									<h3 className='font-semibold text-lg text-gray-900 truncate'>{product.title}</h3>
									<ul className='options-container w-96 flex gap-6'>
										<li><button onClick={() => deleteProduct(product.id)} className='text-blue-500 text-xs font-medium hover:underline'>Eliminar</button></li>
									</ul>
								</div>
								<div className='container quantity-selector__container flex items-center w-auto h-full border rounded-md py-2 px-2 gap-2'>
									<button onClick={() => decrementQuantity(product.id)} className='border-gray-300 px-2 text-2xl  text-blue-600 hover:text-blue-300 transition-colors ease-in-out'>-</button>
									<span className='text-lg font-normal text-gray-700'>{product.quantity}</span>
									<button onClick={() => addQuantity(product.id)} className='border-gray-300 px-2 text-2xl  text-blue-600 hover:text-blue-300 transition-colors ease-in-out'>+</button>
								</div>
								<div className='price__container w-24 flex  items-center'>
									<h3 className='text-xl'>${product.updatedPrice.toLocaleString('es-AR')}</h3>
								</div>
							</div>
						</div>
						<hr className='mt-4' />
					</div>
				))}
				<div className='total__container flex justify-end py-2'>
					<h4 className='font-light text-2xl'>Total: ${total.toLocaleString('es-AR')}</h4>
				</div>
				<hr />
				<button onClick={() => navigate('/checkout/cart')} className='py-3 px-5 text-white font-light bg-blue-500  rounded-md self-end hover:bg-blue-400 transition-colors ease-in-out'>Continuar compra</button>
			</div>}
				</div>
			</div>

		</main>
	)
}
