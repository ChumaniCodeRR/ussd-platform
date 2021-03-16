import {
  GET_CODE_SUCCESS,
  GET_CODE_FAILURE,
  ADD_CODE_SUCCESS,
  ADD_CODE_FAILURE,
  EDIT_CODE_SUCCESS,
  EDIT_CODE_FAILURE,
  DELETE_CODE_SUCCESS,
  DELETE_CODE_FAILURE,
} from "../actions/type";

const initialState = {
  ussd: [],
};

export default function ussdCodes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CODE_SUCCESS:
      return {
        ...state,
        ussd: payload,
        success: true,
      };
    case GET_CODE_FAILURE:
      return {
        success: false,
      };
    case ADD_CODE_SUCCESS:
      return {
        ...state,
        ussd: [...state.ussd, payload],
        success: true,
      };
    case ADD_CODE_FAILURE:
      return {
        success: false,
      };
    case EDIT_CODE_SUCCESS:
      return {
        ...state,
        ussd: state.ussd.map((index,ussd) =>
          index === payload.id ? payload : ussd
        ),
      };
    case EDIT_CODE_FAILURE:
      return {
        success: false,
      };
    case DELETE_CODE_SUCCESS:
      return {
        ussd: [...state.ussd.filter((codes) => codes !== payload)],
        success: true,
      };
    case DELETE_CODE_FAILURE:
      return {
        success: false,
      };
    default:
      return state;
  }
}
