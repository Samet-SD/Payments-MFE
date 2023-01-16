import React, { useEffect, useState} from 'react'
import Datatable from './common/Datatable';
import { Box } from '@mui/system';
import { Payment } from '@mui/icons-material';


const columns = [
    {field: 'id', headerName: 'ID', width: 150},
    {field: 'currency', headerName: 'Currency', width: 150},
    {field: 'date', headerName: 'Date', width: 150},
    {field: 'status', headerName: 'Status', width: 150},
    {field: 'paymentType', headerName: 'PaymentType', width: 150},
    {field: 'no_Transactions', headerName: 'Tran. No. ', width: 150},
    {field: 'paymentAmount', headerName: 'PaymentAmount', width: 150},

];


const PaymentTable = () => {
    

    useEffect(() => {
        
        fetch('http://localhost:8086/payments')
        .then((response) => response.json())
        .then((json) => setPayment(json));
        //.then(json => console.log(json))
    }, [])

    const [payment, setPayment] = useState([]);
    return (
     <Box sx={{left: "30%", height: 400,position: "relative", width: '50%',display:"flex", justifyContent:"center" }}>
    <Datatable
       rows={payment}
       columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
     />
    </Box>
  )
}

export default PaymentTable