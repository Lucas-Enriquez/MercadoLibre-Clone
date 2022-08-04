import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useObtainSelectedProductsQuery } from '../api/meliApi'
import { AddedToCartMessage } from '../components/cart/AddedToCartMessage'
import { Modals } from '../components/modal/Modals'
import { PaymentMethods } from '../components/product-details/PaymentMethods'
import { ProductBuyBox } from '../components/product-details/ProductBuyBox'
import { ProductDetails } from '../components/product-details/ProductDetails'
import { SellerDetails } from '../components/product-details/SellerDetails'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { setSelectedProducts } from '../slices/searchSlice'

export const Product = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)
	const dispatch = useAppDispatch()

	const { product } = useParams()

	const { isSuccess, data } = useObtainSelectedProductsQuery(product)

	useEffect(() => {
		if (typeof data !== 'undefined') {
			dispatch(setSelectedProducts(data[0].body))
		}
		document.documentElement.style.scrollBehavior = 'auto'
		setTimeout(() => window.scrollTo(0, 0), 5)
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = 'smooth'
		}
		, 5)
	}, [isSuccess])

	return (
		<main className='text-gray-meli overflow-x-auto'>
			<div className="App items-center min-h-screen pb-20 overflow-x-hidden bg-background-meli flex ">
				{
					selectedProduct === null
						? <div />
						: <section className='bg-white shadow-md w-full lg:max-w-[1184px] max-w-full h-full m-auto lg:rounded-md p-5 text-left mt-16 flex flex-col lg:justify-between lg:flex-row pb-20'>
							<ProductDetails />
							{/* <AddedToCartMessage /> */}
							<div className='flex flex-col gap-3'>
								<ProductBuyBox />
								<SellerDetails />
								<PaymentMethods />
							</div>
						</section>
				}
			</div>
		</main>

	)
}
