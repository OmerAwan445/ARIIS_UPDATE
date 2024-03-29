import { Table } from "react-bootstrap";

const AnalysisTable = ({ tableData }) => {
  // Extract field names dynamically from the first item in the tableData array
  if (!tableData || tableData.length === 0) {
    return null; // Return null if tableData is empty or undefined
  }
  const fields = Object.keys(tableData[0] || {});
  const fieldNames = fields.map(
    (key) => { 
       const words = key.replace(/[^a-zA-Z0-9]/g, ' ').split(/\s|-|\//);

    // Capitalize the first letter of each word and join them back with spaces
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return capitalizedWords;
  }
  );

  return (
    <div >
      <h6 className="text-uppercase fw-bold mb-3">RAIL PROFILE WEAR</h6>
      <h3 className="fw-fw-lighter">Analysis against Thresholds</h3>
      <div className="table-wrapper-scroll-x my-custom-scrollbar">
        <Table className="custom-table" responsive  >
          <thead>
            <tr>
              {/* Render table headers dynamically */}
              {fieldNames.map((fieldName, index) =>
                fieldName === "Index" ? (
                  <th key={index}>#</th>
                ) : (
                  <th key={index}>{fieldName}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Render table data dynamically */}
                {fields.map((fieldName, index) => {
                  const fieldValue = row[fieldName];
                  const formattedValue =
                    typeof fieldValue === "number" &&
                    !isNaN(fieldValue) &&
                    fieldName !== "index"
                      ? Number(fieldValue).toFixed(3)
                      : fieldValue;
                  return <td key={index}>{formattedValue}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AnalysisTable;
