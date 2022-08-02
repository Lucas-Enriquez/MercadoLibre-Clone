export const PaymentMethods = () => {
	return (
		<div className="w-80  border rounded-md px-4 py-6 font-open-sans flex flex-col gap-5">
			<h2>Medios de pago</h2>
			<div className='flex flex-col gap-5'>
				{/* Mercado Credito */}
				<div className='flex gap-2'>
					<div className='flex flex-col gap-2'>
						<p>Hasta 12 cuotas sin tarjeta </p>
						<img width="73" src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"/>

					</div>
				</div>

				{/* Tarjetas de crédito */}
				<div className='flex flex-col gap-2'>
					<p>Tarjetas de crédito</p>
					<div className="img-container flex gap-2">
						<img width="42" className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"/>
						<img width="32" className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"/>
						<img width="42" className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"/>
						<img width="42" className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"/>
					</div>

				</div>

				{/* Tarjetas de débito */}
				<div className='flex flex-col gap-2'>
					<p>Tarjetas de débito</p>
					<div className="img-container flex gap-5">
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"/>
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"/>
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"/>
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"/>
					</div>

				</div>

				{/* Efectivo */}
				<div className='flex flex-col gap-2'>
					<p>Efectivo</p>
					<div className="img-container flex gap-5">
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"/>
						<img className="object-contain" src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"/>
					</div>
				</div>
				<a className='text-blue-500 font-medium cursor-pointer text-[13px]'>Conocé otros medios de pago</a>
			</div>
		</div>
	)
}
