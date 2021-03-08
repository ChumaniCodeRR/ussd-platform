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

const EditClient = () => {
  return (
    <>
      <CCard className="shadow-sm">
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

export default EditClient