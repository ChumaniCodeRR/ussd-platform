import AuthService from "../services/authService";
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "./type";

export const restPassword = (email) => (dispatch) => {
  return AuthService.passwordReset(email).then(() => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
    },(error) => {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        error,
      });
    }
  );
};
