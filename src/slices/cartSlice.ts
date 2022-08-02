import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {id: string, quantity: number, title: string, picture: string, price: number, updatedPrice: number}

interface Cart {
  products: Product[],
  hasBeenAdded: boolean
}

const productsLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const initialState:Cart = {
	products: productsLocalStorage !== null ? productsLocalStorage : [],
	hasBeenAdded: false
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, { payload }:PayloadAction<Product>) => {
			state.products.push(payload)
			state.hasBeenAdded = true
		},
		clearMessage: (state) => {
			state.hasBeenAdded = false
		},
		increaseQuantity: (state, { payload }: PayloadAction<any>) => {
			state.products = state.products.map(product => product.id === payload
				? { ...product, quantity: product.quantity + 1 }
				: product
			)
		},
		decreaseQuantity: (state, { payload }: PayloadAction<any>) => {
			const selectedProduct = state.products.find(product => product.id === payload)
			console.log(selectedProduct)

			if (selectedProduct !== undefined) {
				selectedProduct.quantity > 1 &&
				(state.products = state.products.map(product => product.id === payload
					? { ...product, quantity: product.quantity - 1, updatedPrice: product.price * product.quantity }

					: product)
				)
			}
		},
		getPrices: (state, { payload }: PayloadAction<string>) => {
			if (payload === 'increase') {
				state.products = state.products.map((product) => {
					return { ...product, updatedPrice: product.price * product.quantity }
				})
			} else {
				state.products = state.products.map((product) => {
					return { ...product, updatedPrice: product.price / product.quantity }
				})
			}
		},
		deleteItem: (state, { payload }: PayloadAction<string>) => {
			state.products = state.products.filter(product => product.id !== payload)
		}
	}

})

export const { addProductToCart, clearMessage, increaseQuantity, decreaseQuantity, getPrices, deleteItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer
