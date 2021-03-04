import axios from "axios";
import { getToken } from "../helpers/utils";

const API_URL = process.env.REACT_APP_API_URL;

const returnAllclients = () => {
    const token = getToken();
    return axios
      .get(API_URL + `client?api_token=${token}`)
      .then((response) => {
        return response.data.data;
      });
  };

  const returnClientsById = (id) => {
    const token = getToken();
    return axios
      .get(API_URL + `client/${id}?api_token=${token}`)
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const updateClient = (id, data) => {
    const token = getToken();
    return axios
      .put(API_URL + `client/${id}?api_token=${token}`, data)
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => {
        return err;
      });
  };


  const removeClient = (id) => {
    const token = getToken();
    return axios
      .delete(API_URL + `client/${id}?api_token=${token}`)
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const addNewClient = (data) => {
    const token = getToken();
    return axios
      .post(API_URL + `client?api_token=${token}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };

  export default {
    returnAllclients,
    returnClientsById,
    updateClient,
    removeClient,
    addNewClient
  };
  