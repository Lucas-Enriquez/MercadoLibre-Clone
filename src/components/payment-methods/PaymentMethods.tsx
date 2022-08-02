import { paymentMethodIcons } from '../../assets/icons/paymentMethodsIcons'

export const PaymentMethods = () => {
	return (
		<section className='h-[90px] mb-14 mt-7'>
			<div className='bg-white flex justify-between h-full max-w-homescreen m-auto rounded-md shadow-sm'>
				{/* Crédito */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.credito}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Tarjeta de Crédito</span>
						<span className='text-xs text-blue-500 hover:underline'>Ver promociones bancarias</span>
					</div>
				</div>
				{/* Débito */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.debito}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Tarjeta de Débito</span>
						<span className='text-xs text-blue-500 hover:underline'>Ver más</span>
					</div>
				</div>
				{/* Cuotas sin tarjeta */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.cuotas}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Cuotas sin tarjeta</span>
						<span className='text-xs text-blue-500 hover:underline'>Conocé Mercado Crédito</span>
					</div>
				</div>
				{/* Efectivo */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.efectivo}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Efectivo</span>
						<span className='text-xs text-blue-500 hover:underline'>Ver más</span>
					</div>
				</div>
				{/* Más */}
				<div className='h-full flex items-center p-5 gap-3 border-l'>
					<div>
						<img src={paymentMethodIcons.mas}/>
					</div>
					<div className='flex flex-col items-start'>
					</div>
				</div>
			</div>
		</section>
	)
}
