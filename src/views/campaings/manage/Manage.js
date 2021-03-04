import React, { useEffect, useState, createRef } from "react";
import CIcon from "@coreui/icons-react";
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
import { getAllCampaings, deleteCampaing } from "../../../actions/campaing";
import TablePagination from "@material-ui/core/TablePagination";
import Spinner from "../../../helpers/spinner";
import Swal from "sweetalert2";


const Manage = () => {
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
    if (searchTerm === "") {
      return;
    } else {
      setSearchResults(
        campaigns.filter((campaign) =>
          campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [campaigns, searchTerm]);
  //remove an admin
  function removeAdmin(index) {
    dispatch(deleteCampaing(index)).then(
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
        removeAdmin(index);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Overview</CCardHeader>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(searchTerm === ""
                      ? campaingList.campaigns
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
                            <div className=" text-muted"> {row.shortcode}</div>
                          </td>
                          <td>
                            <div className=" text-muted">{row.start_date}</div>
                          </td>
                          <td className="text-center">
                            <div className=" text-muted">{row.end_date}</div>
                          </td>
                          <td>
                            <CDropdown className="mt-2">
                              <CDropdownToggle caret color="secondary">
                                Actions
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownItem to={`/campaings/dashboard/${row.id}`}>
                                  View
                                </CDropdownItem>
                                <CDropdownItem divider />
                                <CDropdownItem to={`/campaings/edit/${row.id}`}>
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
                    ? campaingList.campaigns.length
                    : searchResults.length
                }
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
  );
};
export default Manage;
