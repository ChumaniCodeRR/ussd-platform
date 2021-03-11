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
<<<<<<< HEAD
    selected: [],
=======
>>>>>>> b0a45ece03b378ff1a23b44716f1b4d504bfe068
  })
  const [selectedItem,setSelectedItem] = useState([])
 
      const { register, handleSubmit, errors } = useForm();
<<<<<<< HEAD
      const {name,email,selected} = inputs;
      const dispatch = useDispatch();
      
      const campaigns = [
        { value: "BOLT ENERGY", label: "BOLT ENERGY"},
        { value: "KNORR SOUP DRIVE USSD COMPETITION", label: "KNORR SOUP DRIVE USSD COMPETITION"},
        { value: "Vetro Media Demo USSD", label : "Vetro Media Demo USSD"},
        { value: "ZAP008851 - Wild Island Rewards Campaign", label : "ZAP008851 - Wild Island Rewards Campaign"},
        { value: "RW00439 - Spekko Winter Shoprite campaign" ,label: "RW00439 - Spekko Winter Shoprite campaign"},
        { value: "DGB Franschhoek Cellar" , label : "DGB Franschhoek Cellar"},
        { value : "KWV Annabelle Cuvee Rose" , label : "KWV Annabelle Cuvee Rose"},
        { value : "L'OR Espresso" , label : "L'OR Espresso"}
      ] ;
      const [selectedValue, setSelectedValue ] = useState([]);
     //handle mulitiple change selector

     const handleMultiChange = (e) => {

        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
     }
=======
      const {name,email } = inputs;
      const dispatch = useDispatch();
      const campaingList = useSelector((state) => state.campaigns);
>>>>>>> b0a45ece03b378ff1a23b44716f1b4d504bfe068

      function onChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value, }));
      }
<<<<<<< HEAD

      function onSubmit() {

        inputs.selected = {selectedValue};  
        dispatch(createNewClient(inputs))
        .then(() =>{
          successMessage();
        })
        .catch((err) => {
          console.log(err)
        })
        
        console.log(inputs)
=======
 
    function  onSelect( selectedItem) {
      setSelectedItem(selectedItem)
    }
    function onSubmit(){
        console.log({inputs,selectedItem})
        //sti
>>>>>>> b0a45ece03b378ff1a23b44716f1b4d504bfe068
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
<<<<<<< HEAD
              </div>
              <div className="form-group">
                <label>Select Campaigns (working) </label>
                <Select
                 name="campaigns"
                 placeholder="Campaigns"
                 value= { campaigns.filter(obj => selectedValue.includes(obj.value)) }
                 options={campaigns}
                 onChange={handleMultiChange}
                 isMulti
                 isClearable
                />  
                  {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                  <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
                  </div>}
              </div>
=======
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
>>>>>>> b0a45ece03b378ff1a23b44716f1b4d504bfe068

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