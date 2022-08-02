export const PromoDisney = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen bg-white h-[340px] shadow-sm'>
				<div className="h-[87px] bg-gradient-to-r from-pink-800 via-fuchsia-700 to-indigo-900 rounded-t-lg flex justify-between items-center text-white px-6 py-4">
					<div className="text-2xl font-semibold">Suscribite al nivel 6</div>
					<div className="flex flex-col text-right text-xs font-semibold relative price-separator">
						<span>Desde</span>
						<div className="">
							<span className="text-2xl">$ 399 </span>
							<span>/mes</span>
						</div>
						<span>Según tu nivel</span>
					</div>
				</div>
				<div className="text-left p-4">
					<span>Conseguí los mejores beneficios en Mercado Libre y Mercado Pago</span>
					<div className="flex justify-between mt-10">
						<div className="flex gap-4 items-center">
							<img className="border rounded-full" width={'72px'} src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"/>
							<span>Disney+ sin cargo</span>
						</div>
						<div className="flex gap-4 items-center">
							<img className="border rounded-full" width={'72px'} src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg"/>
							<span>Star+ sin cargo</span>
						</div>
						<div className="flex gap-4 items-center w-96">
							<img className="border rounded-full" width={'72px'} src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"/>
							<span>Envíos gratis y rápidos desde $ 4.000 y 45% OFF en envíos de menos de $ 4.000</span>
						</div>
					</div>
				</div>
				<hr />
				<div className="text-right pt-4 px-8">
					<button type="button" className="text-white bg-blue-500 hover:bg-blue-600 transition-colors ease-in font-medium rounded-md text-sm px-6 py-4">Suscribite</button>
				</div>
			</div>
		</section>
	)
}
