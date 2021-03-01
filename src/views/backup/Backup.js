import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'



const Backup = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Backup
        </CCardHeader>
        <CCardBody>
        <div className="alert alert-info" role="alert">
            Data not available!
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Backup