import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from "../actions/type";

const initialState = {
  profile: [],
};

export default function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
        success: true,
      };
    case GET_PROFILE_FAIL:
      return {
        success: false,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.profile,
        success: true,
      };
    case EDIT_PROFILE_FAIL:
      return {
        success: false,
      };
    default:
      return state;
  }
}
