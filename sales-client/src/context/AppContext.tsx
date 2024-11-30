import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { Client, DropdownItem, Product, ProductDetail } from "../Interface/AppIn";
import { clientsAllRequest, createClientRequest, deleteClientRequest, updateClientRequest } from "../Service/Client.service";
import { categoriesAllRequest, createProductRequest, deleteProductRequest, productAllRequest, updateProductRequest } from "../Service/Product.service";
import { createProductDetailRequest, createSaleRequest, updateSaleRequest } from "../Service/Transaction.Service";



const appContext = createContext({})

export const useAppContext = () => {
    const context = useContext(appContext)
    if(!context){
        throw new Error("Context invalid")
    }
    return context
}

interface ContexArg{
    children: ReactNode
}

function AppContextProvider({children}: ContexArg){

    const [clients, setClients] = useState<Client[]>([])
    const [isCliModal, setCliModal] = useState(false);
    const [categoriesItem, setCategoriesItem] = useState<DropdownItem[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [isProModify, setProModify] = useState(false)
    const [proUpdate, setProUpdate] = useState<Product>()
    const [isDelCliModal, setDelCliModal] = useState<boolean>(false);
    const [isCliModify, setIsCliModify] = useState(false)
    const [cliModify, setCliModify] = useState<Client>()
    const [title, setTitle] = useState<String>("")
    const [isShowModal, setShowModal] = useState(false)
    const [isShowConfirmModal, setShowConfirmModal] = useState(false)
    const [total, setTotal]= useState(0)
    const [productDetail, setProductDetail] = useState<ProductDetail[]>([])

    function showCliModal(val: boolean){
        setCliModal(val)
    }

    async function clientList(){
        try {
            const res = await clientsAllRequest()
            setClients(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    async function createClient(cli: Client){
        try {
            await createClientRequest(cli);
            clientList()
            showCliModal(false)
        } catch (error) {
            console.log(error)
        }
    }
    async function deleteClient(id: number){
        try {
            await deleteClientRequest(id)
            console.log("cliente eliminado")
            clientList()
        } catch (error) {
            console.log(error)
        }
    }
    async function udpateClient(id: number, cli: Client){
        try {
            await updateClientRequest(cli, id)
            showCliModal(false)
            setIsCliModify(false)
            clientList()
        } catch (error) {
            console.log(error)
        }
    }

    async function productsList(){
        try {
            const resp = await productAllRequest()
            console.log(resp.data)
            setProducts(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    async function getCategory(){
        try {
            const response = await categoriesAllRequest()
            let c = [];
            for (const cate of response.data) {
               c.push({name: cate.description, code: cate.id}) 
            }
            setCategoriesItem(c)
        } catch (error) {
            console.log(error)  
        }
    }
    async function createProduct(pro: Product){
        try {
            await createProductRequest(pro)
            productsList()
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }
    async function deleteProduct(id:number){
        try {
            await deleteProductRequest(id)
            productsList()
            setShowModal(false)
            setProModify(false)
        } catch (error) {
            console.log(error)
        }
    }
    async function updateProduct(pro: Product){
        try {
            await updateProductRequest(pro, pro.id as number)
            productsList()
            setShowModal(false)
            setProModify(false)
        } catch (error) {
            console.log(error)
        }
    }
    //transaction
    function sumTotal(){
        const newTotal = productDetail.reduce((con, el) => con + el.subtotal, 0)
        setTotal(newTotal)
      }
      function totalZero(){
        setTotal(0)
      }
    function addDetailProductToList( id: number){
        setProductDetail((prevProducts) => {
          return prevProducts.map((product) => {
            return product.id === id
              ? { ...product, subtotal: product.price* product.amount }
              : product;
          });
        });
    }
    function addProductAmout(id: number){
        setProductDetail((detailPro) => {
          return detailPro.map((pro) => {
            return pro.id == id? { ...pro, amount: pro.amount + 1 } : pro
          })
        })
      }
    function changeProductAmount(id: number, amountCurrent: number){

        if(!amountCurrent) return
  
        setProductDetail((detailPro) => {
          return detailPro.map((pro) => {
            return pro.id == id? { ...pro, amount: amountCurrent, subtotal: pro.price * amountCurrent } : pro
          })
        })
        sumTotal()
      }
    
    function handleAddProduct(pro: ProductDetail){
        if(productDetail.some((data) => data.id == pro.id)){
            addProductAmout(pro.id as number);
          } else {
            setProductDetail([...productDetail, pro])
          }
          addDetailProductToList(pro.id as number);
          console.log(productDetail)
    }
    async function deleteProductDetail(id: number){
        const newPd= productDetail.filter(data => data.id != id)
        setProductDetail(newPd)
    }

    async function createSale(){
        if(productDetail.length == 0) return
        try {
            const sale = await createSaleRequest({
                total: 0
            })
            for(const pro of productDetail){
                await createProductDetailRequest({
                    ProductAmount: pro.amount,
                    subtotal: pro.subtotal,
                    product: {id: pro.id}
                })
            }
            await updateSaleRequest({total: total, client:{id: 1} }, sale.data.id)
            setProductDetail([])
            totalZero()
            alert("transaccion lista")
            return true
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        sumTotal()
    }, [productDetail])
    useEffect(() => {
        clientList()
        productsList()

    }, [])

    return(
        <appContext.Provider value={{
            clientList,showCliModal,clients,createClient,isCliModal, deleteClient, isDelCliModal, setDelCliModal,  udpateClient ,isCliModify, setIsCliModify, cliModify, setCliModify,
            title, setTitle,
            products, productsList, categoriesItem, getCategory, createProduct, deleteProduct, updateProduct, isProModify, setProModify, proUpdate, setProUpdate, productDetail,
            isShowModal, setShowModal, isShowConfirmModal, setShowConfirmModal,
            changeProductAmount, handleAddProduct, deleteProductDetail,total, createSale
        }}>
            {children}
        </appContext.Provider>
    )

}
export default AppContextProvider