import * as XLSX from 'xlsx';

// Fetch Excel data for all sheets
export const fetchExcelRecords = async () => {
    try {
        // Array to store records from all sheets
        let allRecords = [];
        let fileNames = [];
        const TOTAL_EXCEL_SHEETS = 21;
        // GETTING ALL THE FILES PATH IN AN ARRAY
        for (let i = 2; i <= TOTAL_EXCEL_SHEETS; i++) {
            // GETTING ERROR FROM FIRST FILE
            fileNames.push(`/DummyData/Excel-data/dummy-sheet-${i}.xlsx`);
            // fileNames.push(`/data${i}.xlsx`);
        }
        // Iterate over each file
        for (const fileName of fileNames) {
            // Load XLSX file
            const response = await fetch(fileName);
            const arrayBuffer = await response.arrayBuffer();
            const data = new Uint8Array(arrayBuffer);
            const workbook = XLSX.read(data, { type: "array" });

            // Assuming your data is in the first sheet and follows the structure of your demoData
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Push the records from the current sheet to the allRecords array
            allRecords.push(excelData);
        }

        // Return all records combined from all sheets
        return allRecords;
    } catch (error) {
        console.error('Error fetching or parsing Excel data:', error);
        return [];
    }
};
