import {
  GET_CAMPAIGNS_SUCCESS,
  GET_CAMPAIGNS_FAILURE,
  ADD_CAMPAIGNS_SUCCESS,
  ADD_CAMPAIGNS_FAILURE,
  EDIT_CAMPAIGNS_SUCCESS,
  EDIT_CAMPAIGNS_FAILURE,
  DELETE_CAMPAIGNS_SUCCESS,
  DELETE_CAMPAIGNS_FAILURE,
} from "../actions/type";

const initialState = {
  campaigns: [],
};

export default function campaigns(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        campaigns: payload,
        success: true,
      };
    case GET_CAMPAIGNS_FAILURE:
      return {
        success: false,
      }; 
    case ADD_CAMPAIGNS_SUCCESS:
      return{
        ...state,
        campaigns:[...state.campaigns,payload]
      }
    case ADD_CAMPAIGNS_FAILURE:
      return{
        success: false,
      }
    case EDIT_CAMPAIGNS_SUCCESS:
      return{
        ...state,
        campaigns:state.campaigns.map((index) => index === payload.id ? payload:campaigns )
      }
    case EDIT_CAMPAIGNS_FAILURE:
      return {
        success: false,
      };
    case DELETE_CAMPAIGNS_SUCCESS:
      return{
        campaigns:[...state.campaigns.filter((data) => data !== payload)]
      }
    case DELETE_CAMPAIGNS_FAILURE:
      return{
        success: false,
      }
    default:
      return state;
  }
}
