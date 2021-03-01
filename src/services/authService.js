import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;



const login = (data) => {
    return axios.post(API_URL + "login",data)
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("user", JSON.stringify(response.data.data.access_token));
        }
  
        return response.data;
      })
      .catch((e) =>{
        return e
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };

const passwordReset = (email) =>{
  return axios.post(API_URL + "password/reset",email)
        .then((response) => {
          return response.data;
        })
       
}

  export default {
    login,
    logout,
    passwordReset
  };