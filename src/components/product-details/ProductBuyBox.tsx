import { BsTruck } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { TbArrowBack } from 'react-icons/tb'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { useAppSelector } from '../../hooks/reduxHooks'
import { AiOutlineTrophy } from 'react-icons/ai'
import { IoMdRibbon } from 'react-icons/io'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../slices/cartSlice'

export const ProductBuyBox = () => {
	const { addToCart, clearAddedMessage } = useCart()
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)

	const handleAddToCart = (product: Product) => {
		addToCart(product)
		setTimeout(() => {
			clearAddedMessage()
		}, 3000)
	}

	return (
		<div className="w-80 h-[650px] border rounded-md px-4 py-6 font-open-sans flex flex-col gap-5">
			{
				selectedProduct.shipping.free_shipping
					?	<div className="text-green-500 flex gap-2">
        		<BsTruck size={'1.3em'} className="h-full"/>
						<span className='font-montserrat text-sm font-medium'>Envíos gratis a todo el país</span>
					</div>
					: <div className="text-gray-500 flex gap-2">
        		<BsTruck size={'1.3em'}/>
						<span className=' text-sm font-medium'>Envíos a todo el país</span>
					</div>
			}
			<div className='flex flex-col gap-3'>
				<span className='text-gray-500  text-[13px]'>Conocé los tiempos y las formas de envío.</span>
				<div className='flex text-blue-500  text-[13px]'>
					<GoLocation size={'1.3em'}/>
					<a>Calcular cuándo llega</a>
				</div>
				<div className="text-green-500 flex flex-col gap-2 ">
					<div className='flex gap-2'>
						<TbArrowBack size={'1.3em'} />
						<span className='font-montserrat text-sm font-medium'>Devolución gratis</span>
					</div>
					<span className='text-gray-500  text-[13px]'>Tenés 30 días desde que lo recibís.</span>
					<a className='text-blue-500  text-[13px]'>Conocer más</a>
				</div>
			</div>
			<div className='seller-info text-[14px] '>
				<span>MercadoLíder | {selectedProduct.sold_quantity} ventas</span>
				<small className='block text-gray-400 mt-1'>Hace factura A</small>
			</div>
			<div className='seller-info text-[14px] '>
				<span className='font-bold text-md'>Stock disponible</span>
			</div>
			<div className='seller-info text-[14px] '>
				<span className='font-normal text-md'>Cantidad: </span>
				<select className='font-bold text-md w-24'>
					<option value="1">1 unidad</option>
					<option value="2">2 unidades</option>
					<option value="3">3 unidades</option>
					<option value="4">4 unidades</option>
					<option value="5">5 unidades</option>
					<option value="6">6 unidades</option>
					<option value="6">Más de 6 unidades</option>
				</select>
				<span>{selectedProduct.available_quantity} Disponibles</span>
			</div>
			<div className='flex w-full flex-col  gap-2'>
				<button className='bg-blue-500 hover:bg-blue-600 transition-colors ease-in py-3 rounded-md text-white font-medium text-sm'>Comprar Ahora</button>
				<button onClick={() => handleAddToCart({ id: selectedProduct.id, title: selectedProduct.title, picture: selectedProduct.pictures[0].url, price: selectedProduct.price, updatedPrice: selectedProduct.price, quantity: 1 })} className='bg-blue-100 hover:bg-opacity-70 transition-colors ease-in py-3 rounded-md text-blue-500 font-medium text-sm'>Agregar al carrito</button>
			</div>

			<div className='details text-[14px] text-gray-400 flex flex-col justify-start gap-3'>
				<div className='flex'>
					<HiOutlineShieldCheck size={'2.2em'} className="mr-2 mt-1 h-fit"/>
					<div>
						<a className='text-blue-500 cursor-pointer'>Compra Protegida</a>
						<span>, recibí el producto que esperabas o te devolvemos tu dinero.</span>
					</div>
				</div>
				<div className='flex'>
					<AiOutlineTrophy size={'1.2em'} className="mr-2 mt-1 h-fit"/>
					<div>
						<a className='text-blue-500 cursor-pointer'>Mercado Puntos</a>
						<span>. Sumás 185 puntos.</span>
					</div>
				</div>
				<div className='flex'>
					<IoMdRibbon size={'1.3em'} className="mr-2 mt-1 h-fit"/>
					<div>
						<span>12 meses de garantía de fábrica.</span>
					</div>
				</div>
			</div>
		</div>
	)
}
