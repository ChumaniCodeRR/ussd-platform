import { GET_NETWORK_SUCCESS, GET_NETWORK_FAILURE } from "./type";
import NetworkService from '../services/networkService';



export const getNetwork = (id) => () => {
    return NetworkService.getNetworkEntries(id)
    // .then((data) => {
    //     dispatch({
    //         type:GET_NETWORK_SUCCESS,
    //         payload:data,
    //     })
    // },(error) => {
    //     dispatch({
    //         type:GET_NETWORK_FAILURE,
    //         error
    //     })
    // })
}