import React, { useEffect, useState, createRef } from 'react'

import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'




const UssdShortCodes = () => {
  return (
    <>
      <CCard className="shadow-sm">
        <CCardHeader>
          USSD
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

export default UssdShortCodes