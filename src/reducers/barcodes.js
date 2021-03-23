import {GET_BARCODES_SUCCESS,GET_BARCODES_FAILURE} from '../actions/type';

const initialState = {
  barcodes: [],
};

export default function barcodes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BARCODES_SUCCESS:
      return {
        ...state,
        barcodes: payload,
        success: true,
      };
    case GET_BARCODES_FAILURE:
      return {
        success: false,
      };
    default:
      return state;
  }
}
