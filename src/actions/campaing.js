import {
  GET_CAMPAIGNS_SUCCESS,
  GET_CAMPAIGNS_FAILURE,
  ADD_CAMPAIGNS_SUCCESS,
  ADD_CAMPAIGNS_FAILURE,
  EDIT_CAMPAIGNS_SUCCESS,
  EDIT_CAMPAIGNS_FAILURE,
  DELETE_CAMPAIGNS_SUCCESS,
  DELETE_CAMPAIGNS_FAILURE,
} from "./type";
import CampaignService from "../services/campaignService";

export const getAllCampaings = () => (dispatch) => {
  return CampaignService.getAlluserCampaigns().then(
    (data) => {
      dispatch({
        type: GET_CAMPAIGNS_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: GET_CAMPAIGNS_FAILURE,
        error,
      });
    }
  );
};

export const createNewCampaign = (data) => (dispatch) => {
  return CampaignService.createNewCampaign(data).then(
    (data) => {
      dispatch({
        type: ADD_CAMPAIGNS_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: ADD_CAMPAIGNS_FAILURE,
        error,
      });
    }
  );
};

export const editCampaing = (id, data) => (dispatch) => {
  return CampaignService.editCampaign(id, data).then(
    (data) => {
      dispatch({
        type: EDIT_CAMPAIGNS_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: EDIT_CAMPAIGNS_FAILURE,
        error,
      });
    }
  );
};

export const deleteCampaing = (id) => (dispatch) => {
  return CampaignService.deleteCampaigns(id).then(
    (data) => {
      dispatch({
        type: DELETE_CAMPAIGNS_SUCCESS,
        payload: data,
      });
    },
    (error) => {
      dispatch({
        type: DELETE_CAMPAIGNS_FAILURE,
        error,
      });
    }
  );
};

export const getCampaignById = (id) => () => {
  return CampaignService.getCampaignsById(id);
};
