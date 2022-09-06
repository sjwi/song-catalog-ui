import axios from "axios";
import { BASE_URL } from "./ClientConfig";

export const getSets = () => {
  return axios.get(BASE_URL + '/setlists')
    .then((response) => response.data )
}

export const getSet = (id) => {
  return axios.get(BASE_URL + `/setlists/${id}`)
    .then((response) => response.data )
}