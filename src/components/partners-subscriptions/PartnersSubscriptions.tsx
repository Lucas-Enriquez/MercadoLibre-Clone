export const PartnersSubscriptions = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen h-[340px] flex flex-col'>
				<h2 className="text-left text-2xl font-light text-brown-meli mb-6">Beneficios de Mercado Puntos</h2>
				<div className="flex gap-4 h-64">
					{/* Disney/Star+ */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-disney"/>
						<img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget/disney-nivel6-mla-mco-mlm@2x.png"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							<img className="rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1"/>
							<div className="text-container w-full flex flex-col text-left">
								<span className="font-semibold text-xl">Conseguí acá los mejores beneficios</span>
								<span>Suscribiendote al nivel 6</span>
							</div>
						</div>
					</div>

					{/* HBO MAX */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-hbo"/>
						<img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/hbo/widget/hbo-max-mla-mlc-mco-v2@2x.jpg"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							<img className="rounded-md" width={'80px'} src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"/>
							<div className="text-container w-full flex flex-col text-left">
								<span>7 DÍAS GRATIS</span>
								<span className="font-semibold text-xl">Hasta 50% OFF</span>
								<span>HBO MAX</span>
							</div>
						</div>
					</div>

					{/* PARAMOUNT */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-paramount"/>
						<img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/widget/paramount-mla-mlc@2x.jpg"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							<img className="rounded-md" width={'80px'} src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"/>
							<div className="text-container w-full flex flex-col text-left">
								<span>7 DÍAS GRATIS</span>
								<span className="font-semibold text-xl">Hasta 50% OFF</span>
								<span>Paramount+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
