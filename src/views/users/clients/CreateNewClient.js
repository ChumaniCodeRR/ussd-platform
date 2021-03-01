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

const CreateNewClient = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Overview
         
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

export default CreateNewClient