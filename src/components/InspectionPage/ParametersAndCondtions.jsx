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
      <Table className='custom-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Left</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.direction}</td>
              <td>{row.left}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ParametersAndCondtions
