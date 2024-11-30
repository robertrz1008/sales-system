import { Button } from "primereact/button"
// import { useAppContext } from "../../../context/AppContext"
// import { AppContextIn } from "../../../Interface/AppIn"
// import { useEffect } from "react"
import ProductTable from "../../components/tables/ProductTable"
import ProductForm from "../../components/forms/ProductForm"
import { useAppContext } from "../../../context/AppContext"
import { AppContextIn } from "../../../Interface/AppIn"
import FormModal from "../../components/Modals/FormModal"
import { useEffect } from "react"

function ProductPage() {
    const { setShowModal, getCategory, setTitle} = useAppContext() as AppContextIn 

    useEffect(() => {
        getCategory()
        setTitle("Productos")
    }, [])

  return (
    <div className='main-con'>
        <div 
          style={{marginTop:"20px", width:"95%"}}
        >
            <Button onClick={ () => {setShowModal(true)}}
              label="Registrar Producto" 
            />
        </div>
        <ProductTable/>
        <FormModal>
            <ProductForm/>
        </FormModal>
    </div>
  )
}

export default ProductPage