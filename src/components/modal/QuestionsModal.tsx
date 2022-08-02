import { useUi } from '../../hooks/useUi'
import Modal from 'react-modal'
import { useAppSelector } from '../../hooks/reduxHooks'
import { customStyles } from '../../utils/modalStyles'
import { PaymentMethods } from './PaymentMethods'
import { Refund } from './Refund'
import { Warranty } from './Warranty'
import { WithoutCard } from './WithoutCard'

export const QuestionsModal = () => {
	const { isQuestionModalOpen, closeQuestionModal } = useUi()
	const { content } = useAppSelector(state => state.ui)

	const modalProps = {
		isOpen: isQuestionModalOpen,
		onRequestClose: closeQuestionModal,
		style: customStyles,
		closeTimeoutMS: 200,
		className: 'modal',
		overlayClassName: 'modal-fondo'
	}

	if (content === 'promo') {
		return (
			<Modal {...modalProps} >
				{content === 'promo' && (
					<div className='container-modal'>
						<PaymentMethods />
					</div>
				)}
			</Modal>
		)
	} else if (content === 'refund') {
		return (
			<Modal {...modalProps} >
				{content === 'refund' && (
					<div className='container-modal'>
						<Refund />
					</div>
				)}
			</Modal>
		)
	} else if (content === 'warranty') {
		return (
			<Modal {...modalProps} >
				{content === 'warranty' && (
					<div className='container-modal'>
						<Warranty />
					</div>
				)}
			</Modal>)
	} else if (content === 'without-card') {
		return (
			<Modal {...modalProps} >
				{content === 'without-card' && (
					<div className='container-modal'>
						<WithoutCard />
					</div>
				)}
			</Modal>)
	}
	return <></>
}
