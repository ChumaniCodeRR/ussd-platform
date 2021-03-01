import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type";
import AuthService from "../services/authService";

export const login = (data) => (dispatch) => {
  return AuthService.login(data).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
        error,
      });
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
