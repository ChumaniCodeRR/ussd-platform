import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {login} from '../../../actions/auth';
import Spinner from '../../../helpers/spinner';
import logo from "../../../assets/Logo.png";
import "./Login.css";


const Login = (props) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isloading ,setisloading] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const { email, password } = inputs;
  const dispatch = useDispatch();

  function onChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit() {
    setisloading(true)
    dispatch(login(inputs))
      .then((res) => {
        setisloading(false)
        props.history.push("/admin/dashboard");
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
      <h1>Login</h1>
      <p className="text-muted">Sign In to your account</p>
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
        <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                ref={register({ required: true })}
              />
              {errors.password && (
                <div className="text-danger">This field is required</div>
              )}
               <Link to="/reset" variant="body2">
               <div className="mb-4">Forgot your password?</div>
              </Link>
        <button style={{ borderRadius: '20px',padding:'12px 45px' }} >Sign In</button>
        {isloading && <Spinner />}
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-right">
        <img src={logo}  alt="logo" width="200" className="logo"/>
          <h1>Welcome Back!</h1>
          <p>To keep managing mobile campaigns please login with your personal info</p>
        </div>
      </div>
    </div>
    {isloading && <Spinner />}
  </div>
  );
}

export default Login
