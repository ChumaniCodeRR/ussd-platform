import React, { useEffect, useState, createRef } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch,useSelector } from "react-redux";
import {createNewClient} from '../../../actions/client';
import Select from "react-select";
//import "react-select/dist/react-select.css";

const CreateNewClient = (props) => {

  const [inputs , setInputs] = useState({
    name:"",
    email:"",
  })
  const [selectedItem,setSelectedItem] = useState([])
 
      const { register, handleSubmit, errors } = useForm();
      const {name,email } = inputs;
      const dispatch = useDispatch();
      const campaingList = useSelector((state) => state.campaigns);

      function onChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value, }));
      }
 
    function  onSelect( selectedItem) {
      setSelectedItem(selectedItem)
    }
    function onSubmit(){
        console.log({inputs,selectedItem})
        //sti
      }

      function successMessage() {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          props.history.push("/client/clients");
        });
      }


  return (
    <>
      <CCard className="shadow-sm">
        <CCardHeader>Create new user</CCardHeader>
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
            <div className="form-group">
              <label>Select the campigns for this client </label>
              {campaingList.campaigns.map(item => (
                <p></p>
              ))}
              <Multiselect
                onSelect={onSelect}
                options={campaingList.campaigns} // Options to display in the dropdown
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
}

export default CreateNewClient