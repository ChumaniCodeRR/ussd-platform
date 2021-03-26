import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBarcodes } from "../../../actions/barcodesActions";
import TablePagination from "@material-ui/core/TablePagination";

const BarcodeTable = ({ campaign_id }) => {
  //pagination controlls
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //redux implementations
  const dispatch = useDispatch();
  const barcodeslist = useSelector((state) => state.barcodes);

  useEffect(() => {
    dispatch(getAllBarcodes(campaign_id));
  }, []);

  return (
    <>
      <CCard className="shadow-sm">
        <CCardHeader>Barcodes List</CCardHeader>
        <CCardBody>
          <table className="table table-hover  mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th>Product Name</th>
                <th>Barcode</th>
                <th>Barcode digits</th>
                <th>Total Purchase</th>
              </tr>
            </thead>
            <tbody>
              {!barcodeslist.barcodes && (
                <div class="alert " role="alert">
                  This campaign does not have barcodes!
                </div>
              )}
              {barcodeslist.barcodes &&
                barcodeslist.barcodes
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <tr key={row.id}>
                      <td>
                        <div className=" text-muted">{row.product_name}</div>
                      </td>
                      <td>
                        <div className=" text-muted">{row.barcode}</div>
                      </td>
                      <td>
                        <div className=" text-muted">{row.barcode_digits}</div>
                      </td>
                      <td>
                        <div className=" text-muted">{row.total_purchase}</div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <TablePagination
            rowsPerPageOptions={[5, 8]}
            component="div"
            count={barcodeslist.barcodes  && barcodeslist.barcodes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default BarcodeTable;
