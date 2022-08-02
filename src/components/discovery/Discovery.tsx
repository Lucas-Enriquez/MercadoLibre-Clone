export const Discovery = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen h-[340px] flex flex-col'>
				<h2 className="text-left text-2xl font-light text-brown-meli mb-6">Descubrí</h2>
				<div className="flex justify-between gap-5">
					<div className='flex gap-1 discovery w-full'>
						<div className='bg-white h-64 w-full rounded-md shadow-sm flex justify-between items-center hover:shadow-xl transition-shadow ease-in'>
							<div className='text-container flex flex-col pl-7 text-left discovery-info'>
								<span className='uppercase text-xs font-semibold'>oportunidades moda</span>
								<span className='uppercase text-2xl font-semibold'>hasta 40% off</span>
								<span className='uppercase text-2xl font-semibold'>y 6x sin interés</span>
								<button className='bg-blue-500 hover:bg-blue-600 transition-colors ease-in text-white w-1/2 p-2 mt-2 rounded-sm font-semibold text-sm'>Ver más</button>
							</div>
							<div className='img-container'>
								<img src='https://http2.mlstatic.com/D_NQ_771174-MLA50740784727_072022-C.webp' width="280px"/>
							</div>
						</div>

					</div>
					<div className='flex gap-1 discovery w-full'>
						<div className='bg-white h-64 w-full rounded-md shadow-sm flex justify-between items-center hover:shadow-xl transition-shadow ease-in'>
							<div className='text-container flex flex-col pl-7 text-left discovery info'>
								<span className='uppercase text-xs font-semibold'>cambiá la compu</span>
								<span className='uppercase text-2xl font-semibold'>hasta 25% off</span>
								<span className='uppercase text-2xl font-semibold'>y 12x sin interés</span>
								<button className='bg-blue-500 hover:bg-blue-600 transition-colors ease-in text-white w-1/2 p-2 mt-2 rounded-sm font-semibold text-sm'>Ver más</button>
							</div>
							<div className='img-container'>
								<img src='https://http2.mlstatic.com/D_NQ_649199-MLA50741289117_072022-C.webp' width="280px"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
