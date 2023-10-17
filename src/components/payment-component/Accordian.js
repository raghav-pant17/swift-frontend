import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordian.css'
import Left from './Left'
import Right from './Right';
// import { View } from 'react-view';

export default function BasicAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const toggle = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
 

  return (
    <div>
      <Accordion  className='panel1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Name"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Email ID"
              />
              <TextField
                id="outlined-password-input"
                label="Phone No."
              />
            </div>
            <button onClick={toggle("panel2")} className='btn'>Continue</button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion className='panel2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='contain'>
            <Left/>
            <div className='v1'></div>
            <Right/>
        </div>
        
        </AccordionDetails>
      </Accordion>
    </div>
  );
}