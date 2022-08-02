
import { BsShieldCheck } from 'react-icons/bs'
import { IoCloseOutline } from 'react-icons/io5'
import { useUi } from '../../hooks/useUi'

export const Warranty = () => {
	const { closeQuestionModal } = useUi()

	return (
		<>
			<div className="flexjustify-between px-16 py-10 flex flex-col gap-10">
				<div className="flex justify-between">
					<span className="text-2xl font-bold">Garantía</span>
					<button onClick={() => closeQuestionModal()} className="text-blue-500 h-full"><IoCloseOutline size="1.8em"/></button>
				</div>

				<div className='modal-body flex flex-col gap-5'>

					<div className='flex gap-5'>
						<div className='warranty-logo-container p-3 rounded-full bg-gray-200 w-fit'>
							<BsShieldCheck size="1.2em"/>
						</div>
						<div className='text-sm'>
							<span className='font-bold'>Tu compra está protegida. </span>
						Si hay algún problema o no recibís el producto tal como lo compraste, te devolvemos el dinero que pagaste.
						</div>
					</div>
					<div>
						<p className='font-bold text-xl'>Estamos para ayudarte, siempre</p>
						<span className='text-sm'>Te acompañamos hasta que recibas lo que compraste y nos avises que estás conforme. Si surge algún problema, solo tenés que avisarnos.</span>
						<a href="#" className='text-blue-500 text-xs block mt-2'>Conocer más sobre Compra Protegida</a>
					</div>
					<hr />
					<div className='flex flex-col gap-5'>
						<p className='font-bold text-xl'>Garantía del vendedor</p>
						<span className='text-sm'>Garnía de fábrica: 12 meses</span>
					</div>
				</div>
			</div>
		</>
	)
}
