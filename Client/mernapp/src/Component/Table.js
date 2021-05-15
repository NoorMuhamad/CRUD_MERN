import { React, useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const TableData = () => {
    const[readdata, setreaddata] = useState([])
    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/read")
        .then((response)=>{setreaddata(response.data)})
    }, [])
    function deleteData(id){
        console.log(id)
        Axios.delete(`http://127.0.0.1:3001/delete/${id}`)
    }
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell >Name</StyledTableCell>
                        <StyledTableCell >Email</StyledTableCell>
                        <StyledTableCell >Department</StyledTableCell>
                        <StyledTableCell >City</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {readdata.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row._id}
                            </StyledTableCell>
                            <StyledTableCell >{row.Name}</StyledTableCell>
                            <StyledTableCell >{row.Email}</StyledTableCell>
                            <StyledTableCell >{row.Department}</StyledTableCell>
                            <StyledTableCell >{row.City}</StyledTableCell>
                            <StyledTableCell align="right"><Button color="secondary" onClick={() => deleteData(row._id)}
                                startIcon={<DeleteIcon />}></Button><Link to={`/update/${row._id}`}><Button color="default"startIcon={<EditIcon />}></Button></Link></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableData

