
import { useAppSelector } from '../../hooks/reduxHooks'
import { Attribute } from '../../types/attributeTypes'

export const MainFeatures = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.searchProducts)
	return (
		<>
			{/* Características principales */}
			<div className="overflow-x-auto relative mt-5 border-2 rounded-md mb-2">
				<table className="w-full text-sm text-left text-gray-500 ">
					<tbody>
						{selectedProduct.attributes.slice(8, 20).map((attr: Attribute) => (
							<tr key={attr.id} className="bg-white table-r">
								<th scope="row" className="py-4 px-6 font-medium text-gray-900 w-1/4">
									{attr.name}
								</th>
								<td className="py-4 px-6 table-td">
									{attr.value_name}
								</td>
							</tr>
						))}

					</tbody>
				</table>
			</div>
			<hr className='mt-12'/>
		</>
	)
}
