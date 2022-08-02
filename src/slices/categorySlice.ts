import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoryState {
  categories: []
}

const initialState: CategoryState = {
	categories: []
}

const productsSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories: (state, { payload }:PayloadAction<[]>) => {
			state.categories = payload
		}
	}
})

export const { setCategories } = productsSlice.actions
export const categoriesReducer = productsSlice.reducer
