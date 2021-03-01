import {
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAILURE,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILURE,
  EDIT_ADMIN_SUCCESS,
  EDIT_ADMIN_FAILURE,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  FETCH_BY_ID,
} from "../actions/type";

const initialState = {
  admins: [],
  adminToEdit: [],
};

export default function admins(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADMIN_SUCCESS:
      return {
        ...state,
        admins: payload,
        success: true,
      };
    case GET_ADMIN_FAILURE:
      return {
        success: false,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        admins: [...state.admins, payload],
        success: true,
      };
    case ADD_ADMIN_FAILURE:
      return {
        success: false,
      };

    case DELETE_ADMIN_SUCCESS:
      return {
        admins: [...state.admins.filter((admin) => admin !== payload)],
        success: true,
      };
    case DELETE_ADMIN_FAILURE:
      return {
        success: false,
      };
    case EDIT_ADMIN_SUCCESS:
      return {
        ...state,
        admins: state.admins.map((index) =>
          index === payload.id ? payload : admins
        ),
      };
    case EDIT_ADMIN_FAILURE:
      return {
        success: false,
      };
    default:
      return state;
  }
}
