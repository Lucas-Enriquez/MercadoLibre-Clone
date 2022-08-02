import { IoCloseOutline } from 'react-icons/io5'
import { useUi } from '../../hooks/useUi'

export const WithoutCard = () => {
	const { closeQuestionModal } = useUi()

	return (
		<>
			<div className="flexjustify-between px-16 py-10 flex flex-col gap-10">
				<div className="flex justify-between">
					<span className="text-2xl font-bold">Comprá con Mercado Crédito ¡Tenés hasta 12 cuotas sin tarjeta!</span>
					<button onClick={() => closeQuestionModal()} className="text-blue-500 h-full"><IoCloseOutline size="1.8em"/></button>
				</div>

				<div className='modal-body flex flex-col gap-5 font-normal text-sm'>
					<ol className='list-decimal flex flex-col gap-4'>
						<li><span className='font-semibold'>Elegí lo que quieras comprar</span> dentro de tu <a className='text-blue-500'>límite disponible.</a></li>
						<li><span className='font-semibold'>Seleccioná Mercado Crédito como medio de pago</span> y la cantidad de cuotas.</li>
						<li><span className='font-semibold'>Pagá las cuotas mes a mes</span> con débito, efectivo o dinero en cuenta desde la sección Mercado Crédito.</li>
					</ol>
				</div>
			</div>
		</>
	)
}
