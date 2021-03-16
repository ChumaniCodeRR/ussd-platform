import {
    GET_CODE_SUCCESS,
    GET_CODE_FAILURE,
    ADD_CODE_SUCCESS,
    ADD_CODE_FAILURE,
    EDIT_CODE_SUCCESS,
    EDIT_CODE_FAILURE,
    DELETE_CODE_SUCCESS,
    DELETE_CODE_FAILURE,
  } from "./type";
  import UssdService from '../services/ussdService';

  export const getAllCode = () => (dispatch) => {
      return UssdService.getAllCodes().then((data) =>{
        dispatch({
            type:GET_CODE_SUCCESS,
            payload:data,
        })
      },(error) => {
          dispatch({
              type:GET_CODE_FAILURE,
              error
          })
      })
  }

  export const createNewCode = (data) => (dispatch) => {
      return UssdService.createNewCode(data).then((data) => {
          dispatch({
              type:ADD_CODE_SUCCESS,
              payload:data
          })
      },(error) => {
          dispatch({
              type:ADD_CODE_FAILURE,
              error
          })
      })
  }

  export const editCode = (id, data) => (dispatch) => {
    return UssdService.editCode(id, data).then(
      (data) => {
        dispatch({
          type: EDIT_CODE_SUCCESS,
          payload: data,
        });
      },
      (error) => {
        dispatch({
          type: EDIT_CODE_FAILURE,
          error,
        });
      }
    );
  };

  export const deleteCode = (id) => (dispatch) => {
    return UssdService.deleteCode(id).then(
      (data) => {
        dispatch({
          type: DELETE_CODE_SUCCESS,
          payload: dat,
        });
      },
      (error) => {
        dispatch({
          type: DELETE_CODE_FAILURE,
          error,
        });
      }
    );
  };