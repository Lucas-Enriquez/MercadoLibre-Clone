import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchProducts {
	//! TODO: Fijarse si es óptimo declararlo como "any"
  productList: any
  selectedProduct: null
}

const initialState: SearchProducts = {
	productList: {},
	selectedProduct: null
}

const searchSlice = createSlice({
	name: 'searchResults',
	initialState,
	reducers: {
		setSearchProducts: (state, { payload }: PayloadAction<any>) => {
			state.productList = payload
		},
		setSelectedProducts: (state, { payload }: PayloadAction<any>) => {
			state.selectedProduct = payload
		}
	}
})

export const { setSearchProducts, setSelectedProducts } = searchSlice.actions
export const searchReducer = searchSlice.reducer
