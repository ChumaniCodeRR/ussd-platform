import axios from "axios";
import {getToken} from '../helpers/utils';

const API_URL = process.env.REACT_APP_API_URL;

const getUserDetials =() => {
    const token = getToken()
    return axios.get(API_URL + `user/me?api_token=${token}`).then((response) =>{

        return response.data.data;
    })
}

const updateUser = (data) => {
   const token = getToken()
   return axios.put(API_URL + `user/me?api_token=${token}`,data).then((response) => {
       return response.data.data;
   })
}
export default {
    getUserDetials,
    updateUser
}