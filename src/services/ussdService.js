import axios from "axios";
import {getToken} from '../helpers/utils';

const API_URL = process.env.REACT_APP_API_URL;

const getAllCodes = () =>{
    const token = getToken();

    return axios.get(API_URL+`?api_token=${token}`).then((response) =>{
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createNewCode = (data) => {
    const token = getToken();
    return axios.post(API_URL+`?api_token=${token}`,data)
    .then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const getCodeById = (id) => {
    const token = getToken();
    return axios.get(API_URL + `admin/${id}?api_token=${token}`).then((response) =>{
        
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

const editCode = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `admin/${id}?api_token=${token}`,data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>{
        return err;
    })
}

const deleteCode = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `admin/${id}?api_token=${token}`).then((response) =>{
        return response.data.data;
    }).catch((err) =>{
        return err;
    })
}

export default{
    getAllCodes,
    createNewCode,
    getCodeById,
    editCode,
    deleteCode
}