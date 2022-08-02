import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Picture } from '../../types'
import { BsStarFill } from 'react-icons/bs'
import { Attribute } from '../../types/attributeTypes'
import { MainFeatures } from './MainFeatures'
import { AlsoBought } from './AlsoBought'
import { QuestionsAndAnswers } from './QuestionsAndAnswers'

import ReactImageMagnify from 'react-image-magnify'

export const ProductDetails = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)
	const [selectedImage, setSelectedImage] = useState(selectedProduct.pictures[0])
	const [selectedImageSize, setSelectedImageSize] = useState(selectedProduct.pictures[0].size)
	const productCondition = selectedProduct.attributes.find((attr: {id:string}) => attr.id === 'ITEM_CONDITION').value_name

	// Obtiene la imágen con mayor resolución
	const regex = /-O/i
	const [selectedImageFull, setSelectedImageFull] = useState(selectedImage.url.replace(regex, '-F'))

	const handleMouseEnter = (id: string) => {
		const idPicture = selectedProduct.pictures.find((picture: {id: string}) => picture.id === id)
		setSelectedImage(idPicture)
	}

	useEffect(() => {
		setSelectedImageSize(selectedImage.size.split('x'))
		setSelectedImageFull(selectedImage.url.replace(regex, '-F'))
	}, [selectedImage])

	const imageProps = {
		smallImage: {
			alt: 'Phasellus laoreet',
			isFluidWidth: true,
			src: selectedImage.secure_url
		},
		largeImage: {
			src: selectedImageFull,
			width: Math.ceil(selectedImageSize[0]) * 2,
			height: Math.ceil(selectedImageSize[1]) * 2
		},
		hoverDelayInMs: 0,
		fadeDurationInMs: 0,
		enlargedImageContainerStyle: { background: '#fff', zIndex: 9, bottom: '5%', display: 'flex', justifyContent: 'center', overflow: 'hidden' },
		enlargedImageContainerClassName: 'm-auto w-full',
		enlargedImageClassName: 'object-contain w-full',
		enlargedImageContainerDimensions: { width: 700, height: 560 },
		lensStyle: { background: '#0000006b', cursor: 'zoom-in' },
		shouldUsePositiveSpaceLens: true,
		imageStyle: { width: '100%', height: '100%' }
	}

	return (
		<>
			<div className='flex flex-col'>
				<div className='flex flex-col h-[755px]'>
					<div className='flex'>
						<div className='gallery flex'>
							<div className='img-container flex flex-col gap-4'>
								{selectedProduct.pictures.slice(0, 7).map((picture:Picture) => (
									<div onMouseEnter={() => handleMouseEnter(picture.id)} key={picture.id} className={picture.secure_url !== selectedImage.secure_url ? 'w-11 h-11 outline outline-1 outline-gray-300 rounded-sm' : 'w-11 h-11 outline outline-2 outline-blue-400 rounded-sm'}>
										<img src={picture.url} className="object-contain w-full h-full" />
									</div>
								))}
							</div>

							<div className="w-[410px] max-h-[500px]">
								<figure className='flex text-center justify-center pl-5 mt-6 h-full items-center'>
									<ReactImageMagnify {...imageProps} className="mr-5 h-full"/>
								</figure>
							</div>
						</div>

						<div className='title w-[341px] flex flex-col gap-4'>
							<div className='condition-rating'>
								<span className='text-gray-400 text-sm'>{productCondition} | {selectedProduct.sold_quantity} vendidos</span>
							</div>
							<h1 className="text-xl font-bold">{selectedProduct.title}</h1>
							<div className='rating-stars flex gap-1 text-sm'>
								<BsStarFill color='#3483fa'/> <BsStarFill color='#3483fa'/> <BsStarFill color='#3483fa'/> <BsStarFill color='#3483fa'/> <BsStarFill color='#3483fa'/> <span className='text-xs'>(244)</span>
							</div>
							<div className='prices flex flex-col'>
								<span className='price text-3xl'>$ {selectedProduct.price.toLocaleString('es-AR')}</span>
								<h1 className="text-sm font-medium">En 12x $ {Number((selectedProduct.price * 1.7 / 12).toFixed(2)).toLocaleString('es-AR')}</h1>
								<span className='text-blue-500 cursor-pointer text-sm mt-1'>Ver los medios de pago</span>
							</div>
							<div className='must-know'>
								<h2 className='font-bold text-sm'>Lo que tenés que saber de este producto</h2>
								<ul className='list-disc flex flex-col gap-2 text-sm mt-3 ml-5 w-64'>
									{selectedProduct.attributes.slice(0, 8).map((attribute: Attribute) => (
										<li key={attribute.id}>{attribute.name}: {attribute.value_name}</li>
									))}
								</ul>
							</div>
							<a className='text-blue-500 cursor-pointer text-xs font-medium'>Ver características</a>
						</div>
					</div>
				</div>
				<hr />
				{/* Quienes vieron este producto también compraron */}
				<AlsoBought />
				{/* Características principales */}
				<MainFeatures />
				{/* Preguntas y respuestas */}
				<QuestionsAndAnswers />
			</div>

		</>
	)
}
