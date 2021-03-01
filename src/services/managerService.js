import axios from "axios";
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


const getAllManager =() => {
    const token = getToken();
    return axios.get(API_URL + `managers?api_token=${token}`).then((response) =>{
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

const createNewManager = (data) => {
    const token = getToken();
    return axios.post(API_URL + `manager?api_token=${token}`,data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>{
        return err;
    })
}

const getManagerById = (id) => {
    const token = getToken();
    return axios.get(API_URL + `manager/${id}?api_token=${token}`).then((response) =>{
        
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}
const editManager = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `manager/${id}?api_token=${token}`,data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>{
        return err;
    })
}

const deleteManager = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `manager/${id}?api_token=${token}`).then((response) =>{
        return response.data.data;
    }).catch((err) =>{
        return err;
    })
}

export default {
    getAllManager,
    deleteManager,
    editManager,
    getManagerById,
    createNewManager,


}