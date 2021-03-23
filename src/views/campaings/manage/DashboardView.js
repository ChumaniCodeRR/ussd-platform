import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CWidgetDropdown,
  CBadge,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignById } from "../../../actions/campaing";
import { getNetwork } from "../../../actions/networkEntryAction";
import { countEntriesById } from "../../../actions/entries";
import ChartLineSimple from "../../charts/ChartLineSimple";
import Spinner from "../../../helpers/spinner";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BarcodeTable from './BarcodeTable';

const DashboardView = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    start_date: "",
    end_date: "",
  });
  //charts data state
  const [chartdata, setchartdata] = useState({
    labels: "",
    datasets: [
      {
        label: "",
        data: "",
        backgroundColor: "",
        borderColor: "",
      },
    ],
    borderWidth: "",
  });
  const [isloading, setisloading] = useState(false);
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const entry = useSelector((state) => state.entries);

  useEffect(() => {
    setisloading(true);
    //Get network entry by id and set the chart data state
    dispatch(getNetwork(id)).then((da) => {
      setchartdata({
        labels: da.labels,
        datasets: [
          {
            label: da.datasets.label,
            data: da.datasets.data,
            backgroundColor: da.datasets.backgroundColor,
            borderColor: da.datasets.borderColor,
          },
        ],
        borderWidth: da.borderWidth,
      });
    });
    //get the count of entry
    dispatch(countEntriesById(id));
    //get campaign details and set the state
    dispatch(getCampaignById(id)).then((data) => {
      setInputs({
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date,
      });
      setisloading(false);
    });
  }, [dispatch]);

  return (
    <>
      {isloading && <Spinner />}
      {!isloading && (
        <CCard className="shadow-sm">
          <CCardHeader>
            Dashboard details for{" "}
            <CBadge color="secondary">{inputs.name}</CBadge>
          </CCardHeader>
          <CCardBody>
            <div className="alert alert-info" role="alert">
              This campaing started on : {inputs.start_date} until{" "}
              {inputs.end_date}
            </div>
            <CRow>
              <CCol sm="6" lg="3">
                <CWidgetDropdown
                  color="gradient-primary"
                  header={entry.entries.total}
                  text="All entries"
                  footerSlot={
                    <ChartLineSimple
                      className="mt-3"
                      style={{ height: "70px" }}
                      backgroundColor="rgba(255,255,255,.2)"
                      dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                      options={{ elements: { line: { borderWidth: 2.5 } } }}
                      pointHoverBackgroundColor="warning"
                    />
                  }
                ></CWidgetDropdown>
              </CCol>

              <CCol sm="6" lg="3">
                <CWidgetDropdown
                  color="gradient-info"
                  header={entry.entries.duplicate}
                  text="Duplicate entries"
                  footerSlot={
                    <ChartLineSimple
                      className="mt-3"
                      style={{ height: "70px" }}
                      backgroundColor="rgba(255,255,255,.2)"
                      dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                      options={{ elements: { line: { borderWidth: 2.5 } } }}
                      pointHoverBackgroundColor="warning"
                    />
                  }
                ></CWidgetDropdown>
              </CCol>

              <CCol sm="6" lg="3">
                <CWidgetDropdown
                  color="gradient-warning"
                  header={entry.entries.positive}
                  text="Positive entries"
                  footerSlot={
                    <ChartLineSimple
                      className="mt-3"
                      style={{ height: "70px" }}
                      backgroundColor="rgba(255,255,255,.2)"
                      dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                      options={{ elements: { line: { borderWidth: 2.5 } } }}
                      pointHoverBackgroundColor="warning"
                    />
                  }
                ></CWidgetDropdown>
              </CCol>

              <CCol sm="6" lg="3">
                <CWidgetDropdown
                  color="gradient-danger"
                  header={entry.entries.negative}
                  text="Negative entries"
                  footerSlot={
                    <ChartLineSimple
                      className="mt-3"
                      style={{ height: "70px" }}
                      backgroundColor="rgba(255,255,255,.2)"
                      dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                      options={{ elements: { line: { borderWidth: 2.5 } } }}
                      pointHoverBackgroundColor="warning"
                    />
                  }
                ></CWidgetDropdown>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" sm="6" md="4">
                <CCard accentColor="info" className="shadow-sm">
                  <CCardHeader>Unique vs Returning</CCardHeader>
                  <CCardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="4">
                <CCard accentColor="warning" className="shadow-sm">
                  <CCardHeader>Positive vs Negative vs Duplicates</CCardHeader>
                  <CCardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="4">
                <CCard accentColor="danger" className="shadow-sm">
                  <CCardHeader>Network Entries</CCardHeader>
                  <CCardBody>
                    <Doughnut data={chartdata} />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <BarcodeTable  campaign_id={id}/>
          </CCardBody>
        </CCard>
      )}
    </>
  );
};

export default DashboardView;
