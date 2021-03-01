import AdminService from '../services/adminService';
import { GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE, 
    ADD_ADMIN_SUCCESS,ADD_ADMIN_FAILURE,EDIT_ADMIN_SUCCESS,
    EDIT_ADMIN_FAILURE,DELETE_ADMIN_SUCCESS,DELETE_ADMIN_FAILURE,FETCH_BY_ID} from "./type";


export const getAllAdmins =() => (dispatch) => {
    return AdminService.getAllAdmin().then((data) => {
        dispatch({
            type:GET_ADMIN_SUCCESS,
            payload: data,
        })
    },(error) => {
        dispatch({
            type:GET_ADMIN_FAILURE,
            error
        })
    })
}

export const createAdmnin = (data) => (dispatch) => {
    return AdminService.createNewAdmin(data).then((data) => {
        dispatch({
             type:ADD_ADMIN_SUCCESS,
             payload: data,
        })
    },(error) => {
        dispatch({
            type: ADD_ADMIN_FAILURE,
            error
        })
    })
}


export const deleteAdmin  = (id) => (dispatch) => {
    return AdminService.deleteAdmin(id).then((data) => {
        dispatch({
            type :DELETE_ADMIN_SUCCESS,
            payload: data,
        })
    },(error) => {
        dispatch({
            type:DELETE_ADMIN_FAILURE,
            error
        })
    })
}


export const editAdmin = (id,data) => (dispatch) => {
    return AdminService.editAdmin(id,data).then((data) => {
        dispatch({
            type:EDIT_ADMIN_SUCCESS,
            payload: data,
        })
    },(error) => {
        dispatch({
            type:EDIT_ADMIN_FAILURE,
            error
        })
    })
}

export const getAdminById = (id) => () => {
    return AdminService.getAdminById(id)
}