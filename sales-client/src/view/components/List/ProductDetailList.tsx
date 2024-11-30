// import { ProductDetail } from "../../../Interface/AppIn"
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from "../../../context/AppContext";
import { AppContextIn } from "../../../Interface/AppIn";


export default function ProductDetailList() {

   const {productDetail, deleteProductDetail} = useAppContext() as AppContextIn


    if(productDetail.length == 0){
        return (
          <div className="sale-form-list-con list-void">
              <h2>Vacio</h2>
          </div>
        )
      }else{
    
          return (
            <div className="sale-form-list-con">
              <table className="sale-table-con">
                <thead>
                    <tr>
                      <th>Producto</th>
                      {/* <th className="td-price">Precio</th> */}
                      <th>Cantidad</th>
                      <th className="td-price">SubTotal</th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                  {
                    productDetail.map((pro, id) => (
                      <tr key={id} className="sale-table-tr">
                        <td>{pro.description}</td>
                        <td>{pro.amount}</td>
                        <td className="td-price">{pro.subtotal}</td>
                        <td className="sale-icon-con">
                          <div 
                             onClick={() => deleteProductDetail(pro.id)}
                            className="icon-con"
                          >
                              <MdDeleteOutline/>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )
    
      }
}
