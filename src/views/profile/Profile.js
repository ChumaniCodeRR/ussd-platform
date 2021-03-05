import React, { useState, useEffect } from "react";
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { updateProfile ,getProfile} from "../../actions/userProfile";

const Profile = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { register, handleSubmit, watch, errors } = useForm();

  //redux implementaions
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const { name, email } = inputs;

  function onChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function onSubmit() {
    dispatch(updateProfile(inputs)).then((tr) =>{
     console.log(tr)
    });
    successMessage()
    setInputs({name:'',email:''})
  }
  
  function successMessage() {
    Swal.fire({
      icon: "success",
      title: "Profile successfully updated",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <>
      <CCard>
        <CCardHeader>Profile</CCardHeader>
        <CCardBody>
          <div className="alert alert-primary" role="alert">
          Current details : {profile.name} , {profile.email}
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.name && (
                <div className="text-danger">This field is required</div>
              )}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.email && (
                <div className="text-danger">This field is required</div>
              )}
            </div>

            <button type="submit" className="btn btn-dark">UPDATE</button>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Profile