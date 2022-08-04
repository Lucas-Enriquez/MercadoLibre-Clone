import { AiFillShopping } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useUi } from '../../hooks/useUi'

export const SuccessfulPurchase = () => {
	const { closeQuestionModal } = useUi()

	const { clearCart } = useCart()

	const navigate = useNavigate()

	const finishPurchase = () => {
		closeQuestionModal()
		localStorage.removeItem('cart')
		clearCart()
		navigate('/')
	}

	return (
		<>
			<div className="w-full h-screen flex flex-col relative">
				<div className="bg-green-600 h-80 text-left flex justify-center">
					<div className="flex justify-between items-center w-3/4">
						<div className="text-container text-white">
							<span className="text-xs">¡Excelente compra!</span>
							<h3 className="text-xl font-bold">Llega el Miércoles</h3>
						</div>
						<div className="bg-white w-24 h-24 rounded-full flex justify-center items-center">
							<AiFillShopping size="4em" color='#3b82f6'/>
						</div>
					</div>
				</div>
				<div className="h-full w-full">
					<div className='w-2/4'>
						<div className="bg-white w-9/12 h-fit m-auto shadow-md rounded-md absolute top-[210px] right-[100px]">
							<div className="flex flex-col gap-3 p-12">
								<h4 className="font-medium text-lg text-gray-500">Envío a domicilio</h4>
								<span className="text-gray-400">Te avisaremos cuando tu compra esté en camino.</span>
							</div>
							<button onClick={() => finishPurchase()} className='absolute top-50 w-2/4 mt-12 bg-blue-500 text-white px-5 py-3 rounded-md font-medium'><p>Continuar</p> </button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
