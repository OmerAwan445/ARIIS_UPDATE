import { Table } from "react-bootstrap";

const AnalysisTable = ({ tableData }) => {
  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">RAIL PROFILE WEAR</h6>
      <h3 className="fw-fw-lighter">Analysis against Thresholds</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <Table className="custom-table">
          <thead>
            <tr>
              <th>Chainage</th>
              <th>Horizontal</th>
              <th>Vertical</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{Number(row.chainage).toFixed(3)}</td>
                <td>{Number(row.horizontal).toFixed(3)}</td>
                <td>{Number(row.vertical).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AnalysisTable;
