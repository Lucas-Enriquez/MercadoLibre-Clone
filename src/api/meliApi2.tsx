import axios from 'axios'
const site = 'MLA'

const meliApi = axios.create({
	baseURL: `https://api.mercadolibre.com/sites/${site}`
})

// Petición get
export const get = async (url:string) => {
	const { data } = await meliApi.get(url)
	return data
}
