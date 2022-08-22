import axios from 'axios';
 
export const setAuthToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
       delete axios.defaults.headers.common["Authorization"];
}
