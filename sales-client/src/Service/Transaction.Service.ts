import axios from "./axios";
import {HTTP } from "../utils/config"
import { ProductDetailCreate } from "../Interface/AppIn";

const httpAuth = HTTP+"/transaction"


export const createProductDetailRequest = (prod: ProductDetailCreate) => axios.post(httpAuth+"/proDetail", prod)

export const createSaleRequest = (sal:{total: number}) => axios.post(httpAuth+`/sale`, sal)

interface SaleCreate{
    total: number
    client: {
        id: number
    }
}
export const updateSaleRequest = (sal:SaleCreate, id: number) => axios.put(httpAuth+`/sale/${id}`, sal)

