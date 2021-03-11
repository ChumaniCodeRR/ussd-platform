import {combineReducers} from 'redux'
import auth from "./auth";
import resetPassword from './resetPassword';
import campaigns from './campaign';
import profile from './userProfile';
import admins from './admin';
import managers from './manager'
import clients from './client'


const rootReducer = combineReducers({
    auth,resetPassword,campaigns,profile,admins,managers,clients,
    
})
export default rootReducer