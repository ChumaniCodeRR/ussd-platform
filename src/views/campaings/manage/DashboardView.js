import React, { useEffect, useState, } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CWidgetDropdown,CBadge
} from '@coreui/react'
import { useDispatch } from "react-redux";
import {getCampaignById} from "../../../actions/campaing";
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../../charts/ChartLineSimple'
import Spinner from "../../../helpers/spinner";



const DashboardView = (props) => {

  const [inputs, setInputs] = useState({
        name: "",
        start_date: "",
        end_date: "",        
      });
  const [isloading, setisloading] = useState(false);
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    setisloading(true);
    dispatch(getCampaignById(id)).then((data) => {
      setInputs({ name: data.name,start_date:data.start_date,end_date:data.end_date,});
      setisloading(false);
    });
  }, []);
  return (
    <>
    {isloading && <Spinner />}
    {!isloading && (
      <CCard>
        <CCardHeader>
          Dashboard details for <CBadge color="secondary">{inputs.name}</CBadge>
        </CCardHeader>
        <CCardBody>
        <div className="alert alert-info" role="alert">
            This campaing started on : {inputs.start_date} until {inputs.end_date}
          </div>
          <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="All entries"
          footerSlot={
            <ChartLineSimple
            className="mt-3"
            style={{height: '70px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="9.823"
          text="Duplicate entries"
          footerSlot={
            <ChartLineSimple
            className="mt-3"
            style={{height: '70px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="9.823"
          text="Positive entries"
          footerSlot={
            <ChartLineSimple
            className="mt-3"
            style={{height: '70px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="9.823"
          text="Negative entries"
          footerSlot={
            <ChartLineSimple
            className="mt-3"
            style={{height: '70px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
        </CCardBody>
      </CCard>
       )}
    </>
  )
}

export default DashboardView