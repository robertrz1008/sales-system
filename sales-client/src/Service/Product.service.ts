import axios from "./axios";
import {HTTP } from "../utils/config"
import { Product } from "../Interface/AppIn";

const httpAuth = HTTP+"/product"

export const categoriesAllRequest = () => axios.get(HTTP+"/category/list")
export const productAllRequest = () => axios.get(httpAuth+"/list")
export const createProductRequest = (pro: Product) => axios.post(httpAuth+"/create", pro)
export const deleteProductRequest = (id:number) => axios.delete(httpAuth+`/delete/${id}`)
export const updateProductRequest = (pro: Product, id: number) => axios.put(httpAuth+`/update/${id}`, pro)