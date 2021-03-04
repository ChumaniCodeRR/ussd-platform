import {
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    ADD_CLIENTS_SUCCESS,
    ADD_CLIENTS_FAILURE,
    EDIT_CLIENTS_SUCCESS,
    EDIT_CLIENTS_FAILURE,
    DELETE_CLIENTS_SUCCESS,
    DELETE_CLIENTS_FAILURE,

} from "../actions/type";

const initialState = {
    clients: [
    {name:"chuiman",email:'chu2HGOMN'},
    {name:"chuiman",email:'chu2HGOMN'},
    {name:"chuiman",email:'chu2HGOMN'},
    {name:"chuiman",email:'chu2HGOMN'},
    {name:"chuiman",email:'chu2HGOMN'},
    {name:"chuiman",email:'chu2HGOMN'},]
  };

  export default function clients(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CLIENTS_SUCCESS:
          return {
            ...state,
            clients: payload,
            success: true,
          };
        case GET_CLIENTS_FAILURE:
          return {
            success: false,
          }; 
        case ADD_CLIENTS_SUCCESS:
          return{
            ...state,
            clients:[...state.clients,payload]
          }
        case ADD_CLIENTS_FAILURE:
          return{
            success: false,
          }
        case EDIT_CLIENTS_SUCCESS:
          return{
            ...state,
            clients:state.clients.map((index) => index === payload.id ? payload:clients )
          }
        case EDIT_CLIENTS_FAILURE:
          return {
            success: false,
          };
        case DELETE_CLIENTS_SUCCESS:
          return{
            clients:[...state.clients.filter((data) => data !== payload)]
          }
        case DELETE_CLIENTS_FAILURE:
          return{
            success: false,
          }
        default:
          return state;
      }
  }
