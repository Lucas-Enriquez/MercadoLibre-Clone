import rex from '../assets/stores_backgrounds/background_rex.jpg'
import randers from '../assets/stores_backgrounds/background_randers.jpg'
import lg from '../assets/stores_backgrounds/background_lg.jpg'
import atma from '../assets/stores_backgrounds/background_atma.jpg'

interface Stores {
    name: string,
    logo: string,
    background: string,
    products: string[]
}

export const stores:Stores[] = [
	{
		name: 'REX',
		logo: 'https://http2.mlstatic.com/D_Q_NP_777904-MLA32660949268_102019-AE.webp',
		background: rex,
		products: ['https://http2.mlstatic.com/D_Q_NP_847073-MLA49507818730_032022-R.webp', 'https://http2.mlstatic.com/D_Q_NP_793698-MLA47571218141_092021-R.webp', 'https://http2.mlstatic.com/D_Q_NP_846079-MLA48256621674_112021-R.webp']
	},
	{
		name: 'Randers',
		logo: 'https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp',
		background: randers,
		products: ['https://http2.mlstatic.com/D_Q_NP_873468-MLA44209606533_112020-R.webp%201x,%20https://http2.mlstatic.com/D_Q_NP_2X_873468-MLA44209606533_112020-R.webp%202x', 'https://http2.mlstatic.com/D_Q_NP_889272-MLA31116344263_062019-R.webp', 'https://http2.mlstatic.com/D_Q_NP_737736-MLA44123893472_112020-R.webp']
	},
	{
		name: 'LG',
		logo: 'https://http2.mlstatic.com/D_Q_NP_975065-MLA25817097055_072017-AE.webp',
		background: lg,
		products: ['https://http2.mlstatic.com/D_Q_NP_610772-MLA31457076522_072019-R.webp', 'https://http2.mlstatic.com/D_Q_NP_860745-MLA46271512341_062021-R.webp', 'https://http2.mlstatic.com/D_Q_NP_831738-MLA47977503868_102021-R.webp']
	},
	{
		name: 'ATMA',
		logo: 'https://http2.mlstatic.com/D_Q_NP_638962-MLA25716465289_062017-AE.webp',
		background: atma,
		products: ['https://http2.mlstatic.com/D_Q_NP_853626-MLA47660036156_092021-R.webp', 'https://http2.mlstatic.com/D_Q_NP_739669-MLA47395860117_092021-R.webp', 'https://http2.mlstatic.com/D_Q_NP_662837-MLA43210489181_082020-R.webp']
	}
]
