import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { useDispatch } from "react-redux";
import {createAdmnin} from '../../../actions/adminsActions';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const CreateNewAdmin = (props) => {

const [inputs , setInputs] = useState({
  name:"",
  email:""
})
const { register, handleSubmit, errors } = useForm();
const {name,email} = inputs;
const dispatch = useDispatch();

function onChange(e) {
  const { name, value } = e.target;
  setInputs((inputs) => ({ ...inputs, [name]: value }));
}

function onSubmit(){
  dispatch(createAdmnin(inputs))
  .then(() =>{
    successMessage();
  })
  .catch((err) => {
    console.log(err)
  })
}

function successMessage() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Successfully saved",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    props.history.push("/admins/admin");
  });
}

  return (
    <>
      <CCard>
        <CCardHeader>
          Crearing user
         
        </CCardHeader>
        <CCardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter user full name"
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
                <label>
                  Email (Enter a working email address, an email will be sent to
                  the user with credentials) *
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter user email address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  ref={register({ required: true })}
                />
                {errors.email && (
                <div className="text-danger">This field is required</div>
              )}
              </div>
              <button type="submit" className="btn btn-dark">
                Create
              </button>
            </form>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CreateNewAdmin
