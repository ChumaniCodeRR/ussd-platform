import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CWidgetDropdown,
  CBadge,
  CWidgetProgress,
  CProgress,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignById } from "../../../actions/campaing";
import { getNetwork } from "../../../actions/networkEntryAction";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../../charts/ChartLineSimple";
import Spinner from "../../../helpers/spinner";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

  const DashboardView = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    start_date: "",
    end_date: "",
  });
  const [isloading, setisloading] = useState(false);
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const network = useSelector((state) => state.networkEntries);

  useEffect(() => {
    setisloading(true);
    dispatch(getNetwork(id));
    dispatch(getCampaignById(id)).then((data) => {
      setInputs({
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date,
      });
      setisloading(false);
    });
  }, []);
  //charts data
  const chartdata = {
    labels: network.networkEntries.labels,
    datasets: [
      {
        label: network.networkEntries.datasets.label,
        data: network.networkEntries.datasets.data,
        backgroundColor: network.networkEntries.datasets.backgroundColor,
        borderColor: network.networkEntries.datasets.borderColor,
        borderWidth: network.networkEntries.datasets.borderWidth,
      },
    ],
  };
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
                  header="203"
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
                  header="823"
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
                  header="9823"
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
                  header="8823"
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
          </CCardBody>
        </CCard>
      )}
    </>
  );
};

export default DashboardView;
