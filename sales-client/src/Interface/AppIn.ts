export interface Client{
        id?: number,
        name: string,
        email: string,
        telephone: string,
        direction: string,
        dni: string
}

export interface Category{
        id: number,
        description: string,
}
export interface DropdownItem{
        name: string,
        code: string
}
export interface Product{
        id?: number,
        description: string,
        price: number,
        category: Category
}
export interface ProductDetail{
        id: number
        description: string
        price: number
        amount: number
        subtotal: number
}
export interface ProductDetailCreate{
        id?: number
        ProductAmount: number
        subtotal: number
        product: {id: number}
}

export interface AppContextIn{
        clientList: () => void
        clients: Client[]
        isCliModal: boolean,
        showCliModal:(val: boolean) => void
        createClient: (cli: Client) => void
        deleteClient:(id: number) => void
        isDelCliModal: boolean
        setDelCliModal: (val: boolean) => void
        udpateClient: (id: number, cli: Client) => void
        isCliModify: boolean
        setIsCliModify: (val: boolean) => void
        cliModify: Client
        setCliModify: (cli: Client) => void
        title: string
        setTitle: (t: string) => void
        isShowModal: boolean
        isShowConfirmModal: boolean,
        setShowConfirmModal: (val: boolean) => void
        setShowModal: (val: boolean) => void
        products: Product[]
        productsList: () => void
        categoriesItem: DropdownItem[],
        getCategory: () => void
        createProduct: (pro: Product) => void
        deleteProduct: (id: number) => void
        updateProduct: (pro: Product, id: number) => void,
        isProModify: boolean, 
        setProModify: (val: boolean) => void, 
        proUpdate: Product, 
        setProUpdate: (pro: Product) => void,
        changeProductAmount: (id: number, amountCurrent: number) => void
        deleteProductDetail: (id: number) => void
        handleAddProduct: (pro: ProductDetail) => void
        productDetail: ProductDetail[]
        total: number
        createSale: () => void
}