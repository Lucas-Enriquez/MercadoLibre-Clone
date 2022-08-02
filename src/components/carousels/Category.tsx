import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { categoryIcons, categorySettings } from '../../utils'
import { useGetCategoriesQuery } from '../../api/meliApi'
import { useEffect } from 'react'
import { setCategories } from '../../slices/categorySlice'

export const Category = () => {
	const categories = useAppSelector((state) => state.categories.categories)

	const dispatch = useAppDispatch()
	const { isLoading, data } = useGetCategoriesQuery()

	useEffect(() => {
		const fillCategories = () => {
			if (data !== undefined) {
				dispatch(setCategories(data))
			}
		}
		fillCategories()
	}, [isLoading])

	return (
		<>
			<div className="w-full text-gray-700 flex flex-col rounded-md h-auto m-auto relative">

				{categories.length > 0 && (
					<section className='w-full max-w-homescreen m-auto category-slider'>
						<h2 className="text-gray-600 text-left mb-5 text-2xl font-light">Categorías populares</h2>
						<Slider {...categorySettings} className="m-auto shadow-xl max-w-homescreen">
							{categories.map((category) => (
								<a
									href='https://mercadolibre.com'
									key={category['id']}
									className="gap-10 h-40 border text-lg max-w-6xl bg-white hover:bg-blue-500 hover:text-white cursor-pointer pt-7 category-card"
								>
									{categoryIcons[`${category['id']}`]}
									<span className="whitespace-nowrap w-full text-ellipsis text-sm font-normal">
										{category['name']}
									</span>
								</a>
							))}
						</Slider>
					</section>
				)}
			</div>
		</>
	)
}
