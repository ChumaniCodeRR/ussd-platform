import { RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAIL } from "../actions/type";

const initialState = {}

export default function resetPassword(state = initialState, action){
    const {type} = action;

    switch(type){
        case RESET_PASSWORD_SUCCESS:
            return {
                success:true
            }
        case RESET_PASSWORD_FAIL:
            return {
                success:false
            }
            default: 
            return state 
    }
}
