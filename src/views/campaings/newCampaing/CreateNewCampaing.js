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
import { createNewCampaign } from "../../../actions/campaing";


const CreateNewCampaing = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    shortcode: "",
    prefix: null,
    start_date: "",
    end_date: "",
    is_public: "",
    
  });
  const { register, handleSubmit, errors } = useForm();
  const {
    name,
    prefix,
    shortcode,
    start_date,
    end_date,
    is_public,
    description,
  } = inputs;
  const dispatch = useDispatch();

  function onChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit() {
    console.log(inputs);
    dispatch(createNewCampaign(inputs))
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
      props.history.push("/campaings/manage");
    });
  }
  return (
    <>
      <CCard>
        <CCardHeader>
          Create Campaign
        </CCardHeader>
        <CCardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter campaign name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  ref={register({ required: true })}
                />
                {errors.name && (
                  <div className="text-danger">This field is required</div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Prefix</label>
                  <select id="inputState" className="form-control"
                  name="prefix"
                  value={prefix}
                  onChange={onChange}
                  ref={register({ required: true })}
                  >
                    <option>Choose...</option>
                    <option value="test">...</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>Enter the shortcode (SMS & USSD only)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter shortcode"
                    name="shortcode"
                    value={shortcode}
                    onChange={onChange}
                    ref={register({ required: true })}
                  />
                  {errors.shortcode && (
                    <div className="text-danger">This field is required</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Start date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="start_date"
                    value={start_date}
                    onChange={onChange}
                    ref={register({ required: true })}
                  />
                  {errors.start_date && (
                    <div className="text-danger">This field is required</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label>End date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_date"
                    value={end_date}
                    onChange={onChange}
                    ref={register({ required: true })}
                  />
                  {errors.end_date && (
                    <div className="text-danger">This field is required</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label>Make public *</label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="is_public"
                    value={is_public}
                    onChange={onChange}
                    ref={register({ required: true })}
                  >
                    <option>Choose...</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                  {errors.is_public && (
                    <div className="text-danger">This field is required</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Campaign description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  value={description}
                  onChange={onChange}
                  ref={register({ required: true })}
                ></textarea>
                {errors.description && (
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

export default CreateNewCampaing