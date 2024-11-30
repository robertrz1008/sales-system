import { FormEvent, useEffect, useState } from "react"
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { useAppContext } from "../../../context/AppContext";
import { AppContextIn, DropdownItem, Product } from "../../../Interface/AppIn";
import { InputTextarea } from "primereact/inputtextarea";

function ProductForm() { 

    const { setShowModal, categoriesItem, createProduct, isProModify, proUpdate, updateProduct} = useAppContext() as AppContextIn

    const [description, setDescription] = useState("")
    const [selectedcategory, setSelCategory] = useState<DropdownItem>({name: "",code: ""})
    const [price, setPrice] = useState<number>(0)

    function isItemArray(){
        if(categoriesItem.length == 0) return false
        return true
    }

    function clean(){
        setDescription("")
        setPrice(0)
        setSelCategory({name: "", code: ""})
    }


    useEffect(() => {
        if(isProModify){
            setDescription(proUpdate.description)
            setPrice(proUpdate.price)
            setSelCategory({name: proUpdate.category.description, code: proUpdate.category.id+""})
        }else{
            clean()
        }
    }, [])

    function handleSubmit(e: FormEvent<HTMLElement>){
        e.preventDefault()
        const pro:Product={
            description: description,
            price: price,
            category: {
                id: (Number(selectedcategory.code as string)),
                description: ""
            }
        }
        if(isProModify){
            //sera el mismo id de categoria
            console.log("modificando producto")
            pro.category.id =  proUpdate.category.id
            pro.id = proUpdate.id
            updateProduct(pro, pro.id as number)
            return
        } 
        createProduct(pro)
        console.log(pro)
    }



  return (
    <form 
        className='register-form'
        onSubmit={handleSubmit}
    >
        <label htmlFor="">Precio</label>
        <InputNumber 
            variant="filled" 
            inputId="integeronly" 
            value={price} 
            onValueChange={(e: InputNumberValueChangeEvent) => setPrice(e.value as number)} 
        />
        <label htmlFor="">Categoria</label>
        <Dropdown 
            variant="filled" 
            value={selectedcategory} 
            onChange={(e: DropdownChangeEvent) => setSelCategory(e.value)} 
            options={isItemArray()? categoriesItem: []} 
            optionLabel="name" 
            placeholder="Seleccionar" 
            className="w-full md:w-14rem" 
            style={{width:"100%"}}
        />
        <label htmlFor="">Descripciòn</label>
        <InputTextarea 
            variant="filled" 
            value={description} 
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} 
            placeholder="Descripcion"
            rows={5} cols={20} 
        />

          <div style={{width:"100%", display:"flex", justifyContent:"end", marginTop:"10px"}}>
            <Button type='reset' onClick={() => setShowModal(false)} label="Calcel" text />
            <Button type='submit'  icon="pi pi-times" label="Save"></Button>
        </div>
    </form>
  )
}

export default ProductForm