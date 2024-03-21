import React from "react";
import { Table } from "react-bootstrap";
import ExportDataToExcel from "../common/ExportDataToExcel";

export const CustomTable = ({ columns, rows, title, isExportData }) => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-fw-lighter">{title}</h3>
          {isExportData && (
            <ExportDataToExcel
              fileName={"section-details"}
              exportData={[columns, ...rows]}
            />
          )}
        </div>
        <Table className="custom-table" responsive="xxl">
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cellData, cellIndex) => (
                  <td key={cellIndex}>{cellData}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
