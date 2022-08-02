import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSelectedProductMutation, useObtainSearchedProductsQuery } from '../api/meliApi'
import { Spinner } from '../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { setSearchProducts, setSelectedProducts } from '../slices/searchSlice'
import { filtersSpanish } from '../utils/filtersSpanish'

export const Search = () => {
	const dispatch = useAppDispatch()
	const { product } = useParams()

	const navigate = useNavigate()

	const title = product !== undefined && product.charAt(0).toUpperCase() + product.slice(1)

	const { isLoading, data } = useObtainSearchedProductsQuery(title)

	const state = useAppSelector(state => state.searchProducts.productList)
	console.log({ isLoading, state })

	const [getSelectedProduct, result] = useGetSelectedProductMutation()

	//* Recupera objetos de la búsqueda al recargar
	useEffect(() => {
		if (product !== undefined) {
			document.title = `${title} | MercadoLibre 📦`
			dispatch(setSearchProducts(data))
		}		if (data !== undefined) {
			dispatch(setSearchProducts(data))
		}

		if (result.data !== undefined) {
			dispatch(setSelectedProducts(result.data[0].body))
			navigate(`/${result.data[0].body.id}`)
		}
	}, [data, result.data])

	//* Llama al hook useGetSelectedProductQuery para fetchear datos del item, tomando como argumento su ID
	const handleSelectProduct = (id: string) => {
		getSelectedProduct(id)
	}
	return (
		<main className='text-gray-meli overflow-x-auto'>
			<div className='banner-search-section'>
				<img className='object-cover h-[90px]' src='https://http2.mlstatic.com/D_NQ_NP_804104-MLA50768860359_072022-OO.jpg'/>
			</div>
			{
				state === undefined || isLoading
					? (<Spinner />
					)
					: (
						<div className="App items-center min-h-screen pb-20 overflow-x-hidden bg-background-meli px-3">
							<div className='search-main gap-8 flex w-full xl:w-5/6 max-w-6xl mx-auto mt-8'>
								<aside className='aside text-left w-fit'>
									<h1 className='text-2xl font-semibold '>{title}</h1>
									<span className='text-sm font-open-sans font-light'>{state.paging?.total.toLocaleString('es-AR')} resultados</span>
									{
										state.available_filters.map((filter: {id: string, name: string, values: []}) => (
											<div key={filter.id} className="mt-4">
												<div className='font-medium'>{filtersSpanish[filter.id]}
													<ul className='mt-2'>
														<li className='font-medium font-open-sans flex flex-col'>
															{filter.values.slice(0, 7).map((value: {id: string, name: string, results: []}) => (
																<span key={value.id} className='text-sm font-light font-sans'>{value.name} ({value.results})</span>
															))}
														</li>
													</ul>
												</div>
											</div>
										))
									}
								</aside>
								<section className='search-catalog bg-white shadow-sm rounded-sm w-full'>
									<ol className='flex flex-col'>
										{state.results.map((product: {tags: [], id: string, title: string, thumbnail: string, thumbnail_id: string, shipping: {free_shipping: boolean}, price: number, original_price: number }) => (
											<li key={product.id}>
												<div className='product-card bg-white py-5 px-5 flex gap-5 '>
													<div className='card-img-container w-40 h-40 min-w-[160px]'>
														<img onClick={() => handleSelectProduct(product.id)} className='cursor-pointer object-contain' src={`https://http2.mlstatic.com/D_NQ_NP_767602-${product.thumbnail_id}-V.webp`}/>
													</div>
													<div onClick={() => handleSelectProduct(product.id)} className='w-auto product-info flex flex-col text-left gap-2 justify-center cursor-pointer'>
														<div className='product-search__title'>
															<h2 className='text-xl font-light'>{product.title}</h2>
														</div>
														{product.original_price &&
															<span className='font-light line-through text-xs text-gray-400'>${product.original_price}</span>}
														<span className='font-medium text-2xl'>$ {product.price?.toLocaleString('es-AR')}</span>
														{product.shipping.free_shipping && <span className='text-green-600 font-medium text-sm font-sans'>Envío gratis</span>}
													</div>
												</div>
												<hr/>
											</li>
										))}
									</ol>
								</section>
							</div>
						</div>
					)
			}
		</main>
	)
}
