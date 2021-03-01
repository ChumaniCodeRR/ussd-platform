import axios from "axios";
import { getToken } from "../helpers/utils";

const API_URL = process.env.REACT_APP_API_URL;

const getAlluserCampaigns = () => {
  const token = getToken();
  return axios
    .get(API_URL + `campaigns?api_token=${token}`)
    .then((response) => {
      return response.data.data;
    });
};

const getCampaignsById = (id) => {
  const token = getToken();
  return axios
    .get(API_URL + `campaign/${id}?api_token=${token}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err;
    });
};

const editCampaign = (id, data) => {
  const token = getToken();
  return axios
    .put(API_URL + `campaign/${id}?api_token=${token}`, data)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err;
    });
};

const deleteCampaigns = (id) => {
  const token = getToken();
  return axios
    .delete(API_URL + `campaign/${id}?api_token=${token}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err;
    });
};

const createNewCampaign = (data) => {
  const token = getToken();
  return axios
    .post(API_URL + `campaign?api_token=${token}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export default {
  getAlluserCampaigns,
  getCampaignsById,
  editCampaign,
  deleteCampaigns,
  createNewCampaign
};
