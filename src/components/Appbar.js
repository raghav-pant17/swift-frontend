import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Appbar = (props) => {

  console.log("props value :")
    console.log(props)
    
  if(props.showData == null){
    
    return (
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static"  sx={{ bgcolor: "#002984" }}>
       <Toolbar>
           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
             <Link to="/" style={{textDecoration:'none', color:'white' }}>SWIFT</Link>
           </Typography>
         </Toolbar>
       </AppBar>
     </Box>
   )
  }

  else{
    var showData = props.showData
    return (
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static"  sx={{ bgcolor: "#002984" }}>
       <Toolbar>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             {showData ? showData.movie.name : ""}
           </Typography><br/>
           <Typography  component="div" sx={{ flexGrow: 1 }}>
             {showData ? showData.theater.name : ""}: { showData ? showData.theater.address : ""}&nbsp;|&nbsp;{showData ? showData.time : ""} 
           </Typography>
         </Toolbar>
       </AppBar>
     </Box>
    )
  }

  
}

export default Appbar;
