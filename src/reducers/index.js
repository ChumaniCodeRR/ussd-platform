import {combineReducers} from 'redux'
import auth from "./auth";
import resetPassword from './resetPassword';
import campaigns from './campaign';
import profile from './userProfile';
import admins from './admin';
import managers from './manager'

const rootReducer = combineReducers({
    auth,resetPassword,campaigns,profile,admins,managers
    
})
export default rootReducer