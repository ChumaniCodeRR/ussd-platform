import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCampaings } from "../../actions/campaing";
import TablePagination from "@material-ui/core/TablePagination";
import Spinner from '../../helpers/spinner';

const Dashboard = () => {
  //pagination controlls
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  //redux implemetations
  const dispatch = useDispatch();
  const campaingList = useSelector((state) => state.campaigns);
  const [isloading, setisloading] = useState(false);
  // useEffect(() => {
  //   setisloading(true);
  //   dispatch(getAllCampaings()).then(() => {
  //     setisloading(false);
  //   });
  // }, []);

//seach bar controlls
const [campaigns, setCampaings] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);

const handleChange = (e) => {
  setSearchTerm(e.target.value);
};

useEffect(() => {
  setisloading(true);
    dispatch(getAllCampaings()).then(() => {
      setisloading(false);
    });
  setCampaings(campaingList.campaigns);
  if(searchTerm === ""){
    return;
  }else {
    setSearchResults(
      campaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}, [campaigns, searchTerm]);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Overview
            </CCardHeader>
            <CCardBody>
            <div className=" row mb-3">
              <div className="col-4">
                {/* <label className="form-label">Search</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={handleChange}
                />
              </div>
            </div>
            {isloading && <Spinner />}
            {!isloading && (
              <table className="table table-hover  mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th>Name</th>
                    <th> Short Code</th>
                    <th>Start Date</th>
                    <th className="text-center">End Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                {(searchTerm === "" ? campaingList.campaigns : searchResults).slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                  <tr key={row.id}>
            
                    <td>
                      <div className=" text-muted">{row.name}</div>
                    </td>
                    <td >
                      <div className=" text-muted"> {row.shortcode}</div>
                    </td>
                    <td>
                      <div className=" text-muted">{row.start_date}</div>
                    </td>
                    <td className="text-center">
                      <div className=" text-muted">{row.end_date}</div>
                    </td>
                    <td>
                      <div className=" text-muted">{row.description}</div>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
               )}
              <TablePagination
                  rowsPerPageOptions={[10, 15, 20, 100, 1000, 2000]}
                  component="div"
                  count={searchTerm === "" ? campaingList.campaigns.length: searchResults.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
               
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
