import {GET_BARCODES_SUCCESS,GET_BARCODES_FAILURE} from './type';
import Barcodes from '../services/barcodeService';


export const getAllBarcodes = (id) => (dispatch) => {
    return Barcodes.getAllBarCocdes(id).then((data) => {
        dispatch({
            type:GET_BARCODES_SUCCESS,
            payload:data
        })
    },(error) => {
        dispatch({
            type:GET_BARCODES_FAILURE,
            error
        })
    })
}