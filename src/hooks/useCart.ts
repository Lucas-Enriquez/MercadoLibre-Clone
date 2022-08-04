import { addProductToCart, clearAllCart, clearMessage, decreaseQuantity, deleteItem, getPrices, increaseQuantity, Product } from '../slices/cartSlice'
import { useAppDispatch } from './reduxHooks'

export const useCart = () => {
	const dispatch = useAppDispatch()

	const addToCart = (product: Product) => {
		dispatch(addProductToCart(product))
	}

	const addQuantity = (payload: string) => {
		dispatch(increaseQuantity(payload))
		dispatch(getPrices('increase'))
	}
	const decrementQuantity = (payload: string) => {
		dispatch(decreaseQuantity(payload))
		dispatch(getPrices('decrease'))
	}
	const deleteProduct = (payload: string) => {
		dispatch(deleteItem(payload))
	}

	const clearAddedMessage = () => {
		dispatch(clearMessage())
	}

	const clearCart = () => {
		dispatch(clearAllCart())
	}
	return {
		//* Props
		//* Metodos
		addToCart,
		clearAddedMessage,
		addQuantity,
		decrementQuantity,
		deleteProduct,
		clearCart
	}
}
