import axios from "axios";
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


const getAllAdmin =() => {
    const token = getToken();
    return axios.get(API_URL + `admins?api_token=${token}`).then((response) =>{
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

const createNewAdmin = (data) => {
    const token = getToken();
    return axios.post(API_URL + `admin?api_token=${token}`,data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>{
        return err;
    })
}

const getAdminById = (id) => {
    const token = getToken();
    return axios.get(API_URL + `admin/${id}?api_token=${token}`).then((response) =>{
        
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}
const editAdmin = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `admin/${id}?api_token=${token}`,data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>{
        return err;
    })
}

const deleteAdmin = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `admin/${id}?api_token=${token}`).then((response) =>{
        return response.data.data;
    }).catch((err) =>{
        return err;
    })
}

export default {
    getAllAdmin,
    createNewAdmin,
    getAdminById,
    editAdmin,
    deleteAdmin

}