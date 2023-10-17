import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';

const TheatresList = ({ theatreData }) => {
  return (
    <Container maxWidth="md"> {/* Increased maxWidth */}
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}> {/* Increased minWidth */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Theater Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Theater Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {theatreData.map((theatre) => (
              <TableRow key={theatre.id}>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <Link to={`/theatre/shows`}>{theatre.theaterName}</Link>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'normal' }}> {/* Changed whiteSpace property */}
                  {theatre.theaterAddress}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TheatresList;
