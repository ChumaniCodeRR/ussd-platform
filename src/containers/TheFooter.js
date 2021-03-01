import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
      {new Date().getFullYear()}
        {"."}
        {"Copyright © "} All rights reserved
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
