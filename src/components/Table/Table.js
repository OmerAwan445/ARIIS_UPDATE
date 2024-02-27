import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = ({ columns, rows ,title}) => {
  return (
    <>
    <div>
        <h3 className="fw-fw-lighter">{title}</h3>
        <Table className='custom-table'>
          <thead>
          <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
          </thead>
          <tbody>
            <tr>
              {rows.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </>

  );
};
