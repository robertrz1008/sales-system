import { useAppContext } from "../../../context/AppContext"
import { AppContextIn } from "../../../Interface/AppIn"

function ProductsSelTable() {

    const {products, handleAddProduct} = useAppContext() as AppContextIn

    function isArray(){
        if(products.length > 0) return true
        return false
    }

  return (
    <div className="product-detail-con">
          <table>
                <thead className="register-thead">
                    <tr>
                        <th className="td-id">#</th>
                        <th>Desctipcion</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                {
                    !isArray? (<h1>No hay cliente</h1>): (
                        <tbody>
                            {
                                products.map((data, id) => (
                                    <tr 
                                        onClick={() => handleAddProduct({
                                            id: data.id as number,
                                            description: data.description,
                                            amount: 1,
                                            price: data.price,
                                            subtotal: 0
                                        })}
                                    className='td-icon'
                                        key={id}>
                                        <td className="td-id">{id + 1}</td>
                                        <td>{data.description }</td>
                                        <td>{data.category.description}</td>
                                        <td>{data.price}</td>
                                    </tr> 

                                ))
                            }
                        </tbody> 
                    )
                }
                
            </table>
    </div>
  )
}

export default ProductsSelTable