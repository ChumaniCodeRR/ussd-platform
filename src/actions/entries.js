import {
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from "./type";

import EntriesService from "../services/entriesService";

export const countEntriesById = (id) => (dispatch) => {
    return EntriesService.countEntriesById(id).then(
        (data) => {
          dispatch({
            type: GET_ENTRIES_SUCCESS,
            payload: data,
          });
        },
        (error) => {
          dispatch({
            type: GET_ENTRIES_FAILURE,
            error,
          });
        }
      );
  };

