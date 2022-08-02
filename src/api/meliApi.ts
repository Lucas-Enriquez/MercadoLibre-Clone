import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const site = 'MLA'

export const meliApi = createApi({
	reducerPath: 'meliApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.mercadolibre.com/sites/${site}`
	}),
	endpoints: (builder) => ({
		getCategories: builder.query<[], void>({
			query: () => '/categories'
		}),
		//! TODO: Fijarse si es óptimo declararlo como "any"
		searchProducts: builder.mutation<any, string>({
			query: (term) => `/search?q=${term}`
		}),
		obtainSearchedProducts: builder.query<[], any>({
			query: (term) => `/search?q=${term}`
		}),
		getSelectedProduct: builder.mutation<[], any>({
			query: (id) => `https://api.mercadolibre.com/items?ids=${id}`
		}),
		obtainSelectedProducts: builder.query<[], any>({
			query: (id) => `https://api.mercadolibre.com/items?ids=${id}`
		})
	})
})

export const { useGetCategoriesQuery, useSearchProductsMutation, useObtainSearchedProductsQuery, useGetSelectedProductMutation, useObtainSelectedProductsQuery } = meliApi
