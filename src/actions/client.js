import {
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    ADD_CLIENTS_SUCCESS,
    ADD_CLIENTS_FAILURE,
    EDIT_CLIENTS_SUCCESS,
    EDIT_CLIENTS_FAILURE,
    DELETE_CLIENTS_SUCCESS,
    DELETE_CLIENTS_FAILURE,
  } from "./type";
  import ClientService from "../services/clientService";

  export const getAllClients = () => (dispatch) => {
    return ClientService.returnAllclients().then(
      (data) => {
        dispatch({
          type: GET_CLIENTS_SUCCESS,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: GET_CLIENTS_FAILURE,
          error,
        });
      }
    );
  };

  export const createNewClient = (data) => (dispatch) => {
    return ClientService.addNewClient(data).then(
      (data) => {
        dispatch({
          type: ADD_CLIENTS_SUCCESS,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: ADD_CLIENTS_FAILURE,
          error,
        });
      }
    );
  };

  export const editClient = (id, data) => (dispatch) => {
    return ClientService.updateClient(id, data).then(
      (data) => {
        dispatch({
          type: EDIT_CLIENTS_SUCCESS,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: EDIT_CLIENTS_FAILURE,
          error,
        });
      }
    );
  };

  export const deleteClient = (id) => (dispatch) => {
    return ClientService.removeClient(id).then(
      (data) => {
        dispatch({
          type: DELETE_CLIENTS_SUCCESS,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: DELETE_CLIENTS_FAILURE,
          error,
        });
      }
    );
  };

  export const getClientById = (id) => () => {
    return ClientService.returnClientsById(id);
  };