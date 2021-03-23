import axios from "axios";
import { getToken } from "../helpers/utils";
const API_URL = process.env.REACT_APP_API_URL;

const getAllBarCocdes = (id) => {
  const token = getToken();
  return axios
    .get(API_URL + `stats/barcode/${id}?api_token=${token}`)
    .then((response) => {
      return response.data.data;
    });
};

export default {
  getAllBarCocdes,
};
