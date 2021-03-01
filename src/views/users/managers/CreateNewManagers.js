import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {createManager} from '../../../actions/managersActions';


const CreateNewManagers = (props) => {

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
        dispatch(createManager(inputs))
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
          props.history.push("/manager/managers");
        });
      }

  return (
    <>
      <CCard>
        <CCardHeader>
          Create new user
         
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

              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CreateNewManagers
