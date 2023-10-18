import { Grid, dividerClasses } from '@mui/material';
import clsx from 'clsx'
import './selectSeats.css'
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function PriceLegend(props){

    var prices = props.prices || {"recliner" : 350, "regular" : 150 , "lounger" : 250};

    return (

        <TableContainer component={Paper}>

        <Table  size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>Rows</TableCell>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="left">Price</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">A</TableCell>
              <TableCell align="left">Lounger</TableCell>
              <TableCell align="left">&#8377;{prices.lounger}</TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                B-I
              </TableCell>
              <TableCell align="left">Regular</TableCell>
              <TableCell align="left">&#8377;{prices.regular}</TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">J</TableCell>
              <TableCell align="left">Recliner</TableCell>
              <TableCell align="left">&#8377;{prices.recliner}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
        </TableContainer>





          

    )
}


  {/* <Grid container className="PriceLegend" justifyContent="center" alignItems="center">
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>ROWS</h3> 
                    <div>A</div> 
                    <div>B-I</div> 
                    <div>J</div> 
                </Grid>
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>TYPE</h3> 
                    <div>Lounger</div> 
                    <div>Regular</div> 
                    <div>Recliner</div> 
                </Grid>
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>PRICE</h3> 
                    <div>&#8377;{prices.lounger}</div> 
                    <div>&#8377;{prices.regular}</div> 
                    <div>&#8377;{prices.recliner}</div> 
                </Grid>
            
            </Grid> */}