import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
const Datatable = ({ rows, columns}) => {
    /*
    const rows = [
        {id: 1, col1: 'ID1', col2: 'Name1'},
        {id: 2, col1: 'ID2', col2: 'Name2'},
        {id: 3, col1: 'ID3', col2: 'Name3'}

    ];

    const columns = [
        {field: 'col1', headerName: 'Column1', width: 150},
        {field: 'col2', headerName: 'Column2', width: 150},
        {field: 'col3', headerName: 'Column3', width: 150}

    ]
  
  */
    return (
       // <Box sx={{left: "30%", height: 400,position: "relative", width: '50%',display:"flex", justifyContent:"center" }}>
        <DataGrid
          rows={rows}
         columns={columns}
          //pageSize={5}
        //  rowsPerPageOptions={[5]}
        // checkboxSelection
         //disableSelectionOnClick
        //  experimentalFeatures={{ newEditingApi: true }}
        />
     // </Box>
  );
}

export default Datatable

//top: "10%",
//right: "20%",
//width: "50%",