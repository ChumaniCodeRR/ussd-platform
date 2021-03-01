import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Overview
          <div className="float-right">
                <Link to="/clients/createNew">
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
        <div className="alert alert-info" role="alert">
        This page is still under development!
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Clients
