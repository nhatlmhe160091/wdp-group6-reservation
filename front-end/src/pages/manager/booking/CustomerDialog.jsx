import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

export default function CustomerDialog({ customer }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Tooltip title="View detail">
                <VisibilityOutlinedIcon fontSize='small' color="info" onClick={() => handleClickOpen()}></VisibilityOutlinedIcon>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                 <DialogActions>
                    <CancelIcon color="primary" style={{ cursor: 'pointer' }} onClick={handleClose}>X</CancelIcon>
                </DialogActions>
                <DialogTitle>Information</DialogTitle>
                <DialogContent>
                    <React.Fragment>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Họ</StyledTableCell>
                                        <StyledTableCell>Tên</StyledTableCell>
                                        <StyledTableCell>Email</StyledTableCell>
                                        <StyledTableCell>Số điện thoại</StyledTableCell>
                                        <StyledTableCell>Địa chỉ</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <StyledTableRow key={customer?._id}>
                                        <StyledTableCell>{customer?.lname}</StyledTableCell>
                                        <StyledTableCell>{customer?.fname}</StyledTableCell>
                                        <StyledTableCell>{customer?.email}</StyledTableCell>
                                        <StyledTableCell>{customer?.phoneNumber}</StyledTableCell>
                                        <StyledTableCell>{customer?.gender}</StyledTableCell>
                                    </StyledTableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </React.Fragment>
                </DialogContent>
               
            </Dialog>
        </React.Fragment>
    );
}
