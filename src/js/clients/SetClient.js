import axios from "axios";
import { BASE_URL } from "./ClientConfig";

export const getSets = () => {
  return axios.get(BASE_URL + '/setlists')
    .then((response) => response.data )
}