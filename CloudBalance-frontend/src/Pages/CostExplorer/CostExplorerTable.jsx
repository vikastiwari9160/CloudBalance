import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CostExplorerTable = ({data}) => {
    return (
        <>
            <TableContainer sx={{ maxHeight: 500 }} component={Paper}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} >{data[0].Group}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month1}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month2}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month3}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month4}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month5}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">{data[0].month6}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', padding: 1 }} align="center">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ padding: 1 }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costFirstMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costSecondMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costThirdMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costForthMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costFifthMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.costSixthMonth}</TableCell>
                                <TableCell sx={{ padding: 1 }} align="center">{row.totalcost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CostExplorerTable