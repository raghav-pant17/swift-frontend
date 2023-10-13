import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Appbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ bgcolor: "#002984" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration:'none', color:'white' }}>SWIFT </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar;
