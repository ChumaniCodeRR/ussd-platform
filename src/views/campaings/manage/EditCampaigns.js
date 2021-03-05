import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { editCampaing ,getCampaignById} from "../../../actions/campaing";


const EditCampaigns = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    shortcode: "",
    prefix: null,
    start_date: "",
    end_date: "",
    is_public: "",
    
  });
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getCampaignById(id)).then((data) => {
      setInputs({ name: data.name, description: data.description,shortcode:data.shortcode,
        prefix:data.prefix,start_date:data.start_date,end_date:data.end_date,
        is_public:data.is_public
      });
    });
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(editCampaing(id,inputs))
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
      props.history.push("/campaings/manage");
    });
  }
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Overview
            </CCardHeader>
            <CCardBody>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter campaign name"
                  name="name"
                  value={inputs.name}
                  onChange={onChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Prefix</label>
                  <select id="inputState" className="form-control"
                  name="prefix"
                  value={inputs.prefix}
                  onChange={onChange}
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
                    value={inputs.shortcode}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Start date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="start_date"
                    value={inputs.start_date}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>End date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_date"
                    value={inputs.end_date}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col">
                  <label>Make public *</label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="is_public"
                    value={inputs.is_public}
                    onChange={onChange}
                  >
                    <option>Choose...</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Campaign description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  value={inputs.description}
                  onChange={onChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Create
              </button>
            </form>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditCampaigns

