'use client';

import { AnalysisAgainstThresholds } from '@/DummyData';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const AnalysisTable = () => {
  const [tableData, setTableData] = useState(AnalysisAgainstThresholds);

  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">RAIL PROFILE WEAR</h6>
      <h3 className="fw-fw-lighter">Analysis against Thresholds</h3>
      <Table className='custom-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.direction}</td>
              <td>{row.left}</td>
              <td>{row.right}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AnalysisTable;
