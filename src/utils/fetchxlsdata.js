import * as XLSX from 'xlsx';
// Fetch Excel data when the component mounts
export const fetchExcelRecord = async () => {
    try {
      // Load XLSX file
      const response = await fetch("/data.xlsx");  // Replace "your-file.xlsx" with the path to your XLSX file
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming your data is in the first sheet and follows the structure of your demoData
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    return excelData;
    } catch (error) {
      console.error('Error fetching or parsing Excel data:', error);
      return;
    }
  };
