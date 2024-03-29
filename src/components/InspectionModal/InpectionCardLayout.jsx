import React from 'react'
import { Col } from 'react-bootstrap'

function InpectionCardLayout({children , colSpace,width }) {
  return (
    <Col lg={colSpace}  style={{backgroundColor:"#111827",
      width:`${width && width}`,
    }} className={`text-white px-3 py-4`}>
    <div>
      {children}
    </div>
    </Col>
  )
}

export default InpectionCardLayout
