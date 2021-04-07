import { GET_PROFILE_SUCCESS,GET_PROFILE_FAIL,EDIT_PROFILE_SUCCESS ,EDIT_PROFILE_FAIL} from "./type";
import UserProfile from '../services/userProfile';
import updateUser from '../services/userProfile';

export const getProfile = () => (dispatch) => {
  return UserProfile.getUserDetials().then((data) => {
      dispatch({
          type:GET_PROFILE_SUCCESS,
          payload:data
      })
      setTimeout(() => {
        localStorage.removeItem("user");
      },28800000)
  },(error) => {
      dispatch({
          type:GET_PROFILE_FAIL,
          error
      })
  })
}

export const updateProfile = (data) => (dispatch) => {
    return updateUser.updateUser(data).then(() => {
        dispatch({
            type:EDIT_PROFILE_SUCCESS,
            payload:{profile:data}
        })
    },(error) => {
        dispatch({
            type:EDIT_PROFILE_FAIL,
            error
        })
    })
}