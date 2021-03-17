import {combineReducers} from 'redux'
import auth from "./auth";
import resetPassword from './resetPassword';
import campaigns from './campaign';
import profile from './userProfile';
import admins from './admin';
import managers from './manager'
import clients from './client'
import ussd from './ussdCode';
import networkEntries from './networkEntries';
import entries from './entry';
const rootReducer = combineReducers({
    auth,resetPassword,campaigns,profile,admins,managers,clients,ussd,networkEntries,entries
    
})
export default rootReducer