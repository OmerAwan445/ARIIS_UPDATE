import React from 'react'
import * as XLSX from 'xlsx';

const ExportDataToExcel = ({ fileName, exportData }) => {

    function exportDataToExcelFile() {
        try {
            // Create a new workbook
            const wb = XLSX.utils.book_new();

            // Convert the data to a worksheet
            const ws = XLSX.utils.aoa_to_sheet(exportData);

            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            // Save the workbook as an Excel file
            XLSX.writeFile(wb, fileName + '.xlsx');

            console.log('Excel file exported successfully.');
        } catch (error) {
            console.error('Error exporting data to Excel:', error);
        }
    }

    return (
        <button
            onClick={() => exportDataToExcelFile()}
            className='inspection-list-color rounded p-3 border-0 text-start'
            style={{ backgroundColor: "#a2191f" }}
        >
            <span className='d-block'>Export Data</span>
        </button>
    )
}

export default ExportDataToExcel
