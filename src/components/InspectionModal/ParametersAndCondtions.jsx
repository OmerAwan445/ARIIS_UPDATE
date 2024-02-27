'use client';

import { DesignParamsAndConditionThresholds } from '@/DummyData';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

const ParametersAndCondtions = ({ sectionId }) => {
    const [tableData, setTableData] = useState(DesignParamsAndConditionThresholds);

  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">Section id # {sectionId}</h6>
      <h3 className="fw-lighter">Design parameters & condition thresholds</h3>
      <Table className='custom-table mt-4'>
        <thead>
        <tr>
            <th colSpan="2" className='fs-4 py-2'> Rail wear limits</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Limit (mm)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.direction}</td>
              <td>{row.limit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ParametersAndCondtions
