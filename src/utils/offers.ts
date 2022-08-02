interface Offer {
    id: number
    name: string
    previousPrice: number
    price: number
    discount: number
    freeShipping: boolean
    full: boolean
    img: string
		dues: boolean
}

export const offers: Offer[] = [
	{
		id: 1,
		name: 'Smart TV Samsung Series 7 UN50AU7000GCZB LED 4K 50" 220V - 240V',
		previousPrice: 122.488,
		price: 109.999,
		discount: 10,
		freeShipping: true,
		full: true,
		dues: true,
		img: 'https://http2.mlstatic.com/D_Q_NP_787221-MLA48007684849_102021-AB.webp'
	},
	{
		id: 2,
		name: 'Notebook Hp Amd Ryzen 3 3250u 14 8gb 128gb Ssd Windows 11s',
		previousPrice: 84.999,
		price: 77.899,
		discount: 8,
		freeShipping: true,
		full: false,
		dues: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_941869-MLA50253507400_062022-AB.webp'
	},
	{
		id: 3,
		name: 'Set Llaves Tubos Racing X79 Piezas Stmt82780-la Stanley',
		previousPrice: 38.869,
		price: 28.990,
		discount: 25,
		freeShipping: true,
		full: false,
		dues: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_747615-MLA50108720847_052022-AB.webp'
	},
	{
		id: 5,
		name: 'Kit Tensiometro Digital + Oximetro Dedo Y Termometro Digital',
		previousPrice: 6.441,
		price: 6.441,
		discount: 0,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_655844-MLA50331901962_062022-AB.webp'
	},
	{
		id: 6,
		name: 'Bicicleta Silverfox FM18SI29AM211  2021 M frenos de disco mecánico cambios 3 Velocidades y 7 Velocidades color negro  ',
		previousPrice: 64.999,
		price: 50.879,
		discount: 21,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_841347-MLA50161341970_062022-AB.webp'
	},
	{
		id: 7,
		name: 'Soldadora inverter Lüsqtoff Flux SML130-7 naranja y negra 50Hz 220V',
		previousPrice: 38.430,
		price: 30.744,
		discount: 8,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_653103-MLA45043898058_032021-AB.webp'
	},
	{
		id: 8,
		name: 'Smart TV Noblex DK32X5000 LED HD 32" 220V',
		previousPrice: 42.499,
		price: 42.499,
		discount: 0,
		freeShipping: true,
		dues: false,
		full: true,
		img: 'https://http2.mlstatic.com/D_Q_NP_974663-MLA47846000904_102021-AB.webp'
	},
	{
		id: 9,
		name: 'Suplemento en polvo TRB Pharma  Ultraflex colágeno sabor limón en pote de 300g pack x 3 u',
		previousPrice: 10.080,
		price: 8.890,
		discount: 11,
		freeShipping: true,
		dues: false,
		full: true,
		img: 'https://http2.mlstatic.com/D_Q_NP_989446-MLA50044362985_052022-AB.webp'
	},
	{
		id: 10,
		name: 'Juego Combo Sanitarios Roca Griferías Asiento Baño Completo',
		previousPrice: 66.838,
		price: 56.813,
		discount: 14,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_763791-MLA47444370158_092021-AB.webp'
	},
	{
		id: 11,
		name: 'Campera Inflable Negra Super Abrigada Con Capucha',
		previousPrice: 8.999,
		price: 7.525,
		discount: 16,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://http2.mlstatic.com/D_Q_NP_664776-MLA49302750254_032022-AB.webp'
	}
]
