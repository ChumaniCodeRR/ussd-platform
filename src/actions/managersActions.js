import {
    GET_MANAGER_SUCCESS,
    GET_MANAGER_FAILURE,
    ADD_MANAGER_SUCCESS,
    ADD_MANAGER_FAILURE,
    EDIT_MANAGER_SUCCESS,
    EDIT_MANAGER_FAILURE,
    DELETE_MANAGER_SUCCESS,
    DELETE_MANAGER_FAILURE,
    FETCH_BY_ID,
  } from "./type";
import ManagerService from '../services/managerService';

export const getAllManagers = () => (dispatch) => {
    return ManagerService.getAllManager().then((data) => {
        dispatch({
            type:GET_MANAGER_SUCCESS,
            payload:data,
        })
    },(error) => {
        dispatch({
            type:GET_MANAGER_FAILURE,
            error
        })
    })
}

export const createManager = (data) => (dispatch) => {
    return ManagerService.createNewManager(data).then((data) => {
        dispatch({
            type:ADD_MANAGER_SUCCESS,
            payload:data,
        })
    },(error) => {
        dispatch({
            type:ADD_MANAGER_FAILURE,
            error
        })
    })
}

export const deleteManager = (id) => (dispatch) => {
    return ManagerService.deleteManager(id).then((data) => {
        dispatch({
            type:DELETE_MANAGER_SUCCESS,
            payload:data,
        })
    },(error) => {
        dispatch({
            type:DELETE_MANAGER_FAILURE,
            error
        })
    })
}

export const editManager = (id,data) => (dispatch) => {
    return ManagerService.editManager(id,data).then((data) => {
        dispatch({
            type:EDIT_MANAGER_SUCCESS,
            payload:data
        })
    },(error) => {
        dispatch({
            type:EDIT_MANAGER_FAILURE,
            error
        })
    })
}

export const getManagerById = (id) => () => {
    return ManagerService.getManagerById(id)
}