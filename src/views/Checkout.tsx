import { useState } from 'react'
import { AiOutlineTrophy } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import { useAppSelector } from '../hooks/reduxHooks'
import { useUi } from '../hooks/useUi'

export const Checkout = () => {
	const { products: cartProducts } = useAppSelector(state => state.cart)

	const { openQuestionModal } = useUi()
	// const navigate = useNavigate()

	const total = cartProducts.map((product: {updatedPrice: number}) => product.updatedPrice).reduce((price: number, acc: any) => price + acc, 0)

	// const animateBuy = () => {
	// 	let timerInterval: number
	// 	Swal.fire({
	// 		title: 'Procesando compra...',
	// 		html: 'Por favor aguarde unos segundos...',
	// 		timer: 3000,
	// 		timerProgressBar: true,
	// 		didOpen: () => {
	// 			Swal.showLoading()
	// 		},
	// 		willClose: () => {
	// 			clearInterval(timerInterval)
	// 		}
	// 	})

	// 	setTimeout(() => {
	// 		Swal.fire({
	// 			icon: 'success',
	// 			title: 'Gracias por su compra!',
	// 			confirmButtonText: 'Siguiente'
	// 		}).then((result) => {
	// 			if (result.isConfirmed) {
	// 				navigate('/')
	// 			}
	// 		})
	// 	}, 3000)
	// }

	const [animation, setAnimation] = useState(false)

	const btnAnimation = () => {
		setAnimation(!animation)
		if (!animation) {
			setTimeout(() => {
				openQuestionModal('successful-purchase')
			}, 3000)
		}
	}

	return (
		<main className="bg-background-meli">
			<section className="flex justify-between gap-10 main-section m-auto h-full pb-10 w-12/12 xl:w-7/12">
				<div className='flex flex-col gap-10 w-full'>
					<div className='w-full pl-10 xl:pl-0'>
						<h1 className="text-2xl font-medium mb-5 mt-5">¿Cómo querés recibir o retirar tu compra?</h1>
						<span className='text-sm font-bold block mb-5'>Domicilio</span>
						<div className="delivery-container rounded-md bg-zinc-100 w-full h-32 p-5 flex gap-5">
							<div className="bg-white rounded-full w-fit h-fit p-3">
								<IoLocationOutline size="1.8em" color="#4d93fb"/>
							</div>
							<div className='shipment-data flex flex-col font-open-sans gap-1'>
								<h3>Av. Maipú 2609</h3>
								<span className='text-gray-400 text-xs'>C.P 1636 - Olivos, Buenos Aires</span>
								<span className='text-gray-400 text-xs'>Lucas Enriquez - 1155548898</span>
							</div>
						</div>
					</div>

					<div className='radio-group w-full pl-10 xl:pl-0'>
						<span className='text-sm font-bold block mb-5'>Recibir compra</span>

						<div className="flex bg-white py-7 px-5 rounded-md text-brown-meli items-center">

							<div className="flex items-center h-5">
								<input id="helper-radio" type="radio" name="shipping" value="domicilio" className="w-4 h-full text-blue-600 bg-gray-100 border-gray-300  rounded-full dark:bg-gray-700 dark:border-gray-600" />
							</div>
							<div className="ml-2 text-sm flex justify-between w-full items-center">
								<label htmlFor="helper-radio" className="font-medium">Llega el miércoles a tu domicilio</label>
								<p className="text-lg text-green-600 font-normal">Gratis</p>
							</div>
						</div>

						<div className='w-full mt-5'>
							<span className='text-sm font-bold block mb-5'>Retirar compra</span>
							<div className="flex bg-white py-7 px-5 rounded-t-md text-brown-meli">
								<div className="flex items-center h-5">
									<input type="radio" name="shipping" value="sucursal" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
								</div>
								<div className="ml-2 text-sm flex justify-between w-full">
									<div>
										<label className="font-medium">Retiro en correo y otros puntos</label>
										<p className="text-xs font-normal">Llega el miércoles</p>
									</div>
									<p id="helper-radio-text" className="text-lg text-green-600 font-normal">Gratis</p>
								</div>
							</div>
							<hr/>
							<div className="flex bg-white py-7 px-5 rounded-b-md text-brown-meli">
								<div className="flex items-center h-5">
									<input type="radio" name="shipping" value="vendedor" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
								</div>
								<div className="ml-2 text-sm flex justify-between w-full">
									<div>
										<label htmlFor="helper-radio" className="font-medium">El domicilio del vendedor</label>
										<p id="helper-radio-text" className="text-xs font-normal">En Buenos Aires, Capital Federal</p>
									</div>
								</div>
							</div>
							<div className='flex gap-1 items-center mt-6 text-xs text-gray-500'>
								<AiOutlineTrophy/>
								<span>Beneficio Mercado Puntos</span>
							</div>
							<div className='btn-container text-right'>
							</div>
						</div>
					</div>

				</div>
				<div className='h-screen bg-zinc-100 w-3/6 pt-11 px-6 flex flex-col gap-2'>
					<h3 className='font-bold text-sm'>Resumen de compra</h3>
					<hr className='my-3'/>
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<span className='font-light text-sm'>Productos ({cartProducts.length})</span>
							<span className='font-light text-lg'>$ {total.toLocaleString('es-AR')}</span>
						</div>
						<div className='flex justify-between'>
							<span className='font-light text-sm'>Envío</span>
							<span className='font-normal text-lg text-green-600'>Gratis</span>
						</div>
					</div>
					<hr className='my-3'/>
					<div className='flex justify-between'>
						<span className='font-light text-sm'>Total</span>
						<span className='font-light text-lg'>$ {total.toLocaleString('es-AR')}</span>
					</div>
					<button onClick={() => btnAnimation()} className={`purchase-btn transition-colors ease-in-out ${animation ? 'animating' : ''}`}><p>{!animation ? 'Confirmar Compra' : 'Procesando compra'}</p></button>
					{/* <button onClick={() => openQuestionModal('successful-purchase')} className='purchase-btn transition-colors ease-in-out'>Confirmar Compra</button> */}
				</div>
			</section>
		</main>
	)
}
