// import { Link } from 'react-router-dom'

// type Products = {
//   products: []
// }

// export const ProductCard = () => {
// 	return (
// 		<div className='w-5/6 sm:3/6 xl:w-4/6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense justify-items-center py-5 w-4/4 m-auto'>
// 			{products.map(product => (
// 				<div key={product.id} className='overflow-hidden relative container w-5/6 md:w-6/6  lg:w-6/6 lg:h-full flex flex-col justify-between items-center h-35 bg-white hover:shadow-xl transition-shadow ease-in rounded-md cursor-pointer shadow-md'>
// 					<div className='w-full flex justify-center items-center h-full max-h-56'>
// 						<img
// 							src={product.thumbnail}
// 							alt={product.title} className='object-cover lg:w-full h-full  w-6/6'
// 						/>
// 					</div>
// 					<div className='product-desc w-full justify-self-end'>
// 						<hr />
// 						<div className='product-price-title px-3 h-20 flex flex-col justify-center'>
// 							<span className='text-gray-500 text-xl font-semibold'>${product.price}</span>
// 							<h2 className='text-gray-500 text-sm truncate'>{product.title}</h2>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	)
// }
