import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './views/Search'
import { Product } from './views/Product'

import Modal from 'react-modal'
import { Cart } from './views/Cart'
import { useEffect } from 'react'
import { useAppSelector } from './hooks/reduxHooks'
import { Checkout } from './views/Checkout'

Modal.setAppElement('#root')

function App () {
	const { products } = useAppSelector<any>(state => state.cart)

	useEffect(() => {
		if (products.length !== 0) {
			localStorage.setItem('cart', JSON.stringify(products))
		}
	}, [products])

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/search/:product' element={<Search />}/>
				<Route path='/:product' element={<Product />}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/checkout/cart' element={<Checkout />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
