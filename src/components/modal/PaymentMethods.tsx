import { IoCloseOutline } from 'react-icons/io5'
import { useUi } from '../../hooks/useUi'

export const PaymentMethods = () => {
	const { closeQuestionModal } = useUi()

	const creditCards = [
		'https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/33ea00e0-571a-11e8-8364-bff51f08d440-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/5cc05a00-d012-11ea-be41-3936b95cb468-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/d7e55980-f3be-11eb-8e0d-6f4af49bf82e-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/0fada860-571c-11e8-8364-bff51f08d440-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/26fbb110-571c-11e8-95d8-631c1a9a92a9-m.svg',
		'https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg'
	]

	const debitCards = ['https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg', 'https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg', 'https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg', 'https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg']

	return (
		<>
			<div className="flex justify-between px-16 py-8">
				<div className="flex flex-col gap-5">
					<span className="text-xl font-bold">Medios de pago para este producto</span>
					<span className="text-sm font-medium">Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.</span>
				</div>
				<button onClick={() => closeQuestionModal()} className="text-blue-500 h-full"><IoCloseOutline size="1.8em"/></button>
			</div>
			<div className='modal-separator'>
				<hr className='my-6'/>
			</div>

			<div className='modal-body px-16 pb-16'>

				<div className="flex justify-between flex-col gap-7">
					<div className="flex flex-col gap-1">
						<span className="text-xl font-bold">Tarjetas de crédito</span>
						<span className="text-sm font-normal">Acreditación instantánea.</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium text-green-500">Hasta 3 cuotas sin interés con estas tarjetas</span>
						<span className="text-sm font-normal">Con todos los bancos</span>
					</div>
					<div className='credit-cards-container gap-y-10 p-2 flex flex-wrap justify-start'>
						{
							creditCards.map(card => (
								<div key={card} className="w-32 flex flex-col justify-between">
									<div className='w-20'>
										<img src={card}/>
									</div>
									<span className='text-green-500 text-xs font-medium'>3 couotas</span>
								</div>
							))
						}
					</div>
					<a href="#" className='text-sm text-blue-500'>Ver condiciones</a>

				</div>

				<div className="flex justify-between flex-col gap-7 mt-10">
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium">O hasta 12 cuotas con interés</span>
					</div>
					<div className='credit-cards-container gap-y-10 p-2 flex flex-wrap justify-start'>
						{
							creditCards.map(card => (
								<div key={card} className="w-32 flex flex-col justify-between">
									<div className='w-20'>
										<img src={card}/>
									</div>
									<span className='text-green-500 text-xs font-medium'>3 couotas</span>
								</div>
							))
						}
					</div>
					<a href="#" className='text-sm text-blue-500'>Ver condiciones</a>

				</div>
				<div className='modal-separator'>
					<hr className='my-10'/>

					<div className="flex justify-between flex-col gap-7">
						<div className="flex flex-col gap-1">
							<span className="text-xl font-bold">Dinero en tu cuenta de Mercado Pago</span>
							<span className="text-sm font-normal">
                    Al finalizar tu compra, pagás con el dinero disponible en tu cuenta. Podés ingresar dinero a Mercado Pago con tu tarjeta de débito, en efectivo o por transferencia bancaria. Acreditación instantánea.
							</span>
						</div>

						<img width="73" src='https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg'/>
						<a href="#" className='text-sm text-blue-500'>Ver más</a>
					</div>

					<div className="flex justify-between flex-col gap-7 mt-10">
						<div className="flex flex-col gap-1">
							<span className="text-xl font-medium">Tarjetas de débito</span>
						</div>
						<div className='credit-cards-container gap-y-10 p-2 flex flex-wrap justify-start'>
							{
								debitCards.map(card => (
									<div key={card} className="w-32 flex flex-col justify-between">
										<div className='w-20'>
											<img src={card}/>
										</div>
									</div>
								))
							}
						</div>
						<a href="#" className='text-sm text-blue-500'>Ver condiciones</a>
					</div>

					<div className="flex justify-between flex-col gap-7 mt-10">
						<div className="flex flex-col gap-1">
							<span className="text-xl font-medium">Efectivo</span>
						</div>
						<div className='credit-cards-container gap-y-10 p-2 flex flex-wrap justify-start'>
							<div className="w-32 flex flex-col justify-between">
								<div className='w-20'>
									<img src='https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg'/>
									<span className='text-gray-500 text-xs'>Acreditación en 1 día hábil</span>
								</div>
							</div>
							<div className="w-32 flex flex-col justify-between">
								<div className='w-20'>
									<img src='https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg'/>
									<span className='text-gray-500 text-xs'>Acreditación instantánea</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
