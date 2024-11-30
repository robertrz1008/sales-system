import axios from "./axios";
import {HTTP } from "../utils/config"
import { Client } from "../Interface/AppIn";

const httpAuth = HTTP+"/client"

export const clientsAllRequest = () => axios.get(httpAuth+"/list")
export const createClientRequest = (cli: Client) => axios.post(httpAuth+"/create", cli)
export const deleteClientRequest = (id: number) => axios.delete(httpAuth+`/delete/${id}`)
export const updateClientRequest = (cli: Client, id: number) => axios.put(httpAuth+`/update/${id}`, cli)