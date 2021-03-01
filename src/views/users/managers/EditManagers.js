import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";
import {editManager,getManagerById} from '../../../actions/managersActions';
import Swal from "sweetalert2";



const EditManagers = (props) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
      });
      const id = props.match.params.id;
      const dispatch = useDispatch();
    
      useEffect(() => {
        
        dispatch(getManagerById(id)).then((data) => {
          setInputs({ name: data.name, email: data.email });
        });
      }, []);
    
      function onChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
      }
      function onSubmit(e){
        e.preventDefault()
        dispatch(editManager(id,inputs))
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
          title: "Successfully Updated",
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
          Editing user
         
        </CCardHeader>
        <CCardBody>
        <form onSubmit={onSubmit}> 
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputs.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Email (Enter a working email address, an email will be sent to
                  the user with credentials) *
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={inputs.email}
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
        </CCardBody>
      </CCard>
    </>
  )
}

export default EditManagers
