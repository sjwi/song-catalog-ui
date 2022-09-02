import axios from "axios";
import { BASE_URL } from "./ClientConfig";

export const getSongs = () => {
  return axios.get(BASE_URL + '/songs')
    .then((response) => response.data)
}
