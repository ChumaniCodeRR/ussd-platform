import axios from "axios";
import { getToken } from "../helpers/utils";

const API_URL = process.env.REACT_APP_API_URL;

const countEntriesById = (id) => {
  const token = getToken();
  return axios
    .get(API_URL + `entries/count/${id}?api_token=${token}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export default{
    countEntriesById
};