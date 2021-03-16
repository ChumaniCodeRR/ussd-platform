import { GET_NETWORK_SUCCESS, GET_NETWORK_FAILURE } from "../actions/type";

const initialState = {
  networkEntries: [],
};

export default function networkEntry(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NETWORK_SUCCESS:
      return {
        ...state,
        networkEntries: payload,
        success: true,
      };
    case GET_NETWORK_FAILURE:
      return {
        success: false,
      };
    default:
      return state;
  }
}
