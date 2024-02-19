import React from 'react'
import { Col } from 'react-bootstrap'

function InpectionCardLayout({children , colSpace }) {
  return (
    <Col sm={colSpace} style={{backgroundColor:"#111827"}} className='text-white px-3 py-4'>
    <div>
      {children}
    </div>
    </Col>
  )
}

export default InpectionCardLayout
