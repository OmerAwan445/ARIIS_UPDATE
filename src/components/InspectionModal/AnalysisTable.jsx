
import { Table } from 'react-bootstrap';

const AnalysisTable = ({ tableData }) => {
  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">RAIL PROFILE WEAR</h6>
      <h3 className="fw-fw-lighter">Analysis against Thresholds</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">

      <Table className='custom-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Horizontal</th>
            <th>Vertical</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.horizontal}</td>
              <td>{row.vertical}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default AnalysisTable;
