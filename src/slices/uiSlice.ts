import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isQuestionModalOpen: false,
	content: undefined
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		onOpenQuestionModal: (state, action) => {
			state.isQuestionModalOpen = true
			state.content = action.payload
		},
		onCloseQuestionModal: (state) => {
			state.isQuestionModalOpen = false
			state.content = undefined
		}
	}
})

export const { onOpenQuestionModal, onCloseQuestionModal } = uiSlice.actions

export const uiReducer = uiSlice.reducer
