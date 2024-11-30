
import { useEffect } from "react"
import ProductDetailTable from "../../components/tables/ProductDetailTable"
import ProductsSelTable from "../../components/tables/ProductsSelTable"
import "../../styles/Transaction.css"
import { useAppContext } from "../../../context/AppContext"
import { AppContextIn } from "../../../Interface/AppIn"

function SalePage() {

  const {setTitle} = useAppContext() as AppContextIn
   
  useEffect(() => {
    setTitle("Transaccion de venta")
  }, [])

  return (
    <div className='main-con'>
        <div className="sale-con" >
          <ProductsSelTable/>
          <ProductDetailTable/>
        </div>
    </div>
  )
}

export default SalePage