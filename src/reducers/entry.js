import {
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from "../actions/type";

const initialState = {
   entries : [], 
};

export default function entries(state = initialState, action){
    const { type, payload } = action;

    switch (type){
        case GET_ENTRIES_SUCCESS:
            return {
              ...state,
              entries: payload,
              success: true,
            };
          case GET_ENTRIES_FAILURE: 
            return {
              success: false,
            }; 
            default:
      return state;
    }
} 