import ProductDetailList from "../List/ProductDetailList"
import { Button } from "primereact/button"
import { useAppContext } from "../../../context/AppContext"
import { AppContextIn } from "../../../Interface/AppIn"

function ProductDetailTable() {

    const {total, createSale} = useAppContext() as AppContextIn


    return(
        <div className="sale-form-con">
            {/* <div className='pd-title-con'>
                <h3>Detalle de productos</h3>
            </div> */}
  
            <ProductDetailList/>
            <div className="total-con">
              {
                !total? (<h3>{"TOTAL: 0"}</h3>) : (<h3>{"TOTAL: "+total}</h3>)
              }
            </div>
                
                <Button label="Procesar" onClick={() => createSale()}/>
        </div>
        
    )
}

export default ProductDetailTable