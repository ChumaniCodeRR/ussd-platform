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
  } from "../actions/type";
  
  const initialState = {
    managers: [],
    managerToEdit: [],
  };
  
  export default function managers(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MANAGER_SUCCESS:
        return {
          ...state,
          managers: payload,
          success: true,
        };
      case GET_MANAGER_FAILURE:
        return {
          success: false,
        };
      case ADD_MANAGER_SUCCESS:
        return {
          ...state,
          managers: [...state.managers, payload],
          success: true,
        };
      case ADD_MANAGER_FAILURE:
        return {
          success: false,
        };
  
      case DELETE_MANAGER_SUCCESS:
        return {
          managers: [...state.managers.filter((manager) => manager !== payload)],
          success: true,
        };
      case DELETE_MANAGER_FAILURE:
        return {
          success: false,
        };
      case EDIT_MANAGER_SUCCESS:
        return {
          ...state,
          managers: state.managers.map((index) =>
            index === payload.id ? payload : managers
          ),
        };
      case EDIT_MANAGER_FAILURE:
        return {
          success: false,
        };
      default:
        return state;
    }
  }
  