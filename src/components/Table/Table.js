// import React from "react";
// import "./style.css";
// export const Table = ({column, row}) => {
//     console.log(row)
//     console.log(column)

//   return (
//     <>
//         <h5>Sections</h5>
//         {/* <table class='table table-dark table-striped'>
//       <thead>
//         <tr>
//             {
//                 column?.map ( record => (
//                     <th scope='col' key={record?.id}>{record?.title}</th>
//                 ))
//             }
//         </tr>
//       </thead>
//       <tbody>
//         {
//             row?.map ( record =>
//               (
//                 <tr key={record?.id}>
//                     <td>{record.element}</td>
//                     <td>{record?.chainage}</td>
//                     <td>{record?.easting}</td>
//                     <td>{record?.northing}</td>
//                     <td>{record?.bearing}</td>
//                     <td>{record?.note}</td>
//                 </tr>
//                 )
//                 )

//             }
//       </tbody>
//     </table> */}
//     </>

//   );
// };
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './style.css'
export const Table = ({column, row, name}) => {
  return (
    <div>
    <h4 className='mt-4'>{name}</h4>
      <DataGrid
      className="table"
        rows={row}
        columns={column}
        disableRowSelectionOnClick
      />
    </div>
  );
}