
import { AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai'
import { useUi } from '../../hooks/useUi'

export const QuestionsAndAnswers = () => {
	const { openQuestionModal } = useUi()

	return (
		<div className='mt-10 flex flex-col gap-10'>
			<h2 className='text-xl'>Preguntas y respuestas</h2>
			<p className='font-bold'>¿Qué querés saber?</p>
			<div className='flex gap-2'>
				<button className='text-blue-500 bg-sky-100 px-3 h-8 text-[12px] font-bold rounded-md hover:bg-blue-100 transition-colors ease-in'>Costo y tiempo de envío</button>
				<button onClick={() => openQuestionModal('refund')} className='text-blue-500 bg-sky-100 px-3 h-8 text-[12px] font-bold rounded-md hover:bg-blue-100 transition-colors ease-in'>Devolución gratis</button>
				<button onClick={() => openQuestionModal('promo')} className='text-blue-500 bg-sky-100 px-3 h-8 text-[12px] font-bold rounded-md hover:bg-blue-100 transition-colors ease-in'>Medios de pago y promociones</button>
				<button onClick={() => openQuestionModal('warranty')} className='text-blue-500 bg-sky-100 px-3 h-8 text-[12px] font-bold rounded-md hover:bg-blue-100 transition-colors ease-in'>Garantía</button>
				<button onClick={() => openQuestionModal('without-card')} className='text-blue-500 bg-sky-100 px-3 h-8 text-[12px] font-bold rounded-md hover:bg-blue-100 transition-colors ease-in'>Cuotas sin tarjeta</button>
			</div>

			<div className='w-[769px] h-12 relative'>
				<input type="text" className='px-2 outline-none border rounded-md w-full h-full focus-visible:border-2 focus-visible:border-blue-500 transition-colors ease-in-out'/>
				<button className='bg-blue-500 px-5 absolute right-[-1%] h-full rounded-r-md focus-visible:outline-2 '><AiOutlineSearch color={'white'} size={'1.6em'}/></button>
			</div>

			<div className=''>
				<h3 className='font-bold mb-10'>Últimas realizadas</h3>
				<button className='text-blue-500 bg-sky-100 py-2 text-[13px] font-bold rounded-md flex items-center gap-2 px-5 hover:bg-blue-100 transition-colors ease-in'><AiOutlineQuestionCircle className="text-color-blue-500" size="2em"/>¿Como le pregunto al vendedor?</button>
			</div>
		</div>
	)
}
