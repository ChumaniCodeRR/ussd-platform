import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CLink,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../helpers/spinner";
import Swal from "sweetalert2";
import {getAllManagers,deleteManager} from '../../../actions/managersActions' 
import TablePagination from "@material-ui/core/TablePagination";
import { Link } from "react-router-dom";



const Managers = () => {
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
 
   //redux implementations
   const dispatch = useDispatch();
   const managerlist = useSelector((state) => state.managers);
   const [isloading, setisloading] = useState(false);
 
   //seach bar controlls
   const [managers, setManagers] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);
 
   const handleChange = (e) => {
     setSearchTerm(e.target.value);
   };
   useEffect(() => {
     setisloading(true);
     dispatch(getAllManagers()).then(() => {
       setisloading(false);
       // window.location.reload();
     });
     setManagers(managerlist.managers);
     if (searchTerm === "") {
       return;
     } else {
       setSearchResults(
         managers.filter((manager) =>
         manager.name.toLowerCase().includes(searchTerm.toLowerCase())
         )
       );
     }
   }, [managers, searchTerm]);
 
   //remove an admin
   function removeManager(index) {
     dispatch(deleteManager(index)).then(
       () => {
         window.location.reload();
       },
       (err) => {
         console.log(err);
       }
     );
   }
 
   function confirmButton(index) {
     Swal.fire({
       title: "Are you sure you want to delete?",
       showDenyButton: true,
       confirmButtonText: `Yes`,
       denyButtonText: `No`,
     }).then((result) => {
       if (result.isConfirmed) {
         removeManager(index);
       } else if (result.isDenied) {
         Swal.fire("Changes are not saved", "", "info");
       }
     });
   }
  return (
    <>
      <CCard>
        <CCardHeader>
          Overview
          <div className="float-right">
                <Link to="/manager/createNew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                </Link>
              </div>
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
                      <th> Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(searchTerm === ""
                      ? managerlist.managers
                      : searchResults
                    )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <tr key={row.id}>
                          <td>
                            <div className=" text-muted">{row.name}</div>
                          </td>
                          <td>
                            <div className=" text-muted"> {row.email}</div>
                          </td>
                          <td>
                            <CDropdown className="mt-2">
                              <CDropdownToggle caret color="secondary">
                                Actions
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownItem to={`/manager/editManager/${row.id}`}>
                                  Edit
                                </CDropdownItem>
                                <CDropdownItem divider />
                                <CDropdownItem
                                  onClick={() => confirmButton(row.id)}
                                >
                                  Delete
                                </CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              <TablePagination
                rowsPerPageOptions={[10, 15, 20, 100, 1000, 2000]}
                component="div"
                count={
                  searchTerm === ""
                    ? managerlist.managers.length
                    : searchResults.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Managers
