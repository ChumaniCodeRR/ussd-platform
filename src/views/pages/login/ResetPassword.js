import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {restPassword} from '../../../actions/resetPassword';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from '../../../helpers/spinner';
import logo from "../../../assets/Logo.png";
import "./Login.css";

export default function ResetPasswordPage() {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const { register, handleSubmit, errors } = useForm();
  const { email } = inputs;
  const dispatch = useDispatch();
  const history = useHistory();

  function onChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit() {
    dispatch(restPassword(inputs))
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        errorMessage()
      });  
  }

  function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password or username is incorrect!',
      })
  }

  
  return (
    <div className="container" id="container">
    <div className="form-container sign-in-container">
      
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        
        <h1></h1>
        <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter email"
                ref={register({ required: true })}
              />
              {errors.email && (
                <div className="text-danger">This field is required</div>
              )}
               <Link to="/" variant="body2">
               Back to login
          </Link>
        
        <button>Reset password</button>
        {/* {isloading && <Spinner />} */}
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-right">
        <img src={logo}  alt="logo" width="200" className="logo"/>
          <h1>Reset Password</h1>
          <p>To keep managing mobile campaigns please login with your personal info</p>
        </div>
      </div>
    </div>
    {/* {isloading && <Spinner />} */}
  </div>
  );
}
