import { onCloseQuestionModal, onOpenQuestionModal } from '../slices/uiSlice'
import { useAppDispatch, useAppSelector } from './reduxHooks'

export const useUi = () => {
	const { isQuestionModalOpen } = useAppSelector(state => state.ui)

	const dispatch = useAppDispatch()

	const openQuestionModal = (type: string) => {
		dispatch(onOpenQuestionModal(type))
	}
	const closeQuestionModal = () => {
		dispatch(onCloseQuestionModal())
	}

	return {
		//* Propiedades
		isQuestionModalOpen,

		//* Métodos
		openQuestionModal,
		closeQuestionModal
	}
}
