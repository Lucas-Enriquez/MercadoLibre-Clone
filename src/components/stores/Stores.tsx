import { stores } from '../../utils/stores'
import { Link } from 'react-router-dom'

export const Stores = () => {
	return (
		<section className='h-full mb-24 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen h-[340px] flex flex-col'>
				<h2 className="text-left text-2xl font-light text-brown-meli mb-6">Las mejores tiendas te esperan</h2>
				<div className="flex justify-between gap-5">
					<Link to="#" className='flex gap-4 discovery w-full'>
						{
							stores.map(store => (
								<div key={store.name} className='bg-white h-80 rounded-md shadow-sm flex flex-col items-center hover:shadow-xl transition-shadow ease-in'>
									<div className='h-24'>
										<img className='overflow-hidden w-full h-full object-cover' src={store.background}/>
									</div>
									<div className='logo-container relative w-20 m-auto'>
										<img className=' rounded-md shadow-xl mx-auto absolute -top-10 left-' src={store.logo}/>
									</div>
									<div className='w-full flex flex-col gap-5 items-center'>
										<div className='text-container flex flex-col text-center store-info mt-14'>
											<span className='uppercase text-2xl font-semibold'>{store.name}</span>
										</div>
										<div className='imgs-container flex gap-1'>
											{store.products.map(product => (
												<img className='border rounded-md' key={product} src={product}/>
											))}
										</div>
										<span className='text-sm text-gray-400 font-medium mb-5'>Ver tienda</span>
									</div>
								</div>
							))
						}
					</Link>
				</div>
			</div>
		</section>
	)
}
