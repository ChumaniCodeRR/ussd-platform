import axios from "axios";
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


const getNetworkEntries = (id) => {
    const token = getToken();
    return axios.get(API_URL + `entries/network/${id}?api_token=${token}`).then((response) =>{
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

export default {
    getNetworkEntries
}