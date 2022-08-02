import { categoriesReducer } from '../slices/categorySlice'
import { configureStore } from '@reduxjs/toolkit'
import { meliApi } from '../api/meliApi'
import { searchReducer } from '../slices/searchSlice'
import { uiReducer } from '../slices/uiSlice'
import { cartReducer } from '../slices/cartSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		searchProducts: searchReducer,
		ui: uiReducer,
		cart: cartReducer,
		[meliApi.reducerPath]: meliApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(meliApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
