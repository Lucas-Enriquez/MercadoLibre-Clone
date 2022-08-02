import { AiFillDollarCircle } from 'react-icons/ai'
import { IoCalendar, IoCloseOutline } from 'react-icons/io5'
import { TbArrowBack } from 'react-icons/tb'
import { useUi } from '../../hooks/useUi'

export const Refund = () => {
	const { closeQuestionModal } = useUi()

	return (
		<>
			<div className="flexjustify-between px-16 py-10 flex flex-col gap-10">
				<div className="flex justify-between">
					<span className="text-3xl font-bold">Devoluciones Gratis</span>
					<button onClick={() => closeQuestionModal()} className="text-blue-500 h-full"><IoCloseOutline size="1.8em"/></button>
				</div>

				<div className='modal-body flex flex-col gap-5'>
					<div className='flex gap-5'>
						<IoCalendar size="1.8em"/>
						<span>Tenés 30 días desde que te llega</span>
					</div>
					<div className='flex gap-5'>
						<TbArrowBack size="1.8em"/>
						<span>Tenés 30 días desde que te llega</span>
					</div>
					<div className='flex gap-5'>
						<AiFillDollarCircle size="1.8em"/>
						<span>Para devolverlo, el producto debe estar tal cual lo recibiste</span>
					</div>
				</div>
			</div>
		</>
	)
}
